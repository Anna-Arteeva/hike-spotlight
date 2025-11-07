import React from 'react';
import { SidebarEventCard } from './SidebarEventCard';

export const EventsListPanel: React.FC = () => {
  const upcomingEvents = [
    {
      date: "Jun 30",
      day: "Sat",
      title: "Full-carpool After Work hike to Kampenwand",
      time: "6:45",
      location: "Munich",
      transport: "Train",
      level: "Medium",
      activityType: {
        icon: "ti-bike",
        name: "Cycling"
      },
      distance: "18km",
      elevation: "560m",
      participants: [
        {
          image: "https://api.builder.io/api/v1/image/assets/TEMP/00c16ac3e2eb1594d0944b1eddf441d70444e0de?width=50",
          alt: ""
        },
        {
          image: "https://api.builder.io/api/v1/image/assets/TEMP/d2a7580e2f4e6a6ca18b10d9878aa804b8981577?width=54",
          alt: ""
        }
      ],
      additionalParticipants: 14,
      organizer: "Jean-Christian",
      status: "full"
    },
    {
      date: "Jun 30",
      day: "Sat",
      title: "Full-carpool After Work hike to Kampenwand",
      time: "6:45",
      location: "Munich",
      transport: "Train",
      level: "Medium",
      activityType: {
        icon: "ti-bike",
        name: "Cycling"
      },
      distance: "18km",
      elevation: "560m",
      participants: [
        {
          image: "https://api.builder.io/api/v1/image/assets/TEMP/00c16ac3e2eb1594d0944b1eddf441d70444e0de?width=50",
          alt: ""
        },
        {
          image: "https://api.builder.io/api/v1/image/assets/TEMP/d2a7580e2f4e6a6ca18b10d9878aa804b8981577?width=54",
          alt: ""
        }
      ],
      additionalParticipants: 14,
      organizer: "Jean-Christian",
      status: "full"
    }
  ];

  const pastEvents = [
    {
      date: "30",
      day: "Sat",
      month: "Jun",
      title: "Full-carpool After Work hike to Kampenwand",
      time: "6:45",
      location: "Munich",
      transport: "Train",
      level: "Medium",
      activityType: {
        icon: "ti-bike",
        name: "Cycling"
      },
      distance: "18km",
      elevation: "560m",
      participants: [
        {
          image: "https://api.builder.io/api/v1/image/assets/TEMP/5a521b253f6f84a0776bd608e15c12d1b3aa8af0?width=50",
          alt: ""
        },
        {
          image: "https://api.builder.io/api/v1/image/assets/TEMP/d2a7580e2f4e6a6ca18b10d9878aa804b8981577?width=54",
          alt: ""
        }
      ],
      additionalParticipants: 14,
      organizer: "Jean-Christian",
      variant: 'past' as const,
      actionButton: {
        text: "Write reviews",
        className: "bg-primary/10"
      },
      photos: [
        {
          image: "https://api.builder.io/api/v1/image/assets/TEMP/18d027e2716ee61a91667075f3962e66dd4bdac8?width=140",
          alt: "",
          width: "w-[70px] max-sm:w-[55px]",
          height: "h-[67px] max-sm:h-[55px]"
        },
        {
          image: "https://api.builder.io/api/v1/image/assets/TEMP/af235d65cdc7d7e850e1a7bbccb820cc411187e9?width=198",
          alt: "",
          width: "w-[99px] max-sm:w-[75px]",
          height: "h-[67px] max-sm:h-[55px]"
        },
        {
          image: "https://api.builder.io/api/v1/image/assets/TEMP/c61b2a347c8208492e1f95abee67ee27f007a533?width=104",
          alt: "",
          width: "w-[52px] max-sm:w-10",
          height: "h-[67px] max-sm:h-[55px]"
        },
        {
          image: "https://api.builder.io/api/v1/image/assets/TEMP/83b621870ede30d2a8d285ef2ad578ae3047c7a5?width=140",
          alt: "",
          width: "w-[70px] max-sm:w-[55px]",
          height: "h-[67px] max-sm:h-[55px]"
        }
      ],
      additionalPhotos: 12
    }
  ];

  return (
    <div className="flex flex-col gap-8 items-start px-6 py-8 rounded-xl bg-muted/30 w-[363px] max-md:gap-6 max-md:px-5 max-md:py-6 max-md:w-full max-md:max-w-[500px] max-sm:gap-5 max-sm:px-4 max-sm:py-5 max-sm:w-full">
      <header className="flex gap-2.5 items-center self-stretch pb-4 border-b border-border">
        <h2 className="text-lg font-bold text-foreground max-sm:text-base">
          Your upcoming events
        </h2>
      </header>

      <section className="flex flex-col gap-4 items-start self-stretch">
        {upcomingEvents.map((event, index) => (
          <SidebarEventCard key={`upcoming-${index}`} {...event} />
        ))}
      </section>

      <header className="flex gap-2.5 items-center self-stretch pb-4 border-b border-border">
        <h2 className="text-lg font-bold text-foreground max-sm:text-base">
          Your past events
        </h2>
      </header>

      <section className="flex flex-col gap-2.5 items-start self-stretch">
        {pastEvents.map((event, index) => (
          <SidebarEventCard key={`past-${index}`} {...event} />
        ))}
      </section>
    </div>
  );
};

export default EventsListPanel;
