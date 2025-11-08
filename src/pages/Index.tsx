import { useState } from "react";
import Header from "@/components/Header";
import EventCard from "@/components/EventCard";
import { EventsListPanel } from "@/components/sidebar/EventsListPanel";
import { EventDetailsModal } from "@/components/event-details/EventDetailsModal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import event1 from "@/assets/event1.jpg";
import event2 from "@/assets/event2.jpg";
import event3 from "@/assets/event3.jpg";
import event4 from "@/assets/event4.jpg";
import event5 from "@/assets/event5.jpg";
import event6 from "@/assets/event6.jpg";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-6">Events</h1>
            
            <Tabs defaultValue="upcoming" className="mb-6">
              <TabsList className="bg-transparent border-b border-border rounded-none w-full justify-start p-0 h-auto">
                <TabsTrigger 
                  value="upcoming" 
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 pb-2"
                >
                  Upcoming events
                </TabsTrigger>
                <TabsTrigger 
                  value="munich"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 pb-2"
                >
                  From Munich
                </TabsTrigger>
                <TabsTrigger 
                  value="all"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 pb-2 flex items-center gap-1"
                >
                  All activities
                  <ChevronDown className="h-4 w-4" />
                </TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Events List */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Tomorrow, Saturday</h2>
                <div className="flex gap-20 text-xs text-muted-foreground">
                  <span>Departing from</span>
                  <span>Activity</span>
                  <span>Participants</span>
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
                onClick={() => setIsModalOpen(true)}
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
                onClick={() => setIsModalOpen(true)}
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
                onClick={() => setIsModalOpen(true)}
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
                onClick={() => setIsModalOpen(true)}
              />
            </div>
            
            {/* Jun 23, Sunday */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Jun 23, Sunday</h2>
              
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
                onClick={() => setIsModalOpen(true)}
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
                onClick={() => setIsModalOpen(true)}
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-auto flex-shrink-0">
            <EventsListPanel />
          </div>
        </div>
      </div>

      <EventDetailsModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
};

export default Index;
