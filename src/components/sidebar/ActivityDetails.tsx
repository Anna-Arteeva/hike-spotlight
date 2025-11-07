import React from 'react';
import { Bike, Mountain, ArrowLeftRight, TrendingUp } from 'lucide-react';

interface ActivityDetailsProps {
  level: string;
  activityType: {
    icon: string;
    name: string;
  };
  distance: string;
  elevation: string;
}

export const ActivityDetails: React.FC<ActivityDetailsProps> = ({
  level,
  activityType,
  distance,
  elevation
}) => {
  const ActivityIcon = activityType.icon === 'ti-bike' ? Bike : Mountain;

  return (
    <div className="flex justify-between items-center self-stretch max-sm:flex-wrap max-sm:gap-2">
      <div className="flex gap-2.5 justify-center items-center px-1 py-px rounded bg-foreground">
        <span className="text-xs font-bold text-background">{level}</span>
      </div>

      <div className="flex gap-1 items-center">
        <ActivityIcon className="w-3.5 h-3.5 text-muted-foreground" />
        <span className="text-xs font-bold text-muted-foreground">{activityType.name}</span>
      </div>

      <div className="flex gap-1 items-center">
        <ArrowLeftRight className="w-3.5 h-3.5 text-muted-foreground" />
        <span className="text-xs font-bold text-muted-foreground">{distance}</span>
      </div>

      <div className="flex gap-1 items-center">
        <TrendingUp className="w-3.5 h-3.5 text-muted-foreground" />
        <span className="text-xs font-bold text-muted-foreground">{elevation}</span>
      </div>
    </div>
  );
};
