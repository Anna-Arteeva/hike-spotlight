import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import DetailViewLayout from "./DetailViewLayout";
import PhotoGallery from "./PhotoGallery";
import OrganizerSection from "./OrganizerSection";
import PastEventsSection from "./PastEventsSection";
import RouteStats from "./RouteStats";

interface RouteDetailsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Sample data
const pastEvents = [
  {
    id: "1",
    title: "Pottenstein Spring Hike",
    date: "Apr 15, 2024",
    participants: 18,
  },
  {
    id: "2",
    title: "Autumn Colors Walk",
    date: "Oct 22, 2023",
    participants: 12,
  },
  {
    id: "3",
    title: "Summer Group Hike",
    date: "Jul 8, 2023",
    participants: 24,
  },
];

const routeStats = [
  { label: "Distance", value: "29km", icon: "distance" as const },
  { label: "Ascent", value: "500", icon: "ascent" as const },
  { label: "Descent", value: "400", icon: "descent" as const },
  { label: "Highest point", value: "1560", icon: "highest" as const },
  { label: "Duration", value: "2:29", icon: "duration" as const },
  { label: "Rating", value: "650", icon: "rating" as const },
];

export const RouteDetails: React.FC<RouteDetailsProps> = ({
  open,
  onOpenChange,
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const photoGallery = (
    <PhotoGallery
      images={[]}
      onAddPhotos={() => console.log("Add photos")}
      addPhotoLabel="Add route photos"
    />
  );

  const mainContent = (
    <div className="space-y-8 pb-8">
      {/* Title */}
      <h1 className="text-2xl font-bold leading-tight">
        Pottenstein ring: A land of caves and castles, rivers and rocks
      </h1>

      {/* Route Info */}
      <div className="grid grid-cols-3 gap-6 text-sm">
        <div>
          <p className="text-muted-foreground">Activity</p>
          <p className="font-medium">Hiking</p>
        </div>
        <div>
          <p className="text-muted-foreground">Difficulty</p>
          <p className="font-medium">T3 Moderate</p>
        </div>
        <div>
          <p className="text-muted-foreground">Region</p>
          <p className="font-medium">Franconian Switzerland</p>
        </div>
      </div>

      <Separator />

      {/* Description */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Description</h2>
        <p className="text-muted-foreground leading-relaxed">
          Many poets and painters walked through the countryside of Franconian
          Switzerland hundreds years ago and catched it in word and on paintings.
          Franconian Switzerland is one of the largest nature parks in Germany and a real
          hidden gem. The area is very well known for its impressive caves, rock formations
          and green scenery. Also, there are many medieval castles and ruins..
        </p>
        <button
          onClick={() => setShowFullDescription(!showFullDescription)}
          className="text-primary text-sm hover:underline"
        >
          Show more
        </button>
      </div>

      <Separator />

      {/* Highlights */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Highlights</h2>
        <div className="flex flex-wrap gap-2">
          {["Cave exploration", "Castle ruins", "Rock formations", "Forest trails", "Scenic viewpoints"].map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <Separator />

      {/* Route Details */}
      <RouteStats stats={routeStats} />

      <Separator />

      {/* Tips */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Tips from the community</h2>
        <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
          <li>Best visited in spring or autumn for optimal weather</li>
          <li>Bring a headlamp if you want to explore the caves</li>
          <li>Several restaurants at the halfway point for refreshments</li>
          <li>Parking available at the start point (free on weekends)</li>
        </ul>
      </div>
    </div>
  );

  const sidebar = (
    <div className="space-y-6">
      <OrganizerSection
        name="John Doe"
        badge="Pro Explorer"
        onSendMessage={() => console.log("Send message")}
        label="Route Creator"
      />

      <Separator />

      <PastEventsSection events={pastEvents} totalEvents={8} />
    </div>
  );

  return (
    <DetailViewLayout
      open={open}
      onOpenChange={onOpenChange}
      photoGallery={photoGallery}
      mainContent={mainContent}
      sidebar={sidebar}
    />
  );
};

export default RouteDetails;
