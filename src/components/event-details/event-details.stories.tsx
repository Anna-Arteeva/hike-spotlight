import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Event Details",
};

export default meta;
type Story = StoryObj;

export const Placeholder: Story = {
  render: () => <div className="p-4 text-muted-foreground">Event details components are defined in the detail-view directory.</div>,
};
