import React from 'react';

interface EventDateProps {
  date: string;
  day: string;
  variant?: 'upcoming' | 'past';
  month?: string;
}

export const EventDate: React.FC<EventDateProps> = ({
  date,
  day,
  variant = 'upcoming',
  month
}) => {
  if (variant === 'past') {
    return (
      <div className="w-7 h-[57px]">
        <div className="flex flex-col w-7 text-sm leading-5 text-muted-foreground h-[57px]">
          <div className="text-sm font-bold text-muted-foreground">{month}</div>
          <div className="text-sm font-bold text-muted-foreground">{date}</div>
          <div className="text-sm text-muted-foreground">{day}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[38px] w-[45px]">
      <div className="text-sm leading-5 text-muted-foreground h-[38px] w-[45px]">
        <div className="text-sm font-bold text-muted-foreground">{date}</div>
        <div className="text-sm text-muted-foreground">{day}</div>
      </div>
    </div>
  );
};
