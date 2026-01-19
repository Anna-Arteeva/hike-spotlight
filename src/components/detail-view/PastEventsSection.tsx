import React from "react";
import { Calendar } from "lucide-react";

interface PastEvent {
  id: string;
  title: string;
  date: string;
  participants: number;
}

interface PastEventsSectionProps {
  events: PastEvent[];
  totalEvents?: number;
}

export const PastEventsSection: React.FC<PastEventsSectionProps> = ({
  events,
  totalEvents,
}) => {
  const remainingEvents = totalEvents ? totalEvents - events.length : 0;

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Past events on this route</h3>
      
      <div className="space-y-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted cursor-pointer transition-colors"
          >
            <Calendar className="h-4 w-4 text-muted-foreground mt-0.5" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{event.title}</p>
              <p className="text-xs text-muted-foreground">
                {event.date} · {event.participants} participants
              </p>
            </div>
          </div>
        ))}
      </div>

      {remainingEvents > 0 && (
        <button className="text-primary text-sm hover:underline">
          View {remainingEvents} more events
        </button>
      )}
    </div>
  );
};

export default PastEventsSection;
