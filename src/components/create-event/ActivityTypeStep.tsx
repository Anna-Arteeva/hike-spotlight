import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { Mountain, Bike, Compass, Snowflake, Circle, Users } from "lucide-react";
import type { ActivityType } from "./types";

interface ActivityTypeStepProps {
  selectedActivity: ActivityType | null;
  onSelect: (activity: ActivityType) => void;
}

const activities: { type: ActivityType; icon: React.ElementType; labelKey: string }[] = [
  { type: "hiking", icon: Mountain, labelKey: "createEvent.activities.hiking" },
  { type: "cycling", icon: Bike, labelKey: "createEvent.activities.cycling" },
  { type: "climbing", icon: Compass, labelKey: "createEvent.activities.climbing" },
  { type: "skiing", icon: Snowflake, labelKey: "createEvent.activities.skiing" },
  { type: "bouldering", icon: Circle, labelKey: "createEvent.activities.bouldering" },
  { type: "social", icon: Users, labelKey: "createEvent.activities.social" },
];

export function ActivityTypeStep({ selectedActivity, onSelect }: ActivityTypeStepProps) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center flex-1 px-4">
      <div className="max-w-2xl w-full text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          {t("createEvent.step1.title")}
        </h2>
        <p className="text-muted-foreground mb-8">
          {t("createEvent.step1.subtitle")}
        </p>

        <div 
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
          role="radiogroup"
          aria-label={t("createEvent.step1.title")}
        >
          {activities.map(({ type, icon: Icon, labelKey }) => (
            <button
              key={type}
              type="button"
              role="radio"
              aria-checked={selectedActivity === type}
              onClick={() => onSelect(type)}
              className={cn(
                "flex flex-col items-center justify-center gap-3 p-6 rounded-xl border-2 transition-all duration-200",
                "hover:border-primary hover:bg-primary/5",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                selectedActivity === type
                  ? "border-primary bg-primary/10 shadow-md"
                  : "border-border bg-card"
              )}
            >
              <Icon 
                className={cn(
                  "h-10 w-10 transition-colors",
                  selectedActivity === type ? "text-primary" : "text-muted-foreground"
                )} 
                aria-hidden="true"
              />
              <span 
                className={cn(
                  "font-medium transition-colors",
                  selectedActivity === type ? "text-primary" : "text-foreground"
                )}
              >
                {t(labelKey)}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
