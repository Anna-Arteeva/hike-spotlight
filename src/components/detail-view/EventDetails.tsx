import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import DetailViewLayout from "./DetailViewLayout";
import PhotoGallery from "./PhotoGallery";
import OrganizerSection from "./OrganizerSection";
import ParticipantsSection from "./ParticipantsSection";
import DiscussionSection from "./DiscussionSection";
import RouteStats from "./RouteStats";

interface EventDetailsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Sample data
const sampleComments = [
  {
    id: "1",
    author: "Victor",
    message: "Do you think winter hiking boots or lighter trail running shoes would be better for this trek? If there's no snow and it's not too cold, I'm leaning towards the trail running shoes being best.",
    timestamp: "1d ago",
  },
  {
    id: "2",
    author: "Anna",
    message: "I only carry some clothes and necessary stuff, in total less than 4 kilos. I'm staying in houses",
    timestamp: "1d ago",
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

const equipmentLeft = ["Hiking boots", "food and drinks", "Cash for the ticket"];
const equipmentRight = ["Helmet", "Poles", "Headlamp"];

export const EventDetails: React.FC<EventDetailsProps> = ({
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
      {/* Date and Time */}
      <div>
        <p className="text-lg font-medium">May 10, Sunday</p>
        <p className="text-sm text-muted-foreground">06:40 AM - 17:00 PM</p>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold leading-tight">
        Pottenstein ring: A land of caves and castles, rivers and rocks
      </h1>

      {/* Activity Details */}
      <div className="grid grid-cols-4 gap-6 text-sm">
        <div>
          <p className="text-muted-foreground">Activity</p>
          <p className="font-medium">Hiking</p>
        </div>
        <div>
          <p className="text-muted-foreground">Difficulty</p>
          <p className="font-medium">T3 Moderate</p>
        </div>
        <div>
          <p className="text-muted-foreground">Departs from</p>
          <p className="font-medium">Munich</p>
        </div>
        <div>
          <p className="text-muted-foreground">Transport</p>
          <p className="font-medium">Train, bus</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        <div className="flex gap-2">
          <div className="h-10 w-10 rounded-full bg-muted" />
          <div className="h-10 w-10 rounded-full bg-muted" />
        </div>
        <Button className="ml-auto px-8">Join event</Button>
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

      {/* Meeting and Transport */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Meeting and transport</h2>
        <p className="text-muted-foreground">
          We meet on platform and buy a group ticket all together.
        </p>
        
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <p className="text-muted-foreground">Meeting location</p>
            <p className="font-medium">Munich HBF, Platform 29</p>
          </div>
          <div>
            <p className="text-muted-foreground">Meeting time</p>
            <p className="font-medium">6:40 AM</p>
          </div>
          <div>
            <p className="text-muted-foreground">Transport</p>
            <p className="font-medium">Train, bus 145 to Lindau</p>
          </div>
          <div>
            <p className="text-muted-foreground">Ticket price</p>
            <p className="font-medium">€16 per person</p>
          </div>
        </div>
      </div>

      <Separator />

      {/* Equipment */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Equipment</h2>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <ul className="space-y-2">
            {equipmentLeft.map((item, index) => (
              <li key={index} className="text-muted-foreground">{item}</li>
            ))}
          </ul>
          <ul className="space-y-2">
            {equipmentRight.map((item, index) => (
              <li key={index} className="text-muted-foreground">{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <Separator />

      {/* Route Details */}
      <RouteStats stats={routeStats} />
    </div>
  );

  const sidebar = (
    <div className="space-y-6">
      <OrganizerSection
        name="John Doe"
        badge="Badge"
        onSendMessage={() => console.log("Send message")}
        label="Organizer"
      />

      <Separator />

      <ParticipantsSection
        currentParticipants={12}
        maxParticipants={20}
        participantAvatars={["", "", "", "", "", ""]}
        onJoin={() => console.log("Join")}
      />

      <Separator />

      <DiscussionSection comments={sampleComments} totalComments={5} />
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

export default EventDetails;
