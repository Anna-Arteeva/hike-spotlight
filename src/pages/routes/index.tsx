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

import { useMemo } from 'react';
import { Mountain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import { useRouteFilters } from '@/hooks/useRouteFilters';
import { routes, filterRoutes, sortRoutes, paginateRoutes } from '@/lib/routeUtils';
import { FilterDrawer } from '@/components/routes/FilterDrawer';
import { SortSelect } from '@/components/routes/SortSelect';
import { ActiveFilterChips } from '@/components/routes/ActiveFilterChips';
import { RouteCard, RouteCardSkeleton } from '@/components/routes/RouteCard';
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
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-6">
          <div className="flex items-center gap-3">
            <FilterDrawer
              filters={filters}
              onUpdateFilters={updateFilters}
              onClearFilters={clearFilters}
              activeFilterCount={activeFilterCount}
            />
            <span className="text-sm text-muted-foreground">
              {totalCount} route{totalCount !== 1 ? 's' : ''} found
            </span>
          </div>
          <SortSelect value={sort} onChange={setSort} />
        </div>

        {/* Active filters */}
        {activeFilterCount > 0 && (
          <div className="mb-6">
            <ActiveFilterChips filters={filters} onClearFilter={clearFilter} onClearAll={clearFilters} />
          </div>
        )}

        {/* Results grid */}
        {paginatedRoutes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {paginatedRoutes.map((route) => (
              <RouteCard key={route.id} route={route} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Mountain className="h-16 w-16 mx-auto text-muted-foreground/30 mb-4" />
            <h2 className="text-lg font-semibold text-foreground mb-2">No routes found</h2>
            <p className="text-muted-foreground mb-4">Try adjusting your filters</p>
            <Button variant="outline" onClick={clearFilters}>Clear all filters</Button>
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
    </div>
  );
}
