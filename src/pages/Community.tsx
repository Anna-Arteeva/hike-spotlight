import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Community = () => {
  const { t } = useTranslation();

  const communityStats = [
    { labelKey: "members", value: "3.2k" },
    { labelKey: "groupHikes", value: "128" },
    { labelKey: "activeGuides", value: "42" },
  ];

  const meetupKeys = ["sunriseHike", "trailCare", "navigationClinic"] as const;
  const discussionKeys = ["huts", "packing", "training"] as const;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-6 py-10 space-y-10">
        <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div>
            <Badge variant="secondary">{t('community.badge')}</Badge>
            <h1 className="mt-3 text-4xl font-bold">{t('community.title')}</h1>
            <p className="mt-3 text-muted-foreground">
              {t('community.description')}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button>{t('community.joinCommunity')}</Button>
              <Button variant="outline">{t('community.viewGuidelines')}</Button>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{t('community.communityPulse')}</CardTitle>
              <CardDescription>{t('community.weeklySnapshot')}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              {communityStats.map((stat) => (
                <div key={stat.labelKey} className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{t(`community.${stat.labelKey}`)}</span>
                  <span className="text-lg font-semibold">{stat.value}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          {communityStats.map((stat) => (
            <Card key={`stat-${stat.labelKey}`}>
              <CardHeader className="pb-2">
                <CardDescription>{t(`community.${stat.labelKey}`)}</CardDescription>
                <CardTitle className="text-3xl">{stat.value}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">{t('community.upcomingMeetups')}</h2>
              <Button variant="ghost" className="text-primary">
                {t('common.viewAll')}
              </Button>
            </div>
            <div className="space-y-4">
              {meetupKeys.map((key) => (
                <Card key={key}>
                  <CardHeader className="space-y-2">
                    <CardTitle className="text-xl">{t(`community.meetups.${key}.title`)}</CardTitle>
                    <CardDescription>{t(`community.meetups.${key}.description`)}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    {t(`community.meetups.${key}.meta`)}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">{t('community.discussionHighlights')}</h2>
              <Button variant="ghost" className="text-primary">
                {t('community.startThread')}
              </Button>
            </div>
            <div className="space-y-3">
              {discussionKeys.map((key) => (
                <Card key={key}>
                  <CardHeader className="space-y-2">
                    <Badge variant="outline" className="w-fit">
                      {t(`community.discussions.${key}.tag`)}
                    </Badge>
                    <CardTitle className="text-lg">{t(`community.discussions.${key}.title`)}</CardTitle>
                    <CardDescription>{t(`community.discussions.${key}.summary`)}</CardDescription>
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
