import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Clock,
  Mountain,
  Route,
  Star,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import React from "react";

const activityDetails = [
  { label: "Activity", value: "Hiking" },
  { label: "Difficulty", value: "T3 Moderate" },
  { label: "Departs from", value: "Munich" },
  { label: "Transport", value: "Train, bus" },
];

const meetingDetails = [
  { label: "Meeting location", value: "Munich HBF, Platform 29" },
  { label: "Meeting time", value: "6:40 AM" },
  { label: "Transport", value: "Train, bus 145 to Lindau" },
  { label: "Ticket price", value: "€16 per person" },
];

const equipmentLeft = [
  "Hiking boots",
  "food and drinks",
  "Cash for the ticket",
  "Headlamp (just in case)",
];

const equipmentRight = ["Helmet", "Poles", "Headlamp"];

const routeDetails = [
  { icon: Route, label: "Distance", value: "29km" },
  {
    icon: TrendingUp,
    label: "Ascent",
    value: "500",
    iconRotation: "rotate-[42.78deg]",
  },
  {
    icon: TrendingDown,
    label: "Descent",
    value: "400",
    iconRotation: "rotate-[-42.78deg]",
  },
  { icon: Mountain, label: "Highest point", value: "1560" },
  { icon: Clock, label: "Duration", value: "2:29" },
  { icon: Star, label: "Rating", value: "650" },
];

export default function EventDetailsSection(): JSX.Element {
  return (
    <section className="flex flex-col items-center gap-10 px-0 py-6 w-full max-w-[602px]">
      <div className="flex flex-col items-start gap-[52px] w-full">
        <div className="flex flex-col items-start gap-[5px] w-full">
          <h2 className="text-lg font-bold text-foreground tracking-[0] leading-[normal]">
            May 10, Sunday
          </h2>
          <p className="font-caption font-[number:var(--caption-font-weight)] text-muted-foreground text-[length:var(--caption-font-size)] tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] [font-style:var(--caption-font-style)]">
            06:40 AM - 17:00 PM
          </p>
        </div>

        <h1 className="font-h-1 font-[number:var(--h-1-font-weight)] text-foreground text-[length:var(--h-1-font-size)] tracking-[var(--h-1-letter-spacing)] leading-[var(--h-1-line-height)] [font-style:var(--h-1-font-style)] w-full">
          Pottenstein ring: A land of caves and castles, rivers and rocks
        </h1>

        <div className="grid grid-cols-4 gap-6 w-full">
          {activityDetails.map((detail, index) => (
            <div key={index} className="flex flex-col items-start gap-[9px]">
              <p className="font-caption font-[number:var(--caption-font-weight)] text-muted-foreground text-[length:var(--caption-font-size)] tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] [font-style:var(--caption-font-style)]">
                {detail.label}
              </p>
              <p className="font-body font-[number:var(--body-font-weight)] text-foreground text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
                {detail.value}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between w-full">
          <div className="flex gap-3">
            <Avatar className="w-10 h-10 bg-muted">
              <AvatarFallback className="bg-muted" />
            </Avatar>
            <Avatar className="w-10 h-10 bg-muted">
              <AvatarFallback className="bg-muted" />
            </Avatar>
          </div>

          <Button className="bg-primary text-primary-foreground font-bold text-[15px] tracking-[0] leading-[normal] rounded-lg h-10 px-6 hover:bg-primary/90">
            Join event
          </Button>
        </div>
      </div>

      <Separator className="w-full" />

      <div className="flex flex-col items-start gap-[7px] w-full">
        <h3 className="font-h-2 font-[number:var(--h-2-font-weight)] text-foreground text-[length:var(--h-2-font-size)] tracking-[var(--h-2-letter-spacing)] leading-[var(--h-2-line-height)] [font-style:var(--h-2-font-style)]">
          Description
        </h3>
        <p className="font-body font-[number:var(--body-font-weight)] text-foreground text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
          Many poets and painters walked through the countryside of Franconian
          Switzerland hundreds years ago and catched it in word and on
          paintings. Franconian Switzerland is one of the largest nature parks
          in Germany and a real hidden gem. The area is very well known for its
          impressive caves, rock formations and green scenery. Also, there are
          many medieval castles and ruins..
        </p>
        <button className="font-normal text-primary text-base tracking-[0] leading-[normal] hover:underline">
          Show more
        </button>
      </div>

      <div className="flex flex-col items-start gap-[17px] w-full">
        <h3 className="font-h-2 font-[number:var(--h-2-font-weight)] text-foreground text-[length:var(--h-2-font-size)] tracking-[var(--h-2-letter-spacing)] leading-[var(--h-2-line-height)] [font-style:var(--h-2-font-style)]">
          Meeting and transport
        </h3>
        <p className="font-body font-[number:var(--body-font-weight)] text-foreground text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
          We meet on platform and buy a group ticket all together.
        </p>

        <div className="grid grid-cols-2 gap-x-[97px] gap-y-6 w-full pt-6">
          {meetingDetails.map((detail, index) => (
            <div key={index} className="flex flex-col gap-[9px]">
              <p className="font-caption font-[number:var(--caption-font-weight)] text-muted-foreground text-[length:var(--caption-font-size)] tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] [font-style:var(--caption-font-style)]">
                {detail.label}
              </p>
              <p className="font-body font-[number:var(--body-font-weight)] text-foreground text-[length:var(--body-font-size)] tracking-[var(--body-letter-spacing)] leading-[var(--body-line-height)] [font-style:var(--body-font-style)]">
                {detail.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Separator className="w-full" />

      <div className="flex flex-col items-start gap-[17px] w-full">
        <h3 className="font-h-2 font-[number:var(--h-2-font-weight)] text-foreground text-[length:var(--h-2-font-size)] tracking-[var(--h-2-letter-spacing)] leading-[var(--h-2-line-height)] [font-style:var(--h-2-font-style)]">
          Equipment
        </h3>

        <div className="flex w-full gap-0">
          <div className="w-1/2 font-normal text-foreground text-lg tracking-[0] leading-[30px]">
            {equipmentLeft.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
          <div className="w-1/2 font-normal text-foreground text-lg tracking-[0] leading-[30px]">
            {equipmentRight.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        </div>
      </div>

      <Separator className="w-full" />

      <div className="flex flex-col items-start gap-4 w-full">
        <h3 className="font-bold text-foreground text-xl tracking-[0] leading-[normal]">
          Route details
        </h3>

        <div className="flex flex-wrap gap-[10px_10px] w-full">
          {routeDetails.map((detail, index) => (
            <Card
              key={index}
              className="w-[141.58px] h-[100px] rounded-[5px] border border-solid border-border"
            >
              <CardContent className="flex flex-col items-center justify-center h-full p-0 relative">
                <detail.icon
                  className={`w-[15px] h-[15px] text-muted-foreground absolute top-[18px] ${detail.iconRotation || ""}`}
                />
                <div className="flex flex-col items-center gap-[9px] mt-6">
                  <p className="font-caption font-[number:var(--caption-font-weight)] text-muted-foreground text-[length:var(--caption-font-size)] text-center tracking-[var(--caption-letter-spacing)] leading-[var(--caption-line-height)] [font-style:var(--caption-font-style)]">
                    {detail.label}
                  </p>
                  <p className="font-normal text-foreground text-lg text-center tracking-[0] leading-[30px]">
                    {detail.value}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
