import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus } from "lucide-react";

interface ParticipantsSectionProps {
  currentParticipants: number;
  maxParticipants: number;
  participantAvatars: string[];
  onJoin?: () => void;
}

export const ParticipantsSection: React.FC<ParticipantsSectionProps> = ({
  currentParticipants,
  maxParticipants,
  participantAvatars,
  onJoin,
}) => {
  const spotsLeft = maxParticipants - currentParticipants;
  const emptySlots = Math.min(spotsLeft, 4);

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold">Participants</h3>
      
      <p className="text-sm text-muted-foreground">
        {currentParticipants} out of {maxParticipants} /{" "}
        <span className="font-medium text-foreground">{spotsLeft} spots left</span>
      </p>

      <div className="flex items-center gap-1">
        <div className="flex -space-x-2">
          {participantAvatars.slice(0, 6).map((avatar, index) => (
            <Avatar key={index} className="h-8 w-8 border-2 border-background">
              <AvatarImage src={avatar} />
              <AvatarFallback className="bg-muted text-xs">
                {String.fromCharCode(65 + index)}
              </AvatarFallback>
            </Avatar>
          ))}
        </div>

        {emptySlots > 0 && (
          <div className="flex -space-x-2 ml-2">
            {Array.from({ length: emptySlots }).map((_, index) => (
              <div
                key={index}
                className="h-8 w-8 rounded-full border-2 border-dashed border-muted-foreground/30 bg-muted/50"
              />
            ))}
          </div>
        )}

        {onJoin && (
          <button
            onClick={onJoin}
            className="h-8 w-8 rounded-full bg-primary flex items-center justify-center ml-2 hover:bg-primary/90 transition-colors"
          >
            <Plus className="h-4 w-4 text-primary-foreground" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ParticipantsSection;
