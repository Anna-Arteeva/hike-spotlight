import { useRef } from "react";
import { Dialog, DialogContent, DialogOverlay, DialogPortal, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import React from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

interface DetailViewLayoutProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  photoGallery: React.ReactNode;
  mainContent: React.ReactNode;
  sidebar: React.ReactNode;
  title?: string;
  description?: string;
}

export const DetailViewLayout: React.FC<DetailViewLayoutProps> = ({
  open,
  onOpenChange,
  photoGallery,
  mainContent,
  sidebar,
  title = "Details",
  description = "View detailed information",
}) => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  // Smooth spring animation for progress bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Parallax effect for photo gallery (slower scroll)
  const photoY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  // Fade effect for header based on scroll
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);
  const headerBlur = useTransform(scrollYProgress, [0, 0.1], [0, 4]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="bg-black/50" />
        <DialogContent 
          className="max-w-[95vw] w-full h-[95vh] p-0 bg-background overflow-hidden flex flex-col"
          aria-labelledby="detail-dialog-title"
          aria-describedby="detail-dialog-description"
        >
          {/* Visually hidden but accessible title and description */}
          <VisuallyHidden>
            <DialogTitle id="detail-dialog-title">{title}</DialogTitle>
            <DialogDescription id="detail-dialog-description">{description}</DialogDescription>
          </VisuallyHidden>

          {/* Scroll Progress Indicator */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
            style={{ scaleX }}
          />

          <motion.div
            style={{ 
              opacity: headerOpacity,
              filter: useTransform(headerBlur, (v) => `blur(${v}px)`),
            }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-50 h-auto p-2 bg-background/80 hover:bg-foreground hover:text-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors"
              onClick={() => onOpenChange(false)}
              aria-label="Close dialog"
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </Button>
          </motion.div>

          <article 
            ref={containerRef}
            className="flex-1 overflow-y-auto scroll-smooth" 
            role="article"
          >
            {/* Desktop layout */}
            <div className="hidden lg:flex min-h-full">
              {/* Photo Gallery Column with Parallax */}
              <motion.aside 
                className="w-[300px] flex-shrink-0 p-6 pt-16"
                aria-label="Photo gallery"
                style={{ y: photoY }}
              >
                {photoGallery}
              </motion.aside>

              {/* Main Content Column */}
              <main className="flex-1 px-8 py-6 pt-10">
                {mainContent}
              </main>

              {/* Sidebar Column */}
              <aside 
                className="w-[320px] flex-shrink-0 p-6 pt-10 border-l border-border"
                aria-label="Additional information"
              >
                {sidebar}
              </aside>
            </div>

            {/* Mobile layout */}
            <div className="lg:hidden flex flex-col px-4 py-6 pt-14 space-y-8">
              {/* Main Content first on mobile */}
              <main>
                {mainContent}
              </main>

              {/* Photo Gallery second */}
              <section aria-label="Photo gallery">
                {photoGallery}
              </section>

              {/* Sidebar last */}
              <aside 
                className="border-t border-border pt-6"
                aria-label="Additional information"
              >
                {sidebar}
              </aside>
            </div>
          </article>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default DetailViewLayout;
