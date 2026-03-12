import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import DiscussionSection from "@/components/event-details/DiscussionSection";
import { EventDetailsModal } from "@/components/event-details/EventDetailsModal";
import EventDetailsSection from "@/components/event-details/EventDetailsSection";
import { Button } from "@/components/ui/button";

const meta: Meta = {
  title: "Event Details",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const EventDetailsSectionPrimary: Story = {
  render: () => <EventDetailsSection />,
};

export const EventDetailsSectionSecondary: Story = {
  render: () => <EventDetailsSection />,
};

export const EventDetailsSectionLoading: Story = {
  render: () => <div className="opacity-60">Loading event details...</div>,
};

export const EventDetailsSectionEdgeCase: Story = {
  render: () => <EventDetailsSection />,
};

export const DiscussionSectionPrimary: Story = {
  render: () => <DiscussionSection />,
};

export const DiscussionSectionSecondary: Story = {
  render: () => <DiscussionSection />,
};

export const DiscussionSectionLoading: Story = {
  render: () => <div className="opacity-60">Loading discussion...</div>,
};

export const DiscussionSectionEdgeCase: Story = {
  render: () => <DiscussionSection />,
};

export const EventDetailsModalPrimary: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div className="space-y-3">
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <EventDetailsModal open={open} onOpenChange={setOpen} />
      </div>
    );
  },
};

export const EventDetailsModalSecondary: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div className="space-y-3">
        <Button variant="secondary" onClick={() => setOpen(true)}>
          Open modal
        </Button>
        <EventDetailsModal open={open} onOpenChange={setOpen} />
      </div>
    );
  },
};

export const EventDetailsModalLoading: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div className="space-y-3 opacity-60">
        <Button onClick={() => setOpen(true)}>Loading modal</Button>
        <EventDetailsModal open={open} onOpenChange={setOpen} />
      </div>
    );
  },
};

export const EventDetailsModalEdgeCase: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div className="space-y-3">
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open modal
        </Button>
        <EventDetailsModal open={open} onOpenChange={setOpen} />
      </div>
    );
  },
};
