import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { MemoryRouter } from "react-router-dom";
import { CreateEventModal } from "@/components/create-event";
import EventCard from "@/components/EventCard";
import SiteHeader from "@/components/SiteHeader";
import { NavLink } from "@/components/NavLink";
import SidebarEventCard from "@/components/SidebarEventCard";
import { Button } from "@/components/ui/button";

const meta: Meta = {
  title: "Components",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderPrimary: Story = {
  render: () => (
    <MemoryRouter>
      <SiteHeader />
    </MemoryRouter>
  ),
};

export const HeaderSecondary: Story = {
  render: () => (
    <div className="bg-muted p-2">
      <MemoryRouter>
        <SiteHeader />
      </MemoryRouter>
    </div>
  ),
};

export const HeaderLoading: Story = {
  render: () => (
    <div className="opacity-60">
      <MemoryRouter>
        <SiteHeader />
      </MemoryRouter>
    </div>
  ),
};

export const HeaderEdgeCase: Story = {
  render: () => (
    <div className="max-w-[360px]">
      <MemoryRouter>
        <SiteHeader />
      </MemoryRouter>
    </div>
  ),
};

export const NavLinkPrimary: Story = {
  render: () => (
    <MemoryRouter>
      <NavLink to="/" className="text-primary">
        Events
      </NavLink>
    </MemoryRouter>
  ),
};

export const NavLinkSecondary: Story = {
  render: () => (
    <MemoryRouter>
      <NavLink to="/routes" className="text-muted-foreground" activeClassName="text-primary">
        Routes
      </NavLink>
    </MemoryRouter>
  ),
};

export const NavLinkLoading: Story = {
  render: () => (
    <MemoryRouter>
      <NavLink to="/" className="opacity-60">
        Loading link
      </NavLink>
    </MemoryRouter>
  ),
};

export const NavLinkEdgeCase: Story = {
  render: () => (
    <MemoryRouter>
      <NavLink to="/" className="text-primary">
        Very long nav link label for edge cases
      </NavLink>
    </MemoryRouter>
  ),
};

export const CreateEventModalPrimary: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return <CreateEventModal open={open} onClose={() => setOpen(false)} />;
  },
};

export const CreateEventModalSecondary: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div className="bg-muted p-2">
        <CreateEventModal open={open} onClose={() => setOpen(false)} />
      </div>
    );
  },
};

export const CreateEventModalLoading: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div className="opacity-60">
        <CreateEventModal open={open} onClose={() => setOpen(false)} />
      </div>
    );
  },
};

export const CreateEventModalEdgeCase: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div className="space-y-2">
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <CreateEventModal open={open} onClose={() => setOpen(false)} />
      </div>
    );
  },
};

export const EventCardPrimary: Story = {
  render: () => (
    <EventCard
      time="08:30"
      timeSubtext="Sat"
      image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=120&h=120&fit=crop"
      title="Morning ridge hike"
      organizer="Anna"
      organizerAvatar="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=40&h=40&fit=crop"
      departure="Munich HBF"
      transport="train"
      transportSubtext="Regional train"
      activity="hiking"
      difficulty="E+"
      distance="12km"
      elevation="700m"
      elevationType="total height"
      participants={8}
      availableSpots={4}
      participantAvatars={[
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop",
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=40&h=40&fit=crop",
      ]}
    />
  ),
};

export const EventCardSecondary: Story = {
  render: () => (
    <EventCard
      time="18:15"
      timeSubtext="Fri"
      image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=120&h=120&fit=crop"
      title="After work cycling"
      organizer="Leo"
      departure="Central station"
      transport="bus"
      activity="cycling"
      difficulty="T"
      distance="22km"
      elevation="300m"
      elevationType="descent"
      participants={12}
      availableSpots={2}
      participantAvatars={[]}
    />
  ),
};

export const EventCardLoading: Story = {
  render: () => (
    <div className="opacity-60">
      <EventCard
        time="--"
        timeSubtext="--"
        image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=120&h=120&fit=crop"
        title="Loading event"
        organizer="--"
        departure="--"
        transport="none"
        activity="hiking"
        difficulty="E"
        distance="--"
        elevation="--"
        elevationType="total height"
        participants={0}
        availableSpots={0}
        participantAvatars={[]}
      />
    </div>
  ),
};

export const EventCardEdgeCase: Story = {
  render: () => (
    <EventCard
      time="06:00"
      timeSubtext="Sun"
      image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=120&h=120&fit=crop"
      title="Very long event title that should wrap across multiple lines in the card layout"
      organizer="Organizer with a long name"
      departure="Munich HBF"
      transport="none"
      transportSubtext="Self-organized"
      activity="hiking"
      difficulty="E+"
      distance="120km"
      elevation="4800m"
      elevationType="total height"
      participants={18}
      availableSpots={0}
      participantAvatars={[
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop",
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=40&h=40&fit=crop",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop",
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=40&h=40&fit=crop",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop",
      ]}
    />
  ),
};

export const SidebarEventCardPrimary: Story = {
  render: () => (
    <SidebarEventCard
      date="Jun 30"
      dayOfWeek="Sat"
      title="Full-carpool after work hike to Kampenwand"
      time="6:45"
      from="Munich"
      transport="Train"
      activity="Cycling"
      distance="18km"
      elevation="560m"
      participants="+14"
      organizer="Jean-Christian"
      organizerAvatar="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=40&h=40&fit=crop"
      status="available"
      images={[
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=70&h=70&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=70&h=70&fit=crop",
        "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=70&h=70&fit=crop",
      ]}
    />
  ),
};

export const SidebarEventCardSecondary: Story = {
  render: () => (
    <SidebarEventCard
      date="Jun 30"
      dayOfWeek="Sat"
      title="Cycling meetup"
      time="6:45"
      from="Munich"
      transport="Train"
      activity="Cycling"
      distance="18km"
      elevation="560m"
      participants="+14"
      organizer="Jean-Christian"
      status="full"
    />
  ),
};

export const SidebarEventCardLoading: Story = {
  render: () => (
    <div className="opacity-60">
      <SidebarEventCard
        date="--"
        dayOfWeek="--"
        title="Loading event"
        time="--"
        from="--"
        transport="--"
        activity="--"
        distance="--"
        elevation="--"
        participants="--"
        organizer="--"
      />
    </div>
  ),
};

export const SidebarEventCardEdgeCase: Story = {
  render: () => (
    <SidebarEventCard
      date="Jun 30"
      dayOfWeek="Saturday"
      title="Very long event title that should wrap in the sidebar card layout"
      time="6:45"
      from="A very long location name"
      transport="Train"
      activity="Cycling"
      distance="120km"
      elevation="3200m"
      participants="+99"
      organizer="Organizer with long name"
    />
  ),
};
