import { Train, Bus, Bike, TrendingUp, Mountain } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface EventCardProps {
  time: string;
  timeSubtext: string;
  image: string;
  title: string;
  organizer: string;
  organizerAvatar?: string;
  departure: string;
  transport?: "train" | "bus" | "none";
  transportSubtext?: string;
  activity: "hiking" | "cycling";
  difficulty: "E" | "E+" | "T";
  distance: string;
  elevation: string;
  elevationType: "total height" | "descent";
  participants: number;
  availableSpots: number;
  participantAvatars: string[];
  onClick?: () => void;
}

const EventCard = ({
  time,
  timeSubtext,
  image,
  title,
  organizer,
  organizerAvatar,
  departure,
  transport,
  transportSubtext,
  activity,
  difficulty,
  distance,
  elevation,
  elevationType,
  participants,
  availableSpots,
  participantAvatars,
  onClick,
}: EventCardProps) => {
  const TransportIcon = transport === "train" ? Train : transport === "bus" ? Bus : null;
  const ActivityIcon = activity === "hiking" ? Mountain : Bike;
  
  const getDifficultyColor = (diff: string) => {
    switch(diff) {
      case "E": return "bg-difficulty-e text-white";
      case "E+": return "bg-difficulty-eplus text-white";
      case "T": return "bg-difficulty-t text-white";
      default: return "bg-muted";
    }
  };

  return (
    <div 
      className="flex gap-6 py-4 border-b border-border last:border-0 hover:bg-accent/5 transition-colors cursor-pointer -mx-6 px-6"
      onClick={onClick}
    >
      <div className="flex flex-col items-end gap-1 w-16">
        <div className="text-sm font-medium">{time}</div>
        <div className="text-xs text-muted-foreground">{timeSubtext}</div>
      </div>
      
      <img 
        src={image} 
        alt={title}
        className="w-16 h-16 rounded object-cover flex-shrink-0"
      />
      
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-sm leading-tight mb-1">{title}</h3>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Avatar className="w-4 h-4">
            <AvatarImage src={organizerAvatar} />
            <AvatarFallback className="text-[8px]">{organizer[0]}</AvatarFallback>
          </Avatar>
          <span>by {organizer}</span>
        </div>
      </div>
      
      <div className="flex flex-col gap-0.5 min-w-[140px]">
        <div className="text-sm">{departure}</div>
        {transport !== "none" && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <span>by</span>
            {TransportIcon && <TransportIcon className="w-3 h-3" />}
            <span>{transportSubtext || (transport === "train" ? "Train" : "Bus")}</span>
          </div>
        )}
        {transport === "none" && transportSubtext && (
          <div className="text-xs text-muted-foreground">{transportSubtext}</div>
        )}
      </div>
      
      <div className="flex items-start gap-2 min-w-[200px]">
        <ActivityIcon className="w-4 h-4 mt-0.5 flex-shrink-0" />
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5">
            <span className="text-sm">{activity === "hiking" ? "Hiking" : "Cycling"}</span>
            <Badge className={`${getDifficultyColor(difficulty)} text-xs px-1.5 py-0 h-4 font-medium`}>
              {difficulty}
            </Badge>
          </div>
          <div className="text-xs text-muted-foreground">
            {distance} • {elevation} {elevationType}
          </div>
        </div>
      </div>
      
      <div className="flex flex-col items-end gap-1 min-w-[140px]">
        <div className="text-xs">
          <span className="font-medium">{participants} coming</span>
          {" / "}
          <span className="text-success">{availableSpots} available</span>
        </div>
        <div className="flex -space-x-2">
          {participantAvatars.slice(0, 5).map((avatar, idx) => (
            <Avatar key={idx} className="w-6 h-6 border-2 border-background">
              <AvatarImage src={avatar} />
              <AvatarFallback className="text-[10px]">U</AvatarFallback>
            </Avatar>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
