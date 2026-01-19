import React from "react";
import { 
  ArrowLeftRight, 
  ArrowUpRight, 
  ArrowDownRight, 
  Mountain,
  Clock,
  Star
} from "lucide-react";

interface RouteStat {
  label: string;
  value: string | number;
  icon: "distance" | "ascent" | "descent" | "highest" | "duration" | "rating";
}

interface RouteStatsProps {
  stats: RouteStat[];
}

const iconMap = {
  distance: ArrowLeftRight,
  ascent: ArrowUpRight,
  descent: ArrowDownRight,
  highest: Mountain,
  duration: Clock,
  rating: Star,
};

export const RouteStats: React.FC<RouteStatsProps> = ({ stats }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Route details</h3>
      
      <div className="grid grid-cols-4 gap-3">
        {stats.slice(0, 4).map((stat, index) => {
          const Icon = iconMap[stat.icon];
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 border border-border rounded-lg"
            >
              <Icon className="h-5 w-5 text-muted-foreground mb-2" />
              <span className="text-xs text-muted-foreground">{stat.label}</span>
              <span className="text-lg font-semibold">{stat.value}</span>
            </div>
          );
        })}
      </div>
      
      {stats.length > 4 && (
        <div className="grid grid-cols-4 gap-3">
          {stats.slice(4).map((stat, index) => {
            const Icon = iconMap[stat.icon];
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 border border-border rounded-lg"
              >
                <Icon className="h-5 w-5 text-muted-foreground mb-2" />
                <span className="text-xs text-muted-foreground">{stat.label}</span>
                <span className="text-lg font-semibold">{stat.value}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RouteStats;
