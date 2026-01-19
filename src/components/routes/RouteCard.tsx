import { Card, CardContent } from '@/components/ui/card';
import { Mountain, Clock, ArrowUpRight, MapPin } from 'lucide-react';
import { DifficultyBadge } from './DifficultyChips';
import type { Route } from '@/types/route';
import { ROUTE_TYPES } from '@/types/route';
import { formatDuration, formatDistance, formatElevation } from '@/lib/routeUtils';
import { cn } from '@/lib/utils';

interface RouteCardProps {
  route: Route;
  className?: string;
  onClick?: () => void;
}

export function RouteCard({ route, className, onClick }: RouteCardProps) {
  const routeTypeLabel = ROUTE_TYPES.find(t => t.value === route.route_type)?.label ?? route.route_type;

  return (
    <div onClick={onClick} className="cursor-pointer">
      <Card className={cn(
        'overflow-hidden transition-all hover:shadow-lg hover:border-primary/30 group',
        className
      )}>
        {/* Placeholder image area */}
        <div className="aspect-[16/10] bg-muted relative">
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
            <Mountain className="h-12 w-12 opacity-30" />
          </div>
          <div className="absolute top-3 left-3">
            <DifficultyBadge difficulty={route.difficulty} />
          </div>
          <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-background/80 backdrop-blur-sm text-xs font-medium text-foreground">
            {routeTypeLabel}
          </div>
        </div>

        <CardContent className="p-4 space-y-3">
          <div>
            <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
              {route.title}
            </h3>
            <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
              <span className="truncate">{route.region}, {route.country}</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {route.summary}
          </p>

          <div className="flex items-center justify-between pt-2 border-t border-border">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <ArrowUpRight className="h-4 w-4" />
                {formatDistance(route.distance_km)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {formatDuration(route.duration_min)}
              </span>
              <span className="flex items-center gap-1">
                <Mountain className="h-4 w-4" />
                {formatElevation(route.elevation_gain_m)}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function RouteCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-[16/10] bg-muted animate-pulse" />
      <CardContent className="p-4 space-y-3">
        <div className="h-5 bg-muted rounded animate-pulse w-3/4" />
        <div className="h-4 bg-muted rounded animate-pulse w-1/2" />
        <div className="h-12 bg-muted rounded animate-pulse" />
        <div className="flex gap-4 pt-2 border-t border-border">
          <div className="h-4 bg-muted rounded animate-pulse w-16" />
          <div className="h-4 bg-muted rounded animate-pulse w-16" />
          <div className="h-4 bg-muted rounded animate-pulse w-16" />
        </div>
      </CardContent>
    </Card>
  );
}
