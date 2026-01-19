import { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import EventCard from "@/components/EventCard";
import { EventsSidebar } from "@/components/sidebar/EventsSidebar";
import { EventDetails } from "@/components/detail-view";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ChevronDown } from "lucide-react";
import event1 from "@/assets/event1.jpg";
import event2 from "@/assets/event2.jpg";
import event3 from "@/assets/event3.jpg";
import event4 from "@/assets/event4.jpg";
import event5 from "@/assets/event5.jpg";
import event6 from "@/assets/event6.jpg";

const Index = () => {
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const { t } = useTranslation();

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
                  value="munich"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 pb-2"
                >
                  {t('events.fromMunich')}
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
              <TabsContent value="munich" className="sr-only" />
              <TabsContent value="all" className="sr-only" />
            </Tabs>

            {/* Events List */}
            <section className="mb-8" aria-labelledby="tomorrow-heading">
              <div className="flex items-center justify-between mb-4">
                <h2 id="tomorrow-heading" className="text-lg font-semibold">{t('events.tomorrowSaturday')}</h2>
                <div className="flex gap-20 text-xs text-muted-foreground">
                  <span>{t('events.departingFrom')}</span>
                  <span>{t('events.activity')}</span>
                  <span>{t('events.participants')}</span>
                </div>
              </div>
              
              <EventCard
                time="6:45"
                timeSubtext="3 days"
                image={event1}
                title="A very long event name bla second line"
                organizer="Jessica"
                organizerAvatar=""
                departure="Munich Hbf, pl 29"
                transport="train"
                transportSubtext="Train"
                activity="hiking"
                difficulty="E"
                distance="18km"
                elevation="1982"
                elevationType="total height"
                participants={12}
                availableSpots={4}
                participantAvatars={["", "", "", "", ""]}
                onClick={() => setIsEventModalOpen(true)}
              />
              
              <EventCard
                time="6:45"
                timeSubtext="12 hours"
                image={event2}
                title="Rofanspitze"
                organizer="Helena"
                organizerAvatar=""
                departure="Munich"
                transport="none"
                transportSubtext="Carpool"
                activity="cycling"
                difficulty="E+"
                distance="18km"
                elevation="1982"
                elevationType="descent"
                participants={20}
                availableSpots={20}
                participantAvatars={["", "", "", "", ""]}
                onClick={() => setIsEventModalOpen(true)}
              />
              
              <EventCard
                time="6:45"
                timeSubtext="1 day"
                image={event3}
                title="Tannheimer Berge"
                organizer="John Doe"
                organizerAvatar=""
                departure="Munich"
                transport="bus"
                transportSubtext="Bus"
                activity="hiking"
                difficulty="E"
                distance="18km"
                elevation="2234"
                elevationType="total height"
                participants={12}
                availableSpots={4}
                participantAvatars={["", "", "", "", ""]}
                onClick={() => setIsEventModalOpen(true)}
              />
              
              <EventCard
                time="8:00"
                timeSubtext="12 days"
                image={event4}
                title="Event name bla second line"
                organizer="Freddy"
                organizerAvatar=""
                departure="Munich Hbf"
                transport="none"
                transportSubtext="No transport"
                activity="hiking"
                difficulty="E"
                distance="18km"
                elevation="1800"
                elevationType="descent"
                participants={20}
                availableSpots={20}
                participantAvatars={["", "", "", "", ""]}
                onClick={() => setIsEventModalOpen(true)}
              />
            </section>
            
            {/* Jun 23, Sunday */}
            <section aria-labelledby="jun23-heading">
              <h2 id="jun23-heading" className="text-lg font-semibold mb-4">Jun 23, Sunday</h2>
              
              <EventCard
                time="6:45"
                timeSubtext="12 hours"
                image={event5}
                title="Event name bla second line"
                organizer="Larissa"
                organizerAvatar=""
                departure="Zurich Hbf"
                transport="bus"
                transportSubtext="Bus"
                activity="hiking"
                difficulty="E"
                distance="18km"
                elevation="2234"
                elevationType="total height"
                participants={12}
                availableSpots={4}
                participantAvatars={["", "", "", "", ""]}
                onClick={() => setIsEventModalOpen(true)}
              />
              
              <EventCard
                time="6:45"
                timeSubtext="1 day"
                image={event6}
                title="Hiking the highest peak"
                organizer="Laurence"
                organizerAvatar=""
                departure="Munich deutsche..."
                transport="none"
                transportSubtext="No transport"
                activity="hiking"
                difficulty="E"
                distance="18km"
                elevation="1800"
                elevationType="descent"
                participants={20}
                availableSpots={20}
                participantAvatars={["", "", "", "", ""]}
                onClick={() => setIsEventModalOpen(true)}
              />
            </section>
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
