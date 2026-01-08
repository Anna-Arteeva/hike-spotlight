import type { Route, RouteFilters, SortOption } from '@/types/route';
import routesData from '@/data/routes.sample.json';

export const routes: Route[] = routesData as Route[];

export function getCountries(): string[] {
  return [...new Set(routes.map(r => r.country))].sort();
}

export function getRegionsByCountry(country: string): string[] {
  return [...new Set(routes.filter(r => r.country === country).map(r => r.region))].sort();
}

export function filterRoutes(routes: Route[], filters: RouteFilters): Route[] {
  return routes.filter(route => {
    if (filters.country && route.country !== filters.country) return false;
    if (filters.region && route.region !== filters.region) return false;
    
    if (filters.difficulty?.length && !filters.difficulty.includes(route.difficulty)) return false;
    
    if (filters.distance_min !== undefined && route.distance_km < filters.distance_min) return false;
    if (filters.distance_max !== undefined && route.distance_km > filters.distance_max) return false;
    
    if (filters.duration_min !== undefined && route.duration_min < filters.duration_min) return false;
    if (filters.duration_max !== undefined && route.duration_min > filters.duration_max) return false;
    
    if (filters.elevation_min !== undefined && route.elevation_gain_m < filters.elevation_min) return false;
    if (filters.elevation_max !== undefined && route.elevation_gain_m > filters.elevation_max) return false;
    
    if (filters.facilities?.length && !filters.facilities.some(f => route.facilities.includes(f))) return false;
    if (filters.highlights?.length && !filters.highlights.some(h => route.highlights.includes(h))) return false;
    if (filters.features?.length && !filters.features.some(f => route.features.includes(f))) return false;
    
    if (filters.route_type && route.route_type !== filters.route_type) return false;
    
    return true;
  });
}

export function sortRoutes(routes: Route[], sort: SortOption): Route[] {
  const sorted = [...routes];
  
  switch (sort) {
    case 'distance_asc':
      return sorted.sort((a, b) => a.distance_km - b.distance_km);
    case 'distance_desc':
      return sorted.sort((a, b) => b.distance_km - a.distance_km);
    case 'duration_asc':
      return sorted.sort((a, b) => a.duration_min - b.duration_min);
    case 'duration_desc':
      return sorted.sort((a, b) => b.duration_min - a.duration_min);
    case 'elevation_asc':
      return sorted.sort((a, b) => a.elevation_gain_m - b.elevation_gain_m);
    case 'elevation_desc':
      return sorted.sort((a, b) => b.elevation_gain_m - a.elevation_gain_m);
    case 'recent':
      return sorted.sort((a, b) => {
        const dateA = a.created_at ? new Date(a.created_at).getTime() : 0;
        const dateB = b.created_at ? new Date(b.created_at).getTime() : 0;
        return dateB - dateA;
      });
    case 'relevance':
    default:
      return sorted;
  }
}

export function paginateRoutes(routes: Route[], page: number, perPage: number = 12): {
  routes: Route[];
  totalPages: number;
  totalCount: number;
} {
  const startIndex = (page - 1) * perPage;
  const paginatedRoutes = routes.slice(startIndex, startIndex + perPage);
  
  return {
    routes: paginatedRoutes,
    totalPages: Math.ceil(routes.length / perPage),
    totalCount: routes.length,
  };
}

export function getRouteBySlug(slug: string): Route | undefined {
  return routes.find(r => r.slug === slug);
}

export function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hours === 0) return `${mins}min`;
  if (mins === 0) return `${hours}h`;
  return `${hours}h ${mins}min`;
}

export function formatDistance(km: number): string {
  return `${km.toFixed(1)} km`;
}

export function formatElevation(m: number): string {
  return `${m} m`;
}
