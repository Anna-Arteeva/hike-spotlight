import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import React from "react";
import DiscussionSection from "./DiscussionSection";
import EventDetailsSection from "./EventDetailsSection";

const photoGalleryImages = [
  {
    src: "",
    alt: "Rectangle copy",
    className: "relative w-[359px] h-[381px] object-cover rounded-lg",
  },
  {
    src: "",
    alt: "Rectangle copy",
    className: "relative w-64 h-[211px] object-cover rounded-lg",
  },
];

const smallPhotoImages = [
  {
    src: "",
    alt: "Rectangle copy",
    className: "relative self-stretch w-full h-[102px] object-cover rounded-lg",
  },
  {
    src: "",
    alt: "Rectangle copy",
    className: "relative self-stretch w-full h-[102px] object-cover rounded-lg",
  },
];

const bottomPhotoImages = [
  {
    src: "",
    alt: "Rectangle copy",
    className: "relative w-[152px] h-[120px] object-cover rounded-lg",
  },
  {
    src: "",
    alt: "Rectangle copy",
    className: "relative w-24 h-[120px] object-cover rounded-lg",
  },
];

interface EventDetailsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const EventDetailsModal: React.FC<EventDetailsModalProps> = ({
  open,
  onOpenChange,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent className="max-w-[95vw] w-full h-[95vh] p-0 bg-background">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-50 h-auto p-2"
            onClick={() => onOpenChange(false)}
          >
            <X className="w-6 h-6" />
          </Button>

          <div className="flex h-full overflow-hidden">
            <aside className="w-[379px] flex-shrink-0 p-[22px] pt-[97px] overflow-y-auto">
              <div className="flex flex-wrap items-start gap-[10px]">
                {photoGalleryImages.map((image, index) => (
                  <div
                    key={`photo-${index}`}
                    className={`${image.className} bg-muted`}
                  />
                ))}

                <div className="flex flex-col w-24 items-start gap-[7px] relative">
                  {smallPhotoImages.map((image, index) => (
                    <div
                      key={`small-photo-${index}`}
                      className={`${image.className} bg-muted`}
                    />
                  ))}
                </div>

                {bottomPhotoImages.map((image, index) => (
                  <div
                    key={`bottom-photo-${index}`}
                    className={`${image.className} bg-muted`}
                  />
                ))}

                <div className="relative w-fit font-body font-normal text-primary text-base tracking-[0] leading-[normal] cursor-pointer hover:underline">
                  Add route photos
                </div>
              </div>
            </aside>

            <main className="flex-1 flex overflow-hidden">
              <section className="flex-1 relative overflow-y-auto px-8">
                <EventDetailsSection />
              </section>

              <section className="w-[400px] flex-shrink-0 relative overflow-y-auto pr-6 pt-6">
                <DiscussionSection />
              </section>
            </main>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};
