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
import { Mountain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import { useRouteFilters } from '@/hooks/useRouteFilters';
import { routes, filterRoutes, sortRoutes } from '@/lib/routeUtils';
import { RoutesToolbar } from '@/components/routes/RoutesToolbar';
import { RouteCard } from '@/components/routes/RouteCard';
import { RouteDetails } from '@/components/detail-view';
import type { Route } from '@/types/route';

export default function RoutesIndex() {
  const { filters, sort, updateFilters, setSort, clearFilters, clearFilter, activeFilterCount } = useRouteFilters();
  const [isRouteModalOpen, setIsRouteModalOpen] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null);
  const { t } = useTranslation();

  const filteredRoutes = useMemo(() => {
    const filtered = filterRoutes(routes, filters);
    return sortRoutes(filtered, sort);
  }, [filters, sort]);

  const handleCardClick = (route: Route) => {
    setSelectedRoute(route);
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

        {/* Routes Grid */}
        <div className="py-8">
          {filteredRoutes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredRoutes.map((route) => (
                <RouteCard
                  key={route.id}
                  route={route}
                  onClick={() => handleCardClick(route)}
                />
              ))}
            </div>
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
