import { Dialog, DialogContent, DialogOverlay, DialogPortal } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import React from "react";

interface DetailViewLayoutProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  photoGallery: React.ReactNode;
  mainContent: React.ReactNode;
  sidebar: React.ReactNode;
}

export const DetailViewLayout: React.FC<DetailViewLayoutProps> = ({
  open,
  onOpenChange,
  photoGallery,
  mainContent,
  sidebar,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="bg-black/50" />
        <DialogContent className="max-w-[95vw] w-full h-[95vh] p-0 bg-background overflow-hidden flex flex-col">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-50 h-auto p-2 hover:bg-muted"
            onClick={() => onOpenChange(false)}
          >
            <X className="w-6 h-6" />
          </Button>

          <div className="flex-1 overflow-y-auto">
            {/* Desktop layout */}
            <div className="hidden lg:flex min-h-full">
              {/* Photo Gallery Column */}
              <aside className="w-[300px] flex-shrink-0 p-6 pt-16">
                {photoGallery}
              </aside>

              {/* Main Content Column */}
              <main className="flex-1 px-8 py-6 pt-10">
                {mainContent}
              </main>

              {/* Sidebar Column */}
              <aside className="w-[320px] flex-shrink-0 p-6 pt-10 border-l border-border">
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
              <section>
                {photoGallery}
              </section>

              {/* Sidebar last */}
              <aside className="border-t border-border pt-6">
                {sidebar}
              </aside>
            </div>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default DetailViewLayout;
