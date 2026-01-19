import { useState } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Mountain, Clock, ArrowUpRight, MapPin, Heart, X } from "lucide-react";
import { DifficultyBadge } from "./DifficultyChips";
import type { Route } from "@/types/route";
import { ROUTE_TYPES } from "@/types/route";
import { formatDuration, formatDistance, formatElevation } from "@/lib/routeUtils";

interface SwipeableCardProps {
  route: Route;
  frontCard: boolean;
  drag?: "x" | false;
  index: number;
  setIndex: (index: number) => void;
  onSwipeLeft?: (route: Route) => void;
  onSwipeRight?: (route: Route) => void;
  onClick?: () => void;
}

function SwipeableCard({
  route,
  frontCard,
  drag,
  index,
  setIndex,
  onSwipeLeft,
  onSwipeRight,
  onClick,
}: SwipeableCardProps) {
  const [exitX, setExitX] = useState(0);
  const routeTypeLabel = ROUTE_TYPES.find((t) => t.value === route.route_type)?.label ?? route.route_type;

  const x = useMotionValue(0);
  const scale = useTransform(x, [-150, 0, 150], [0.95, 1, 0.95]);
  const rotate = useTransform(x, [-150, 0, 150], [-15, 0, 15], { clamp: false });
  const opacity = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
  
  // Swipe indicators opacity
  const likeOpacity = useTransform(x, [0, 100], [0, 1]);
  const nopeOpacity = useTransform(x, [-100, 0], [1, 0]);

  const variantsFrontCard = {
    animate: { scale: 1, y: 0, opacity: 1 },
    exit: (custom: number) => ({
      x: custom,
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.2 },
    }),
  };

  const variantsBackCard = {
    initial: { scale: 0.9, y: 40, opacity: 0 },
    animate: { scale: 0.95, y: 20, opacity: 0.7 },
  };

  function handleDragEnd(_: unknown, info: { offset: { x: number } }) {
    if (info.offset.x < -100) {
      setExitX(-300);
      setIndex(index + 1);
      onSwipeLeft?.(route);
    }
    if (info.offset.x > 100) {
      setExitX(300);
      setIndex(index + 1);
      onSwipeRight?.(route);
    }
  }

  return (
    <motion.div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        x,
        rotate,
        cursor: frontCard ? "grab" : "default",
      }}
      whileTap={frontCard ? { cursor: "grabbing" } : undefined}
      drag={drag}
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      onDragEnd={handleDragEnd}
      variants={frontCard ? variantsFrontCard : variantsBackCard}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={exitX}
      transition={
        frontCard
          ? { type: "spring", stiffness: 300, damping: 20 }
          : { scale: { duration: 0.2 }, opacity: { duration: 0.4 } }
      }
    >
      <motion.div style={{ scale, opacity }} onClick={frontCard ? onClick : undefined}>
        <Card className="overflow-hidden shadow-xl border-2 border-border bg-card">
          {/* Swipe Indicators */}
          {frontCard && (
            <>
              <motion.div
                className="absolute top-6 right-6 z-20 px-4 py-2 rounded-lg border-4 border-success bg-success/20 text-success font-bold text-xl rotate-12"
                style={{ opacity: likeOpacity }}
              >
                <Heart className="h-8 w-8" />
              </motion.div>
              <motion.div
                className="absolute top-6 left-6 z-20 px-4 py-2 rounded-lg border-4 border-destructive bg-destructive/20 text-destructive font-bold text-xl -rotate-12"
                style={{ opacity: nopeOpacity }}
              >
                <X className="h-8 w-8" />
              </motion.div>
            </>
          )}

          {/* Image area */}
          <div className="aspect-[4/3] bg-muted relative">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              <Mountain className="h-16 w-16 opacity-30" />
            </div>
            <div className="absolute top-4 left-4">
              <DifficultyBadge difficulty={route.difficulty} />
            </div>
            <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-background/90 backdrop-blur-sm text-sm font-medium text-foreground shadow-sm">
              {routeTypeLabel}
            </div>
          </div>

          <CardContent className="p-6 space-y-4">
            <div>
              <h3 className="font-bold text-xl text-foreground line-clamp-2">
                {route.title}
              </h3>
              <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="truncate">{route.region}, {route.country}</span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground line-clamp-3">
              {route.summary}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex items-center gap-6 text-sm font-medium text-foreground">
                <span className="flex items-center gap-1.5">
                  <ArrowUpRight className="h-5 w-5 text-primary" />
                  {formatDistance(route.distance_km)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-5 w-5 text-primary" />
                  {formatDuration(route.duration_min)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Mountain className="h-5 w-5 text-primary" />
                  {formatElevation(route.elevation_gain_m)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

interface SwipeableRouteStackProps {
  routes: Route[];
  onSwipeLeft?: (route: Route) => void;
  onSwipeRight?: (route: Route) => void;
  onCardClick?: (route: Route) => void;
  onEndReached?: () => void;
}

export function SwipeableRouteStack({
  routes,
  onSwipeLeft,
  onSwipeRight,
  onCardClick,
  onEndReached,
}: SwipeableRouteStackProps) {
  const [index, setIndex] = useState(0);

  const handleSetIndex = (newIndex: number) => {
    setIndex(newIndex);
    if (newIndex >= routes.length - 1) {
      onEndReached?.();
    }
  };

  const currentRoute = routes[index];
  const nextRoute = routes[index + 1];

  if (!currentRoute) {
    return (
      <div className="flex flex-col items-center justify-center h-[500px] text-center">
        <Mountain className="h-16 w-16 text-muted-foreground/30 mb-4" />
        <h3 className="text-lg font-semibold text-foreground mb-2">No more routes</h3>
        <p className="text-muted-foreground">You've seen all the routes!</p>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-md mx-auto" style={{ height: 520 }}>
      <AnimatePresence initial={false}>
        {nextRoute && (
          <SwipeableCard
            key={`back-${index + 1}`}
            route={nextRoute}
            frontCard={false}
            index={index + 1}
            setIndex={handleSetIndex}
          />
        )}
        <SwipeableCard
          key={`front-${index}`}
          route={currentRoute}
          frontCard={true}
          index={index}
          setIndex={handleSetIndex}
          drag="x"
          onSwipeLeft={onSwipeLeft}
          onSwipeRight={onSwipeRight}
          onClick={() => onCardClick?.(currentRoute)}
        />
      </AnimatePresence>

      {/* Swipe Instructions */}
      <div className="absolute -bottom-16 left-0 right-0 flex justify-center gap-8 text-sm text-muted-foreground">
        <span className="flex items-center gap-2">
          <X className="h-4 w-4 text-destructive" /> Swipe left to skip
        </span>
        <span className="flex items-center gap-2">
          <Heart className="h-4 w-4 text-success" /> Swipe right to save
        </span>
      </div>

      {/* Progress indicator */}
      <div className="absolute -bottom-8 left-0 right-0 text-center text-xs text-muted-foreground">
        {index + 1} / {routes.length}
      </div>
    </div>
  );
}
