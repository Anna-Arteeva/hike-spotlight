import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

export type Event = Tables<"events">;

export function useEvents() {
  return useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("event_date", { ascending: true })
        .order("event_time", { ascending: true });

      if (error) throw error;
      return data as Event[];
    },
  });
}

export function useUpcomingEvents() {
  const today = new Date().toISOString().split("T")[0];
  
  return useQuery({
    queryKey: ["events", "upcoming"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .gte("event_date", today)
        .order("event_date", { ascending: true })
        .order("event_time", { ascending: true });

      if (error) throw error;
      return data as Event[];
    },
  });
}

// Helper to format event time for display
export function formatEventTime(time: string): string {
  return time.slice(0, 5); // "06:45:00" -> "06:45"
}

// Helper to group events by date
export function groupEventsByDate(events: Event[]): Map<string, Event[]> {
  const grouped = new Map<string, Event[]>();
  
  events.forEach((event) => {
    const dateKey = event.event_date;
    if (!grouped.has(dateKey)) {
      grouped.set(dateKey, []);
    }
    grouped.get(dateKey)!.push(event);
  });
  
  return grouped;
}

// Helper to format date for display
export function formatEventDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    weekday: "long",
  });
}
