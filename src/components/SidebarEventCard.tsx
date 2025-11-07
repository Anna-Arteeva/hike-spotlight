import { Train, Bike, TrendingUp } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface SidebarEventCardProps {
  date: string;
  dayOfWeek: string;
  title: string;
  time: string;
  from: string;
  transport: string;
  activity: string;
  distance: string;
  elevation: string;
  participants: string;
  organizer: string;
  organizerAvatar?: string;
  status?: "full" | "available";
  images?: string[];
}

const SidebarEventCard = ({
  date,
  dayOfWeek,
  title,
  time,
  from,
  transport,
  activity,
  distance,
  elevation,
  participants,
  organizer,
  organizerAvatar,
  status,
  images,
}: SidebarEventCardProps) => {
  return (
    <div className="border-b border-border pb-4 last:border-0">
      <div className="flex gap-3 mb-2">
        <div className="text-center">
          <div className="text-xs text-muted-foreground">{date.split(" ")[0]}</div>
          <div className="text-lg font-medium">{date.split(" ")[1]}</div>
          <div className="text-xs text-muted-foreground">{dayOfWeek}</div>
        </div>
        
        <div className="flex-1">
          <h4 className="font-medium text-sm leading-tight mb-2">{title}</h4>
          
          <div className="text-xs text-muted-foreground mb-1">
            <span className="font-medium text-foreground">at {time}</span>
            {" "}from {from}{" "}
            <span className="text-foreground">by {transport}</span>
          </div>
          
          <Badge variant="secondary" className="text-xs mb-2">
            {activity}
          </Badge>
          
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
            <Bike className="w-3 h-3" />
            <span>{activity}</span>
            <TrendingUp className="w-3 h-3" />
            <span>{distance}</span>
            <TrendingUp className="w-3 h-3" />
            <span>{elevation}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Avatar className="w-5 h-5">
              <AvatarImage src={organizerAvatar} />
              <AvatarFallback className="text-[8px]">{organizer[0]}</AvatarFallback>
            </Avatar>
            <span className="text-xs text-muted-foreground">
              <span className="text-foreground">{participants}</span> by {organizer}
            </span>
            {status === "full" && (
              <span className="text-xs text-muted-foreground ml-auto italic">{status}</span>
            )}
          </div>
        </div>
      </div>
      
      {images && images.length > 0 && (
        <div className="flex gap-2 mt-3">
          {images.map((img, idx) => (
            <img 
              key={idx}
              src={img}
              alt=""
              className="w-16 h-16 rounded object-cover"
            />
          ))}
          {images.length === 3 && (
            <div className="w-16 h-16 rounded bg-muted flex items-center justify-center">
              <span className="text-xs text-muted-foreground">Write reviews</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SidebarEventCard;
