import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const imgRectangleCopy5 = "https://www.figma.com/api/mcp/asset/3a903061-2f8a-432f-97cf-84f4b9e2449c";
const imgScreenshot20251229At2132431 = "https://www.figma.com/api/mcp/asset/fe1cf1af-c03f-4d64-92f9-4e8cc227ba6b";
const imgRectangleCopy6 = "https://www.figma.com/api/mcp/asset/8bb1e56d-fb4e-4634-be3b-98566983d856";
const imgRectangleCopy7 = "https://www.figma.com/api/mcp/asset/9eca4182-4f19-4343-9fdc-7c03af0f645d";
const imgRectangleCopy8 = "https://www.figma.com/api/mcp/asset/6c2ca2b7-5177-4e76-9fe6-4f8dcdf48c36";
const imgRectangleCopy9 = "https://www.figma.com/api/mcp/asset/918967c4-e987-4362-aa51-73032b1d788e";
const imgRectangleCopy10 = "https://www.figma.com/api/mcp/asset/7237f69a-0ef6-4223-88c1-122f40b51878";
const imgRectangleCopy11 = "https://www.figma.com/api/mcp/asset/e89cb88b-476d-4911-9ae8-1e29879833b9";

const activities = ["Hiking", "Climbing", "Cycling", "Water sports", "All activities"];

const routeCards = [
  { title: "Bavaria, Germany", subtitle: "823 routes", image: imgRectangleCopy6 },
  { title: "Dolomites, Italy", subtitle: "342 routes", image: imgRectangleCopy8 },
  { title: "Swiss Alps", subtitle: "912 routes", image: imgRectangleCopy7 },
  { title: "Lake District, England", subtitle: "Bavaria, Germany", image: imgRectangleCopy9 },
  { title: "Pyrenees, France", subtitle: "Bavaria, Germany", image: imgRectangleCopy10 },
  { title: "Tyrol, Austria", subtitle: "Bavaria, Germany", image: imgRectangleCopy11 },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-muted/40 text-foreground [font-family:'Mulish',sans-serif]">
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-[1372px] flex-col gap-12 px-4 pb-16 pt-8 md:px-8 md:pt-14 lg:gap-24">
        <section className="grid items-center gap-8 lg:grid-cols-[1fr_507px]">
          <div className="space-y-8 text-[#2f363b]">
            <h1 className="max-w-[595px] text-4xl font-extrabold leading-tight md:text-[47px] md:leading-[52px]">
              Adventures are better with buddies
            </h1>
            <p className="max-w-[715px] text-base leading-8 md:text-2xl md:leading-[44px]">
              Hiking Buddies is a non-profit community of outdoor and sport lovers. Join an upcoming hiking, climbing,
              cycling - you name it - event or organise your own and enjoy your adventures with like-minded people!
            </p>
          </div>
          <div className="h-[320px] rounded-[20px] bg-muted-foreground/35 lg:h-[575px]" />
        </section>

        <section className="grid grid-cols-2 gap-2 md:grid-cols-5 md:gap-3">
          {activities.map((activity, index) => (
            <Card
              key={activity}
              className={`flex h-[110px] items-end rounded-[5px] border-0 p-3 text-sm font-bold text-white shadow-none ${
                index === activities.length - 1 ? "bg-muted-foreground/20" : "bg-muted-foreground/35"
              }`}
            >
              {activity}
            </Card>
          ))}
        </section>

        <section className="grid items-center gap-6 lg:grid-cols-[550px_1fr]">
          <div className="overflow-hidden rounded-[5px]">
            <img src={imgRectangleCopy5} alt="Hiking community values" className="h-full w-full object-cover" />
          </div>
          <div className="space-y-6 text-[#2f363b]">
            <h2 className="text-3xl font-extrabold md:text-[38px]">What we stand for</h2>
            <p className="max-w-[690px] text-sm leading-7 md:text-lg md:leading-[30px]">
              We are a community of outdoor sports lovers and restless mountains explorers and we believe it is more
              fun to do it together. Most of events are organized by passionate community members, just like you, and
              therefore free of charge except transportation and personal costs.
            </p>
            <Button
              variant="link"
              className="h-auto p-0 text-sm text-foreground underline decoration-1 underline-offset-2 md:text-lg"
            >
              More about community rules and values
            </Button>
          </div>
        </section>

        <section className="overflow-hidden rounded-[5px] bg-background">
          <img src={imgScreenshot20251229At2132431} alt="Upcoming events preview" className="h-auto w-full" />
        </section>

        <section className="space-y-8">
          <div className="border-b border-border pb-4 text-right">
            <Button variant="link" asChild className="h-auto p-0 text-base font-bold text-success md:text-xl">
              <Link to="/routes">Explore more routes</Link>
            </Button>
          </div>

          <h2 className="text-3xl font-extrabold text-[#2f363b] md:text-[38px]">Explore hiking routes</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-6">
            {routeCards.map((route) => (
              <Card key={route.title} className="overflow-hidden rounded-[5px] border-0 bg-transparent shadow-none">
                <img src={route.image} alt={route.title} className="h-[240px] w-full rounded-[5px] object-cover" />
                <div className="pt-2 text-[#2f363b]">
                  <p className="text-sm font-bold leading-tight">{route.title}</p>
                  <p className="text-xs leading-5 text-muted-foreground">{route.subtitle}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

    </div>
  );
};

export default Index;
