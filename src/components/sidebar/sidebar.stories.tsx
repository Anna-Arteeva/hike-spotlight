import type { Meta, StoryObj } from "@storybook/react";
import { ActivityDetails } from "@/components/sidebar/ActivityDetails";
import { EventDate } from "@/components/sidebar/EventDate";
import { EventPhotos } from "@/components/sidebar/EventPhotos";
import { EventsListPanel } from "@/components/sidebar/EventsListPanel";
import { EventsSidebar } from "@/components/sidebar/EventsSidebar";
import { ParticipantsList } from "@/components/sidebar/ParticipantsList";
import { SidebarEventCard } from "@/components/sidebar/SidebarEventCard";

const meta: Meta = {
  title: "Sidebar",
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleParticipants = [
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop",
  },
  {
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=50&h=50&fit=crop",
  },
];

const samplePhotos = [
  {
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=140&h=120&fit=crop",
    width: "w-[70px]",
    height: "h-[67px]",
  },
  {
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=198&h=67&fit=crop",
    width: "w-[99px]",
    height: "h-[67px]",
  },
  {
    image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=104&h=67&fit=crop",
    width: "w-[52px]",
    height: "h-[67px]",
  },
];

export const EventDatePrimary: Story = {
  render: () => <EventDate date="30" day="Sat" />,
};

export const EventDateSecondary: Story = {
  render: () => <EventDate date="30" day="Sat" variant="past" month="Jun" />,
};

export const EventDateLoading: Story = {
  render: () => <EventDate date="--" day="--" />,
};

export const EventDateEdgeCase: Story = {
  render: () => <EventDate date="12" day="Wednesday" />,
};

export const ParticipantsListPrimary: Story = {
  render: () => (
    <ParticipantsList participants={sampleParticipants} additionalCount={6} organizer="Jean-Christian" />
  ),
};

export const ParticipantsListSecondary: Story = {
  render: () => <ParticipantsList participants={sampleParticipants} organizer="Anna" />,
};

export const ParticipantsListLoading: Story = {
  render: () => <ParticipantsList participants={[]} organizer="Loading" />,
};

export const ParticipantsListEdgeCase: Story = {
  render: () => (
    <ParticipantsList
      participants={sampleParticipants}
      additionalCount={99}
      organizer="Organizer with a long name"
    />
  ),
};

export const ActivityDetailsPrimary: Story = {
  render: () => (
    <ActivityDetails
      level="Medium"
      activityType={{ icon: "ti-bike", name: "Cycling" }}
      distance="18km"
      elevation="560m"
    />
  ),
};

export const ActivityDetailsSecondary: Story = {
  render: () => (
    <ActivityDetails
      level="Hard"
      activityType={{ icon: "ti-hike", name: "Hiking" }}
      distance="24km"
      elevation="1200m"
    />
  ),
};

export const ActivityDetailsLoading: Story = {
  render: () => (
    <ActivityDetails
      level="--"
      activityType={{ icon: "ti-bike", name: "Loading" }}
      distance="--"
      elevation="--"
    />
  ),
};

export const ActivityDetailsEdgeCase: Story = {
  render: () => (
    <ActivityDetails
      level="Very hard"
      activityType={{ icon: "ti-hike", name: "Mountain hiking adventure" }}
      distance="100km"
      elevation="4500m"
    />
  ),
};

export const EventPhotosPrimary: Story = {
  render: () => <EventPhotos photos={samplePhotos} />,
};

export const EventPhotosSecondary: Story = {
  render: () => <EventPhotos photos={samplePhotos} additionalCount={12} />,
};

export const EventPhotosLoading: Story = {
  render: () => <EventPhotos photos={[]} />,
};

export const EventPhotosEdgeCase: Story = {
  render: () => <EventPhotos photos={samplePhotos} additionalCount={999} />,
};

export const SidebarEventCardPrimary: Story = {
  render: () => (
    <SidebarEventCard
      date="Jun 30"
      day="Sat"
      title="Full-carpool after work hike to Kampenwand"
      time="6:45"
      location="Munich"
      transport="Train"
      level="Medium"
      activityType={{ icon: "ti-bike", name: "Cycling" }}
      distance="18km"
      elevation="560m"
      participants={sampleParticipants}
      additionalParticipants={14}
      organizer="Jean-Christian"
      status="full"
    />
  ),
};

export const SidebarEventCardSecondary: Story = {
  render: () => (
    <SidebarEventCard
      date="30"
      day="Sat"
      month="Jun"
      title="Past event with photos"
      time="6:45"
      location="Munich"
      transport="Train"
      level="Medium"
      activityType={{ icon: "ti-bike", name: "Cycling" }}
      distance="18km"
      elevation="560m"
      participants={sampleParticipants}
      additionalParticipants={6}
      organizer="Anna"
      variant="past"
      photos={samplePhotos}
      additionalPhotos={4}
      actionButton={{ text: "Write reviews", className: "bg-primary/10" }}
    />
  ),
};

export const SidebarEventCardLoading: Story = {
  render: () => (
    <SidebarEventCard
      date="--"
      day="--"
      title="Loading event"
      time="--"
      location="--"
      transport="--"
      level="--"
      activityType={{ icon: "ti-bike", name: "--" }}
      distance="--"
      elevation="--"
      participants={[]}
      organizer="--"
    />
  ),
};

export const SidebarEventCardEdgeCase: Story = {
  render: () => (
    <SidebarEventCard
      date="Jun 30"
      day="Sat"
      title="Very long event title that should wrap onto multiple lines in the sidebar card layout"
      time="6:45"
      location="Long location name"
      transport="Train"
      level="Hard"
      activityType={{ icon: "ti-bike", name: "Cycling endurance" }}
      distance="120km"
      elevation="3200m"
      participants={sampleParticipants}
      additionalParticipants={24}
      organizer="Organizer with a long name"
    />
  ),
};

export const EventsListPanelPrimary: Story = {
  render: () => <EventsListPanel />,
};

export const EventsListPanelSecondary: Story = {
  render: () => <EventsListPanel />,
};

export const EventsListPanelLoading: Story = {
  render: () => <div className="opacity-60">Loading list panel...</div>,
};

export const EventsListPanelEdgeCase: Story = {
  render: () => <EventsListPanel />,
};

export const EventsSidebarPrimary: Story = {
  render: () => <EventsSidebar />,
};

export const EventsSidebarSecondary: Story = {
  render: () => <EventsSidebar />,
};

export const EventsSidebarLoading: Story = {
  render: () => <div className="opacity-60">Loading sidebar...</div>,
};

export const EventsSidebarEdgeCase: Story = {
  render: () => <EventsSidebar />,
};
