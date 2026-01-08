import { useSearchParams } from 'react-router-dom';
import { useCallback, useMemo } from 'react';
import type { RouteFilters, SortOption, Difficulty, RouteType, Facility, Highlight, Feature } from '@/types/route';

export function useRouteFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters: RouteFilters = useMemo(() => ({
    country: searchParams.get('country') || undefined,
    region: searchParams.get('region') || undefined,
    difficulty: searchParams.get('difficulty')?.split(',').filter(Boolean) as Difficulty[] | undefined,
    distance_min: searchParams.get('dist_min') ? Number(searchParams.get('dist_min')) : undefined,
    distance_max: searchParams.get('dist_max') ? Number(searchParams.get('dist_max')) : undefined,
    duration_min: searchParams.get('dur_min') ? Number(searchParams.get('dur_min')) : undefined,
    duration_max: searchParams.get('dur_max') ? Number(searchParams.get('dur_max')) : undefined,
    elevation_min: searchParams.get('elev_min') ? Number(searchParams.get('elev_min')) : undefined,
    elevation_max: searchParams.get('elev_max') ? Number(searchParams.get('elev_max')) : undefined,
    facilities: searchParams.get('facilities')?.split(',').filter(Boolean) as Facility[] | undefined,
    highlights: searchParams.get('highlights')?.split(',').filter(Boolean) as Highlight[] | undefined,
    features: searchParams.get('features')?.split(',').filter(Boolean) as Feature[] | undefined,
    route_type: searchParams.get('type') as RouteType | undefined,
  }), [searchParams]);

  const sort: SortOption = (searchParams.get('sort') as SortOption) || 'relevance';
  const page = Number(searchParams.get('page')) || 1;

  const updateFilters = useCallback((updates: Partial<RouteFilters>) => {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      
      Object.entries(updates).forEach(([key, value]) => {
        const paramKey = getParamKey(key);
        if (value === undefined || value === null || (Array.isArray(value) && value.length === 0)) {
          next.delete(paramKey);
        } else if (Array.isArray(value)) {
          next.set(paramKey, value.join(','));
        } else {
          next.set(paramKey, String(value));
        }
      });
      
      // Reset to page 1 when filters change
      next.delete('page');
      
      return next;
    });
  }, [setSearchParams]);

  const setSort = useCallback((newSort: SortOption) => {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      if (newSort === 'relevance') {
        next.delete('sort');
      } else {
        next.set('sort', newSort);
      }
      next.delete('page');
      return next;
    });
  }, [setSearchParams]);

  const setPage = useCallback((newPage: number) => {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      if (newPage <= 1) {
        next.delete('page');
      } else {
        next.set('page', String(newPage));
      }
      return next;
    });
  }, [setSearchParams]);

  const clearFilters = useCallback(() => {
    setSearchParams(new URLSearchParams());
  }, [setSearchParams]);

  const clearFilter = useCallback((key: keyof RouteFilters) => {
    updateFilters({ [key]: undefined });
  }, [updateFilters]);

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.country) count++;
    if (filters.region) count++;
    if (filters.difficulty?.length) count++;
    if (filters.distance_min !== undefined || filters.distance_max !== undefined) count++;
    if (filters.duration_min !== undefined || filters.duration_max !== undefined) count++;
    if (filters.elevation_min !== undefined || filters.elevation_max !== undefined) count++;
    if (filters.facilities?.length) count++;
    if (filters.highlights?.length) count++;
    if (filters.features?.length) count++;
    if (filters.route_type) count++;
    return count;
  }, [filters]);

  return {
    filters,
    sort,
    page,
    updateFilters,
    setSort,
    setPage,
    clearFilters,
    clearFilter,
    activeFilterCount,
  };
}

function getParamKey(key: string): string {
  const mapping: Record<string, string> = {
    distance_min: 'dist_min',
    distance_max: 'dist_max',
    duration_min: 'dur_min',
    duration_max: 'dur_max',
    elevation_min: 'elev_min',
    elevation_max: 'elev_max',
    route_type: 'type',
  };
  return mapping[key] || key;
}
