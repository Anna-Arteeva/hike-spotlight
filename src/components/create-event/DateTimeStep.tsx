import { useTranslation } from "react-i18next";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface DateTimeStepProps {
  selectedDate: Date | null;
  selectedTime: string | null;
  onDateChange: (date: Date | undefined) => void;
  onTimeChange: (time: string) => void;
}

export function DateTimeStep({ 
  selectedDate, 
  selectedTime, 
  onDateChange, 
  onTimeChange 
}: DateTimeStepProps) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center flex-1 px-4">
      <div className="max-w-2xl w-full text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          {t("createEvent.step3.title")}
        </h2>
        <p className="text-muted-foreground mb-8">
          {t("createEvent.step3.subtitle")}
        </p>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          {/* Calendar */}
          <div className="bg-card border border-border rounded-xl p-4 shadow-sm">
            <Calendar
              mode="single"
              selected={selectedDate ?? undefined}
              onSelect={onDateChange}
              disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
              className="rounded-md"
            />
          </div>

          {/* Time picker */}
          <div className="flex flex-col gap-4 w-full max-w-xs">
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <Label 
                htmlFor="event-time" 
                className="text-sm font-medium text-muted-foreground mb-3 block"
              >
                {t("createEvent.step3.timeLabel")}
              </Label>
              <Input
                id="event-time"
                type="time"
                value={selectedTime ?? ""}
                onChange={(e) => onTimeChange(e.target.value)}
                className={cn(
                  "text-lg font-medium h-14 text-center",
                  "[&::-webkit-calendar-picker-indicator]:opacity-0",
                  "[&::-webkit-calendar-picker-indicator]:absolute",
                  "[&::-webkit-calendar-picker-indicator]:w-full"
                )}
              />
            </div>

            {/* Motivational copy */}
            <p className="text-sm text-muted-foreground italic">
              {t("createEvent.step3.motivation")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
