import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const communityStats = [
  { label: "Members", value: "3.2k" },
  { label: "Group hikes", value: "128" },
  { label: "Active guides", value: "42" },
];

const meetups = [
  {
    title: "Weekend sunrise hike",
    description: "Easy loop with a scenic ridge at dawn.",
    meta: "Sat, 6:30 AM · 18 spots left",
  },
  {
    title: "Trail care day",
    description: "Help restore paths with the local alpine club.",
    meta: "Sun, 10:00 AM · Tools provided",
  },
  {
    title: "Beginner navigation clinic",
    description: "Map, compass, and route planning basics.",
    meta: "Wed, 6:00 PM · 12 spots left",
  },
];

const discussions = [
  {
    title: "Favorite huts for stormy weekends",
    tag: "Tips",
    summary: "Share your coziest, most reliable cabin picks.",
  },
  {
    title: "Packing list for variable conditions",
    tag: "Gear",
    summary: "Lightweight layers that still keep you warm.",
  },
  {
    title: "Best training hikes near the city",
    tag: "Local",
    summary: "Short loops with steady elevation gain.",
  },
];

const Community = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-6 py-10 space-y-10">
        <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div>
            <Badge variant="secondary">Community</Badge>
            <h1 className="mt-3 text-4xl font-bold">Hiking together, all year</h1>
            <p className="mt-3 text-muted-foreground">
              Meet local hikers, share trail wisdom, and plan memorable weekends with people who move at your pace.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button>Join the community</Button>
              <Button variant="outline">View guidelines</Button>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Community pulse</CardTitle>
              <CardDescription>Weekly snapshot of what is new.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              {communityStats.map((stat) => (
                <div key={stat.label} className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                  <span className="text-lg font-semibold">{stat.value}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          {communityStats.map((stat) => (
            <Card key={`stat-${stat.label}`}>
              <CardHeader className="pb-2">
                <CardDescription>{stat.label}</CardDescription>
                <CardTitle className="text-3xl">{stat.value}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Upcoming meetups</h2>
              <Button variant="ghost" className="text-primary">
                View all
              </Button>
            </div>
            <div className="space-y-4">
              {meetups.map((meetup) => (
                <Card key={meetup.title}>
                  <CardHeader className="space-y-2">
                    <CardTitle className="text-xl">{meetup.title}</CardTitle>
                    <CardDescription>{meetup.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">{meetup.meta}</CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Discussion highlights</h2>
              <Button variant="ghost" className="text-primary">
                Start a thread
              </Button>
            </div>
            <div className="space-y-3">
              {discussions.map((discussion) => (
                <Card key={discussion.title}>
                  <CardHeader className="space-y-2">
                    <Badge variant="outline" className="w-fit">
                      {discussion.tag}
                    </Badge>
                    <CardTitle className="text-lg">{discussion.title}</CardTitle>
                    <CardDescription>{discussion.summary}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Community;
