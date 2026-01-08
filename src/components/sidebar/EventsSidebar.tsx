import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bike, Ruler, Mountain, Users } from "lucide-react";

// Event Date Component
interface EventDateProps {
  date: string;
  day: string;
}

function EventDate({ date, day }: EventDateProps) {
  return (
    <div className="flex justify-center items-center text-sm font-bold leading-5 text-muted-foreground w-[45px]">
      <div className="text-center">
        <div className="text-foreground">{date}</div>
        <div className="font-normal text-muted-foreground">{day}</div>
      </div>
    </div>
  );
}

// Event Activity Component
interface ActivityInfo {
  type: string;
  distance?: string;
  elevation?: string;
}

interface EventActivityProps {
  level: string;
  activity: ActivityInfo;
}

function EventActivity({ level, activity }: EventActivityProps) {
  return (
    <div className="flex gap-4 justify-between items-center mt-3 w-full whitespace-nowrap">
      <Badge variant="secondary" className="bg-neutral-700 text-white">
        {level}
      </Badge>
      <div className="flex gap-1 items-center text-muted-foreground">
        <Bike className="h-4 w-4" />
        <span className="text-xs font-bold">{activity.type}</span>
      </div>
      {activity.distance && (
        <div className="flex gap-1 items-center text-muted-foreground">
          <Ruler className="h-4 w-4" />
          <span className="text-xs font-bold">{activity.distance}</span>
        </div>
      )}
      {activity.elevation && (
        <div className="flex gap-1 items-center text-muted-foreground">
          <Mountain className="h-4 w-4" />
          <span className="text-xs font-bold">{activity.elevation}</span>
        </div>
      )}
    </div>
  );
}

// Event Participants Component
interface EventParticipantsProps {
  participantCount: string;
  organizer: string;
  status?: string;
  showReviewButton?: boolean;
}

function EventParticipants({
  participantCount,
  organizer,
  status,
  showReviewButton
}: EventParticipantsProps) {
  return (
    <div className={`flex ${showReviewButton ? 'gap-3 justify-between' : 'gap-10 justify-between'} items-center mt-3 w-full text-xs whitespace-nowrap`}>
      <div className="flex gap-2 items-center text-muted-foreground">
        <Users className="h-4 w-4" />
        <span className="font-bold">{participantCount},</span>
        <span>by</span>
        <span className="font-semibold">{organizer}</span>
      </div>
      {showReviewButton ? (
        <Button 
          variant="outline" 
          size="sm" 
          className="text-xs bg-primary/10 hover:bg-primary/20 border-primary/20"
        >
          Write review
        </Button>
      ) : (
        status && (
          <span className="text-right text-muted-foreground">{status}</span>
        )
      )}
    </div>
  );
}

// Event Photos Component
interface EventPhotosProps {
  photos: string[];
}

function EventPhotos({ photos }: EventPhotosProps) {
  return (
    <div className="flex gap-2 items-center mt-3">
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo}
          className={`object-cover rounded-md ${
            index === 0 ? 'aspect-[1.04] w-[70px]' :
            index === 1 ? 'aspect-[1.48] w-[99px]' :
            index === 2 ? 'aspect-[0.78] w-[52px]' :
            'aspect-[1.04] w-[70px]'
          }`}
          alt={`Event photo ${index + 1}`}
        />
      ))}
    </div>
  );
}

// Event Details Component
interface EventDetailsProps {
  title: string;
  time: string;
  location: string;
  transport: string;
  level: string;
  activity: {
    type: string;
    distance?: string;
    elevation?: string;
  };
  participantCount: string;
  organizer: string;
  status?: string;
  showReviewButton?: boolean;
  photos?: string[];
  isPastEvent?: boolean;
}

