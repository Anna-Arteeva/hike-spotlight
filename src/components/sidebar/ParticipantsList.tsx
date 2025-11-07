import React from 'react';

interface Participant {
  image: string;
  alt?: string;
}

interface ParticipantsListProps {
  participants: Participant[];
  additionalCount?: number;
  organizer: string;
}

export const ParticipantsList: React.FC<ParticipantsListProps> = ({
  participants,
  additionalCount,
  organizer
}) => {
  return (
    <div className="relative h-[26px] w-[171px] max-md:w-[150px] max-sm:w-[120px]">
      {participants.map((participant, index) => (
        <div
          key={index}
          className="flex absolute top-0 flex-col shrink-0 justify-center items-center h-[26px]"
          style={{ left: `${17 * index}px`, width: index === 0 ? '25px' : '27px' }}
        >
          <img
            src={participant.image}
            alt={participant.alt || ''}
            className="shrink-0 rounded-xl border-background border-solid border-[3px] h-[26px] object-cover"
            style={{ width: index === 0 ? '25px' : '27px' }}
          />
        </div>
      ))}

      {additionalCount && (
        <div className="absolute top-0.5 shrink-0 rounded-xl bg-muted h-[22px] left-[58px] w-[22px]">
          <div className="absolute top-1.5 text-xs font-bold text-center text-muted-foreground h-[11px] left-[3px] w-[17px]">
            +{additionalCount}
          </div>
        </div>
      )}

      <div className="absolute top-1.5 h-3.5 text-xs text-foreground left-[87px] w-[85px] max-md:left-[77px] max-md:w-[75px] max-sm:text-xs max-sm:left-[67px] max-sm:w-[60px]">
        by {organizer}
      </div>
    </div>
  );
};
