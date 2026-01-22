import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Header from "@/components/Header";
import EventCard from "@/components/EventCard";
import { EventsSidebar } from "@/components/sidebar/EventsSidebar";
import { EventDetails } from "@/components/detail-view";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ChevronDown, MapPin, Loader2 } from "lucide-react";
import { useGeolocation } from "@/hooks/useGeolocation";
import { useUpcomingEvents, formatEventTime, groupEventsByDate, formatEventDate } from "@/hooks/useEvents";
import { Skeleton } from "@/components/ui/skeleton";

const Index = () => {
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const { t } = useTranslation();
  const { city, loading, requestLocation, requested } = useGeolocation();
  const [eventsParent] = useAutoAnimate();
  
  const { data: events, isLoading, error } = useUpcomingEvents();

  // Group events by date
  const groupedEvents = events ? groupEventsByDate(events) : new Map();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <main className="flex-1">
            <h1 className="text-4xl font-bold mb-6">{t('events.title')}</h1>
            
            <Tabs defaultValue="upcoming" className="mb-6">
              <TabsList className="bg-transparent border-b border-border rounded-none w-full justify-start p-0 h-auto" aria-label={t('events.title')}>
                <TabsTrigger 
                  value="upcoming" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 pb-2"
                >
                  {t('events.upcomingEvents')}
                </TabsTrigger>
                <TabsTrigger 
                  value="location"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 pb-2 flex items-center gap-1"
                  onClick={!city && !loading ? requestLocation : undefined}
                >
                  {loading ? (
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  ) : (
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                  )}
                  {city 
                    ? t('events.fromLocation', { location: city })
                    : requested && !city 
                      ? t('events.nearYou')
                      : t('events.shareLocation')
                  }
                </TabsTrigger>
                <TabsTrigger 
                  value="all"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 pb-2 flex items-center gap-1"
                >
                  {t('events.allActivities')}
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </TabsTrigger>
              </TabsList>
              {/* Hidden TabsContent elements to satisfy ARIA requirements */}
              <TabsContent value="upcoming" className="sr-only" />
              <TabsContent value="location" className="sr-only" />
              <TabsContent value="all" className="sr-only" />
            </Tabs>

            {/* Loading State */}
            {isLoading && (
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex gap-6 py-4">
                    <Skeleton className="w-16 h-16" />
                    <Skeleton className="w-16 h-16 rounded" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-4 w-3/4" />
                      <Skeleton className="h-3 w-1/2" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="text-center py-8 text-destructive">
                <p>Failed to load events. Please try again later.</p>
              </div>
            )}

            {/* Events List */}
            {!isLoading && !error && (
              <div ref={eventsParent}>
                {Array.from(groupedEvents.entries()).map(([dateKey, dateEvents]) => (
                  <section key={dateKey} className="mb-8" aria-labelledby={`heading-${dateKey}`}>
                    <div className="flex items-center justify-between mb-4">
                      <h2 id={`heading-${dateKey}`} className="text-lg font-semibold">
                        {formatEventDate(dateKey)}
                      </h2>
                      <div className="flex gap-20 text-xs text-muted-foreground">
                        <span>{t('events.departingFrom')}</span>
                        <span>{t('events.activity')}</span>
                        <span>{t('events.participants')}</span>
                      </div>
                    </div>
                    
                    {dateEvents.map((event) => (
                      <EventCard
                        key={event.id}
                        time={formatEventTime(event.event_time)}
                        timeSubtext={event.duration_text || ""}
                        image={event.image_url || ""}
                        title={event.title}
                        organizer={event.organizer_name}
                        organizerAvatar={event.organizer_avatar || ""}
                        departure={event.departure_location}
                        transport={event.transport}
                        transportSubtext={event.transport_subtext || undefined}
                        activity={event.activity}
                        difficulty={event.difficulty}
                        distance={event.distance || ""}
                        elevation={event.elevation || ""}
                        elevationType={event.elevation_type || "total height"}
                        participants={event.current_participants}
                        availableSpots={event.max_participants - event.current_participants}
                        participantAvatars={["", "", "", "", ""]}
                        onClick={() => setIsEventModalOpen(true)}
                      />
                    ))}
                  </section>
                ))}

                {groupedEvents.size === 0 && (
                  <div className="text-center py-12 text-muted-foreground">
                    <p>No upcoming events found.</p>
                  </div>
                )}
              </div>
            )}
          </main>

          {/* Sidebar */}
          <aside className="w-auto flex-shrink-0">
            <EventsSidebar />
          </aside>
        </div>
      </div>

      <EventDetails open={isEventModalOpen} onOpenChange={setIsEventModalOpen} />
    </div>
  );
};

export default Index;
