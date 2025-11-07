import React from 'react';
import { EventDate } from './EventDate';
import { ParticipantsList } from './ParticipantsList';
import { ActivityDetails } from './ActivityDetails';
import { EventPhotos } from './EventPhotos';

interface SidebarEventCardProps {
  date: string;
  day: string;
  month?: string;
  title: string;
  time: string;
  location: string;
  transport: string;
  level: string;
  activityType: {
    icon: string;
    name: string;
  };
  distance: string;
  elevation: string;
  participants: Array<{
    image: string;
    alt?: string;
  }>;
  additionalParticipants?: number;
  organizer: string;
  status?: string;
  variant?: 'upcoming' | 'past';
  photos?: Array<{
    image: string;
    alt?: string;
    width: string;
    height: string;
  }>;
  additionalPhotos?: number;
  actionButton?: {
    text: string;
    className: string;
  };
}

export const SidebarEventCard: React.FC<SidebarEventCardProps> = ({
  date,
  day,
  month,
  title,
  time,
  location,
  transport,
  level,
  activityType,
  distance,
  elevation,
  participants,
  additionalParticipants,
  organizer,
  status,
  variant = 'upcoming',
  photos,
  additionalPhotos,
  actionButton
}) => {
  return (
    <div className="flex gap-3.5 items-start self-stretch max-md:gap-3">
      <EventDate
        date={date}
        day={day}
        month={month}
        variant={variant}
      />

      <div className="flex flex-col gap-3 items-start pb-4 border-b border-border flex-[1_0_0]">
        <h3 className="self-stretch text-base font-bold text-foreground max-sm:text-sm">
          {title}
        </h3>

        <div className="flex gap-3 items-end">
          <span className="text-xs font-bold text-foreground">
            at {time}
          </span>
          <div className="text-xs font-bold text-foreground">
            <div className="text-xs text-muted-foreground">from</div>
            <div className="text-xs font-bold text-foreground">{location}</div>
          </div>
          <div className="text-xs font-bold text-foreground">
            <div className="text-xs font-light text-muted-foreground">by</div>
            <div className="text-xs font-bold text-foreground">{transport}</div>
          </div>
        </div>

        <ActivityDetails
          level={level}
          activityType={activityType}
          distance={distance}
          elevation={elevation}
        />

        <div className="flex justify-between items-center self-stretch">
          <ParticipantsList
            participants={participants}
            additionalCount={additionalParticipants}
            organizer={organizer}
          />

          {status && !actionButton && (
            <div className="text-xs italic text-right text-muted-foreground">
              {status}
            </div>
          )}

          {actionButton && (
            <div className="flex justify-center items-center h-[18px] w-[78px]">
              <div className="relative shrink-0 rounded bg-primary/10 h-[18px] w-[78px]">
                <div className="absolute left-0 h-3 text-xs font-bold text-center text-foreground top-[3px] w-[78px]">
                  {actionButton.text}
                </div>
              </div>
            </div>
          )}
        </div>

        {photos && (
          <EventPhotos photos={photos} additionalCount={additionalPhotos} />
        )}
      </div>
    </div>
  );
};