function EventDetails({
  title,
  time,
  location,
  transport,
  level,
  activity,
  participantCount,
  organizer,
  status,
  showReviewButton,
  photos,
  isPastEvent
}: EventDetailsProps) {
  return (
    <div className={`flex ${isPastEvent ? 'overflow-hidden ' : ''}flex-col flex-1 shrink pb-4 border-b border-border min-w-60`}>
      <h3 className="text-base font-bold text-foreground">{title}</h3>

      <div className="flex gap-3 items-end mt-3 text-xs text-muted-foreground">
        <time className="font-bold text-foreground">{time}</time>
        <div>
          <span>from </span>
          <span className="font-bold">{location}</span>
        </div>
        <div className={isPastEvent ? '' : 'font-light'}>
          <span>by </span>
          <span className="font-bold">{transport}</span>
        </div>
      </div>

      <EventActivity level={level} activity={activity} />

      <EventParticipants
        participantCount={participantCount}
        organizer={organizer}
        status={status}
        showReviewButton={showReviewButton}
      />

      {photos && <EventPhotos photos={photos} />}
    </div>
  );
}

// Event Item Component
interface EventItemProps {
  date: string;
  day: string;
  title: string;
  time: string;
  location: string;
  transport: string;
  level: string;
  activity: {
    type: string;
    distance?: string;
    elevation?: string;
  };
  participantCount: string;
  organizer: string;
  status?: string;
  showReviewButton?: boolean;
  photos?: string[];
  isPastEvent?: boolean;
}

function EventItem({
  date,
  day,
  title,
  time,
  location,
  transport,
  level,
  activity,
  participantCount,
  organizer,
  status,
  showReviewButton,
  photos,
  isPastEvent
}: EventItemProps) {
  return (
    <article className="flex gap-3.5 items-start w-full">
      {isPastEvent ? (
        <div className="flex flex-col items-start pb-7 text-sm font-bold leading-5 text-muted-foreground w-[45px]">
          <div className="text-center">
            <div className="text-foreground">{date}</div>
            <div className="font-normal text-muted-foreground">{day}</div>
          </div>
        </div>
      ) : (
        <EventDate date={date} day={day} />
      )}

      <EventDetails
        title={title}
        time={time}
        location={location}
        transport={transport}
        level={level}
        activity={activity}
        participantCount={participantCount}
        organizer={organizer}
        status={status}
        showReviewButton={showReviewButton}
        photos={photos}
        isPastEvent={isPastEvent}
      />
    </article>
  );
}

// Main Sidebar Component
export const EventsSidebar = () => {
  const upcomingEvents = [
    {
      date: "Jun 30",
      day: "Sat",
      title: "Full-carpool After Work hike to Kampenwand",
      time: "at 6:45",
      location: "Munich",
      transport: "Train",
      level: "Medium",
      activity: {
        type: "Cycling",
        distance: "18km",
        elevation: "560m"
      },
      participantCount: "+14",
      organizer: "Jean-Christian",
      status: "full"
    },
    {
      date: "Jun 30",
      day: "Sat",
      title: "Full-carpool After Work hike to Kampenwand",
      time: "at 6:45",
      location: "Munich",
      transport: "Train",
      level: "Medium",
      activity: {
        type: "Cycling",
        distance: "18km",
        elevation: "560m"
      },
      participantCount: "+14",
      organizer: "Jean-Christian",
      status: "full"
    }
  ];

  const pastEvents = [
    {
      date: "Jun 30",
      day: "Sat",
      title: "Full-carpool After Work hike to Kampenwand",
      time: "at 6:45",
      location: "Munich",
      transport: "Train",
      level: "Medium",
      activity: {
        type: "Cycling",
        distance: "18km",
        elevation: "560m"
      },
      participantCount: "+14",
      organizer: "Jean-Christian",
      showReviewButton: true,
      photos: [
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=70&h=70&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=99&h=67&fit=crop",
        "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=52&h=67&fit=crop",
        "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=70&h=70&fit=crop"
      ]
    }
  ];

  return (
    <Card className="p-6 bg-muted/30">
      <header className="pb-4 border-b border-border">
        <h2 className="text-lg font-bold text-foreground">Your upcoming events</h2>
      </header>

      <section className="mt-6 space-y-4">
        {upcomingEvents.map((event, index) => (
          <EventItem key={`upcoming-${index}`} {...event} />
        ))}
      </section>

      <Separator className="my-6" />

      <header className="pb-4 border-b border-border">
        <h2 className="text-lg font-bold text-foreground">Your past events</h2>
      </header>

      <section className="mt-6">
        {pastEvents.map((event, index) => (
          <EventItem key={`past-${index}`} {...event} isPastEvent={true} />
        ))}
      </section>
    </Card>
  );
};
