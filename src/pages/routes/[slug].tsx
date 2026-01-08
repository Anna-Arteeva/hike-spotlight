import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Mountain, Clock, ArrowUpRight, MapPin, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import { getRouteBySlug, formatDistance, formatDuration, formatElevation } from '@/lib/routeUtils';
import { DifficultyBadge } from '@/components/routes/DifficultyChips';
import { ROUTE_TYPES, DIFFICULTY_LABELS } from '@/types/route';

export default function RouteDetail() {
  const { slug } = useParams<{ slug: string }>();
  const route = slug ? getRouteBySlug(slug) : undefined;

  if (!route) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Mountain className="h-16 w-16 mx-auto text-muted-foreground/30 mb-4" />
          <h1 className="text-xl font-semibold text-foreground mb-2">Route not found</h1>
          <p className="text-muted-foreground mb-4">The route you're looking for doesn't exist.</p>
          <Link to="/routes">
            <Button>Back to routes</Button>
          </Link>
        </div>
      </div>
    );
  }

  const routeTypeLabel = ROUTE_TYPES.find(t => t.value === route.route_type)?.label ?? route.route_type;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero */}
      <div className="relative h-64 sm:h-80 bg-muted">
        <div className="absolute inset-0 flex items-center justify-center">
          <Mountain className="h-24 w-24 text-muted-foreground/20" />
        </div>
        <div className="absolute top-4 left-4">
          <Link to="/routes">
            <Button variant="secondary" size="icon" aria-label="Back to routes">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <DifficultyBadge difficulty={route.difficulty} />
            <Badge variant="secondary">{routeTypeLabel}</Badge>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{route.title}</h1>
          <div className="flex items-center gap-1 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{route.region}, {route.country}</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <ArrowUpRight className="h-5 w-5 mx-auto text-muted-foreground mb-1" />
              <div className="text-lg font-semibold text-foreground">{formatDistance(route.distance_km)}</div>
              <div className="text-xs text-muted-foreground">Distance</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Clock className="h-5 w-5 mx-auto text-muted-foreground mb-1" />
              <div className="text-lg font-semibold text-foreground">{formatDuration(route.duration_min)}</div>
              <div className="text-xs text-muted-foreground">Duration</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Mountain className="h-5 w-5 mx-auto text-muted-foreground mb-1" />
              <div className="text-lg font-semibold text-foreground">{formatElevation(route.elevation_gain_m)}</div>
              <div className="text-xs text-muted-foreground">Elevation</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Compass className="h-5 w-5 mx-auto text-muted-foreground mb-1" />
              <div className="text-lg font-semibold text-foreground">{DIFFICULTY_LABELS[route.difficulty].split(' - ')[0]}</div>
              <div className="text-xs text-muted-foreground">{DIFFICULTY_LABELS[route.difficulty].split(' - ')[1]}</div>
            </CardContent>
          </Card>
        </div>

        <Separator className="mb-8" />

        {/* Description */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-3">Overview</h2>
          <p className="text-muted-foreground leading-relaxed">{route.summary}</p>
        </section>

        {/* Tags */}
        {(route.facilities.length > 0 || route.highlights.length > 0 || route.features.length > 0) && (
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-3">Tags</h2>
            <div className="space-y-3">
              {route.facilities.length > 0 && (
                <div>
                  <span className="text-sm text-muted-foreground mr-2">Facilities:</span>
                  {route.facilities.map(f => <Badge key={f} variant="outline" className="mr-1 mb-1">{f}</Badge>)}
                </div>
              )}
              {route.highlights.length > 0 && (
                <div>
                  <span className="text-sm text-muted-foreground mr-2">Highlights:</span>
                  {route.highlights.map(h => <Badge key={h} variant="outline" className="mr-1 mb-1">{h}</Badge>)}
                </div>
              )}
              {route.features.length > 0 && (
                <div>
                  <span className="text-sm text-muted-foreground mr-2">Features:</span>
                  {route.features.map(f => <Badge key={f} variant="outline" className="mr-1 mb-1">{f}</Badge>)}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Gallery placeholder */}
        <section>
          <h2 className="text-lg font-semibold text-foreground mb-3">Gallery</h2>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <Mountain className="h-8 w-8 text-muted-foreground/30" />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
