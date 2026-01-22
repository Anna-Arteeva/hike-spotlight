import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface EventDetailsStepProps {
  eventName: string;
  maxParticipants: number;
  onEventNameChange: (name: string) => void;
  onMaxParticipantsChange: (count: number) => void;
}

export function EventDetailsStep({
  eventName,
  maxParticipants,
  onEventNameChange,
  onMaxParticipantsChange,
}: EventDetailsStepProps) {
  const { t } = useTranslation();

  return (
    <div className="max-w-md mx-auto px-4 md:px-6 space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold text-foreground">
          {t("createEvent.step4.title")}
        </h2>
        <p className="text-muted-foreground">
          {t("createEvent.step4.subtitle")}
        </p>
      </div>

      <div className="space-y-6">
        {/* Event Name */}
        <div className="space-y-2">
          <Label htmlFor="event-name" className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
            {t("createEvent.step4.eventName")}
          </Label>
          <Input
            id="event-name"
            type="text"
            value={eventName}
            onChange={(e) => onEventNameChange(e.target.value)}
            placeholder={t("createEvent.step4.eventNamePlaceholder")}
            className="text-base"
          />
        </div>

        {/* Max Participants */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="max-participants" className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
              {t("createEvent.step4.maxParticipants")}
            </Label>
            <span className="text-lg font-semibold text-foreground">{maxParticipants}</span>
          </div>
          <Slider
            id="max-participants"
            value={[maxParticipants]}
            onValueChange={(value) => onMaxParticipantsChange(value[0])}
            min={2}
            max={50}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>2</span>
            <span>50</span>
          </div>
        </div>
      </div>
    </div>
  );
}
