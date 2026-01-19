import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface OrganizerSectionProps {
  name: string;
  badge?: string;
  avatar?: string;
  onSendMessage?: () => void;
  label?: string;
}

export const OrganizerSection: React.FC<OrganizerSectionProps> = ({
  name,
  badge,
  avatar,
  onSendMessage,
  label = "Organizer",
}) => {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold">{label}</h3>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={avatar} />
            <AvatarFallback className="bg-muted">
              {name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-sm">{name}</p>
            {badge && (
              <p className="text-xs text-muted-foreground">{badge}</p>
            )}
          </div>
        </div>

        {onSendMessage && (
          <Button
            variant="outline"
            size="sm"
            onClick={onSendMessage}
            className="text-xs"
          >
            Send a message
          </Button>
        )}
      </div>
    </div>
  );
};

export default OrganizerSection;
