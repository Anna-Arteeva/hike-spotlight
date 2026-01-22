import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import DetailViewLayout from "./DetailViewLayout";
import PhotoGallery from "./PhotoGallery";
import OrganizerSection from "./OrganizerSection";
import ParticipantsSection from "./ParticipantsSection";
import DiscussionSection from "./DiscussionSection";
import RouteStats from "./RouteStats";
import type { Event } from "@/hooks/useEvents";
import { formatEventTime } from "@/hooks/useEvents";

interface EventDetailsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  event: Event | null;
}

// Sample comments (would come from database in future)
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

const equipmentLeft = ["Hiking boots", "food and drinks", "Cash for the ticket"];
const equipmentRight = ["Helmet", "Poles", "Headlamp"];

// Helper to format date for display
function formatDisplayDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    weekday: "long",
  });
}

// Helper to get difficulty label
function getDifficultyLabel(difficulty: string): string {
  switch (difficulty) {
    case "E":
      return "T1 Easy";
    case "E+":
      return "T2 Easy+";
    case "T":
      return "T3 Moderate";
    default:
      return difficulty;
  }
}

// Helper to get transport label
function getTransportLabel(transport: string, subtext?: string | null): string {
  if (subtext) return subtext;
  switch (transport) {
    case "train":
      return "Train";
    case "bus":
      return "Bus";
    case "none":
      return "No transport";
    default:
      return transport;
  }
}

export const EventDetails: React.FC<EventDetailsProps> = ({
  open,
  onOpenChange,
  event,
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  if (!event) {
    return null;
  }

  const routeStats = [
    { label: "Distance", value: event.distance || "N/A", icon: "distance" as const },
    { label: "Ascent", value: event.elevation || "N/A", icon: "ascent" as const },
    { label: "Descent", value: event.elevation_type === "descent" ? event.elevation || "N/A" : "N/A", icon: "descent" as const },
    { label: "Highest point", value: "N/A", icon: "highest" as const },
    { label: "Duration", value: event.duration_text || "N/A", icon: "duration" as const },
    { label: "Rating", value: "N/A", icon: "rating" as const },
  ];

  const photoGallery = (
    <PhotoGallery
      images={event.image_url ? [event.image_url] : []}
      onAddPhotos={() => console.log("Add photos")}
      addPhotoLabel="Add route photos"
    />
  );

  const mainContent = (
    <div className="space-y-8 pb-8">
      {/* Date and Time */}
      <div>
        <p className="text-lg font-medium">{formatDisplayDate(event.event_date)}</p>
        <p className="text-sm text-muted-foreground">
          {formatEventTime(event.event_time)} - {event.duration_text || "TBD"}
        </p>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold leading-tight">
        {event.title}
      </h1>

      {/* Activity Details */}
      <div className="grid grid-cols-4 gap-6 text-sm">
        <div>
          <p className="text-muted-foreground">Activity</p>
          <p className="font-medium capitalize">{event.activity}</p>
        </div>
        <div>
          <p className="text-muted-foreground">Difficulty</p>
          <p className="font-medium">{getDifficultyLabel(event.difficulty)}</p>
        </div>
        <div>
          <p className="text-muted-foreground">Departs from</p>
          <p className="font-medium">{event.departure_location}</p>
        </div>
        <div>
          <p className="text-muted-foreground">Transport</p>
          <p className="font-medium">{getTransportLabel(event.transport, event.transport_subtext)}</p>
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
          {event.description || "No description available for this event."}
        </p>
        {event.description && event.description.length > 200 && (
          <button
            onClick={() => setShowFullDescription(!showFullDescription)}
            className="text-primary text-sm hover:underline"
          >
            {showFullDescription ? "Show less" : "Show more"}
          </button>
        )}
      </div>

      {/* Meeting and Transport */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Meeting and transport</h2>
        <p className="text-muted-foreground">
          Meet at the departure location before the scheduled time.
        </p>
        
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <p className="text-muted-foreground">Meeting location</p>
            <p className="font-medium">{event.departure_location}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Meeting time</p>
            <p className="font-medium">{formatEventTime(event.event_time)}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Transport</p>
            <p className="font-medium">{getTransportLabel(event.transport, event.transport_subtext)}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Duration</p>
            <p className="font-medium">{event.duration_text || "TBD"}</p>
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
        name={event.organizer_name}
        badge="Organizer"
        onSendMessage={() => console.log("Send message")}
        label="Organizer"
      />

      <Separator />

      <ParticipantsSection
        currentParticipants={event.current_participants}
        maxParticipants={event.max_participants}
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
      title={event.title}
      description={event.description || "Event details"}
    />
  );
};

export default EventDetails;
