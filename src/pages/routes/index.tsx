/**
 * Routes List Page
 * 
 * MOCK DATA REPLACEMENT GUIDE:
 * ============================
 * Currently uses static data from src/data/routes.sample.json
 * 
 * To connect to a real API:
 * 1. Replace the import in src/lib/routeUtils.ts with API fetch
 * 2. Update filterRoutes/sortRoutes to work with API params
 * 3. Consider server-side pagination for large datasets
 */

import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mountain, LayoutGrid, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import { useRouteFilters } from '@/hooks/useRouteFilters';
import { routes, filterRoutes, sortRoutes } from '@/lib/routeUtils';
import { RoutesToolbar } from '@/components/routes/RoutesToolbar';
import { SwipeableRouteStack } from '@/components/routes/SwipeableRouteStack';
import { RouteDetails } from '@/components/detail-view';
import { toast } from 'sonner';
import type { Route } from '@/types/route';

export default function RoutesIndex() {
  const { filters, sort, updateFilters, setSort, clearFilters, clearFilter, activeFilterCount } = useRouteFilters();
  const [isRouteModalOpen, setIsRouteModalOpen] = useState(false);
  const { t } = useTranslation();

  const filteredRoutes = useMemo(() => {
    const filtered = filterRoutes(routes, filters);
    return sortRoutes(filtered, sort);
  }, [filters, sort]);

  const handleSwipeLeft = (route: Route) => {
    toast(`Skipped: ${route.title}`, {
      description: "Swipe right to save routes you like",
    });
  };

  const handleSwipeRight = (route: Route) => {
    toast.success(`Saved: ${route.title}`, {
      description: "Added to your favorites",
    });
  };

  const handleCardClick = () => {
    setIsRouteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-6">
        <RoutesToolbar
          filters={filters}
          sort={sort}
          totalCount={filteredRoutes.length}
          activeFilterCount={activeFilterCount}
          onUpdateFilters={updateFilters}
          onSetSort={setSort}
          onClearFilters={clearFilters}
          onClearFilter={clearFilter}
        />

        {/* Swipeable Card Stack */}
        <div className="py-8 pb-24">
          {filteredRoutes.length > 0 ? (
            <SwipeableRouteStack
              routes={filteredRoutes}
              onSwipeLeft={handleSwipeLeft}
              onSwipeRight={handleSwipeRight}
              onCardClick={handleCardClick}
            />
          ) : (
            <div className="text-center py-16">
              <Mountain className="h-16 w-16 mx-auto text-muted-foreground/30 mb-4" aria-hidden="true" />
              <h2 className="text-lg font-semibold text-foreground mb-2">{t('routes.noRoutesFound')}</h2>
              <p className="text-muted-foreground mb-4">{t('common.tryAdjusting')}</p>
              <Button variant="outline" onClick={clearFilters}>{t('common.clearAllFilters')}</Button>
            </div>
          )}
        </div>
      </main>

      <RouteDetails open={isRouteModalOpen} onOpenChange={setIsRouteModalOpen} />
    </div>
  );
}
