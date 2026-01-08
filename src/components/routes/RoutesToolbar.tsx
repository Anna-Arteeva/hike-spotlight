import { RouteFilters, SortOption } from '@/types/route';
import { FilterDrawer } from '@/components/routes/FilterDrawer';
import { SortSelect } from '@/components/routes/SortSelect';
import { ActiveFilterChips } from '@/components/routes/ActiveFilterChips';

interface RoutesToolbarProps {
  filters: RouteFilters;
  sort: SortOption;
  totalCount: number;
  activeFilterCount: number;
  onUpdateFilters: (filters: Partial<RouteFilters>) => void;
  onSetSort: (sort: SortOption) => void;
  onClearFilters: () => void;
  onClearFilter: (key: keyof RouteFilters) => void;
}

export function RoutesToolbar({
  filters,
  sort,
  totalCount,
  activeFilterCount,
  onUpdateFilters,
  onSetSort,
  onClearFilters,
  onClearFilter,
}: RoutesToolbarProps) {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-6">
        <div className="flex items-center gap-3">
          <FilterDrawer
            filters={filters}
            onUpdateFilters={onUpdateFilters}
            onClearFilters={onClearFilters}
            activeFilterCount={activeFilterCount}
          />
          <span className="text-sm text-muted-foreground">
            {totalCount} route{totalCount !== 1 ? 's' : ''} found
          </span>
        </div>
        <SortSelect value={sort} onChange={onSetSort} />
      </div>

      {activeFilterCount > 0 && (
        <div className="mb-6">
          <ActiveFilterChips filters={filters} onClearFilter={onClearFilter} onClearAll={onClearFilters} />
        </div>
      )}
    </>
  );
}
