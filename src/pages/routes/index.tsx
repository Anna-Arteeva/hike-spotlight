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
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { Mountain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import { useRouteFilters } from '@/hooks/useRouteFilters';
import { routes, filterRoutes, sortRoutes, paginateRoutes } from '@/lib/routeUtils';
import { RoutesToolbar } from '@/components/routes/RoutesToolbar';
import { RouteCard } from '@/components/routes/RouteCard';
import { RouteDetails } from '@/components/detail-view';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const ITEMS_PER_PAGE = 12;

export default function RoutesIndex() {
  const { filters, sort, page, updateFilters, setSort, setPage, clearFilters, clearFilter, activeFilterCount } = useRouteFilters();
  const [isRouteModalOpen, setIsRouteModalOpen] = useState(false);
  const { t } = useTranslation();
  const [routesParent] = useAutoAnimate();

  const { paginatedRoutes, totalPages, totalCount } = useMemo(() => {
    const filtered = filterRoutes(routes, filters);
    const sorted = sortRoutes(filtered, sort);
    const { routes: paginated, totalPages, totalCount } = paginateRoutes(sorted, page, ITEMS_PER_PAGE);
    return { paginatedRoutes: paginated, totalPages, totalCount };
  }, [filters, sort, page]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-6">
        <RoutesToolbar
          filters={filters}
          sort={sort}
          totalCount={totalCount}
          activeFilterCount={activeFilterCount}
          onUpdateFilters={updateFilters}
          onSetSort={setSort}
          onClearFilters={clearFilters}
          onClearFilter={clearFilter}
        />

        {/* Results grid */}
        {paginatedRoutes.length > 0 ? (
          <div ref={routesParent} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {paginatedRoutes.map((route) => (
              <RouteCard key={route.id} route={route} onClick={() => setIsRouteModalOpen(true)} />
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

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination className="mt-8">
            <PaginationContent>
              {page > 1 && (
                <PaginationItem>
                  <PaginationPrevious onClick={() => setPage(page - 1)} className="cursor-pointer" />
                </PaginationItem>
              )}
              {Array.from({ length: totalPages }, (_, i) => i + 1).slice(Math.max(0, page - 3), page + 2).map((p) => (
                <PaginationItem key={p}>
                  <PaginationLink onClick={() => setPage(p)} isActive={p === page} className="cursor-pointer">
                    {p}
                  </PaginationLink>
                </PaginationItem>
              ))}
              {page < totalPages && (
                <PaginationItem>
                  <PaginationNext onClick={() => setPage(page + 1)} className="cursor-pointer" />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        )}
      </main>

      <RouteDetails open={isRouteModalOpen} onOpenChange={setIsRouteModalOpen} />
    </div>
  );
}
