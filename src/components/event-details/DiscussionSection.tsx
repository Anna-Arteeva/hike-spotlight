import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import React from "react";

const participantAvatars = [
  { src: "", alt: "Participant 1" },
  { src: "", alt: "Participant 2" },
  { src: "", alt: "Participant 3" },
  { src: "", alt: "Participant 4" },
  { src: "", alt: "Participant 5" },
  { src: "", alt: "Participant 6" },
  { src: "", alt: "Participant 7" },
];

const emptySlots = [{ id: 1 }, { id: 2 }, { id: 3 }];

const discussionComments = [
  {
    id: 1,
    author: "Victor",
    avatar: "",
    text: "Do you think winter hiking boots or lighter trail running shoes would be better for this trek? If there's no snow and it's not too cold, I'm leaning towards the trail running shoes being best.",
    timestamp: "1d ago",
  },
  {
    id: 2,
    author: "Anna",
    avatar: "",
    text: "I only carry some clothes and necessary stuff, in total less than 4 kilos. I'm staying in houses",
    timestamp: "1d ago",
  },
];

export default function DiscussionSection(): JSX.Element {
  return (
    <section className="w-full bg-muted/30 rounded-[13px] p-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-foreground text-xl">
            Organizer
          </h2>

          <div className="flex items-center gap-4">
            <Avatar className="w-[53px] h-[53px]">
              <AvatarImage src="" alt="John Doe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>

            <div className="flex-1 flex flex-col">
              <span className="text-base font-bold text-foreground">
                John Doe
              </span>
              <span className="font-normal text-foreground text-sm">
                Badge
              </span>
            </div>

            <Button
              variant="secondary"
              className="bg-muted text-muted-foreground font-bold text-[13px] rounded-lg h-auto px-4 py-2 hover:bg-muted/80"
            >
              Send a message
            </Button>
          </div>

          <Separator className="bg-border" />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-foreground text-xl">
              Participants
            </h2>
          </div>

          <div className="font-normal text-foreground text-sm">
            <span className="font-normal text-foreground text-sm">
              12 out of 20 /
            </span>
            <span className="font-bold">
              {" "}
              4 spots left
            </span>
          </div>

          <div className="flex items-center gap-2">
            {participantAvatars.map((participant, index) => (
              <Avatar key={index} className="w-8 h-8">
                <AvatarImage src={participant.src} alt={participant.alt} />
                <AvatarFallback>{participant.alt.charAt(0)}</AvatarFallback>
              </Avatar>
            ))}

            {emptySlots.map((slot) => (
              <div
                key={slot.id}
                className="w-8 h-8 bg-muted/30 rounded-[13px] border-2 border-dashed border-border"
              />
            ))}

            <Button
              size="icon"
              className="w-8 h-8 bg-primary hover:bg-primary/90 rounded-[13px] text-primary-foreground font-bold text-lg"
            >
              +
            </Button>
          </div>

          <Separator className="bg-border" />
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-foreground text-xl">
            Discussion
          </h2>

          <ScrollArea className="h-[324px]">
            <div className="flex flex-col gap-6 pr-4">
              {discussionComments.map((comment) => (
                <div key={comment.id} className="flex gap-3">
                  <Avatar className="w-8 h-8 flex-shrink-0">
                    <AvatarImage src={comment.avatar} alt={comment.author} />
                    <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col gap-2 flex-1">
                    <p className="font-normal text-sm leading-[22px]">
                      <span className="font-bold text-primary">
                        {comment.author}
                      </span>
                      <span className="text-foreground">
                        {" "}
                        {comment.text}
                      </span>
                    </p>

                    <div className="font-normal text-xs">
                      <span className="text-primary cursor-pointer hover:underline">
                        Like
                      </span>
                      <span className="text-muted-foreground"> - </span>
                      <span className="text-primary cursor-pointer hover:underline">
                        Reply
                      </span>
                      <span className="text-muted-foreground">
                        {" "}
                        - {comment.timestamp}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex justify-end">
                <span className="font-normal text-primary text-xs cursor-pointer hover:underline">
                  + 3 comments
                </span>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </section>
  );
}
