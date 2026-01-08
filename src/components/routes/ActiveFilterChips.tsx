import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { RouteFilters, Difficulty, RouteType, Facility, Highlight, Feature } from '@/types/route';
import { ROUTE_TYPES } from '@/types/route';

interface ActiveFilterChipsProps {
  filters: RouteFilters;
  onClearFilter: (key: keyof RouteFilters) => void;
  onClearAll: () => void;
}

export function ActiveFilterChips({ filters, onClearFilter, onClearAll }: ActiveFilterChipsProps) {
  const chips: { key: keyof RouteFilters; label: string }[] = [];

  if (filters.country) {
    chips.push({ key: 'country', label: filters.country });
  }
  if (filters.region) {
    chips.push({ key: 'region', label: filters.region });
  }
  if (filters.difficulty?.length) {
    chips.push({ key: 'difficulty', label: `Difficulty: ${filters.difficulty.join(', ')}` });
  }
  if (filters.distance_min !== undefined || filters.distance_max !== undefined) {
    const min = filters.distance_min ?? 0;
    const max = filters.distance_max ?? '∞';
    chips.push({ key: 'distance_min', label: `Distance: ${min}–${max} km` });
  }
  if (filters.duration_min !== undefined || filters.duration_max !== undefined) {
    const min = filters.duration_min ?? 0;
    const max = filters.duration_max ?? '∞';
    chips.push({ key: 'duration_min', label: `Duration: ${min}–${max} min` });
  }
  if (filters.elevation_min !== undefined || filters.elevation_max !== undefined) {
    const min = filters.elevation_min ?? 0;
    const max = filters.elevation_max ?? '∞';
    chips.push({ key: 'elevation_min', label: `Elevation: ${min}–${max} m` });
  }
  if (filters.facilities?.length) {
    chips.push({ key: 'facilities', label: `Facilities: ${filters.facilities.join(', ')}` });
  }
  if (filters.highlights?.length) {
    chips.push({ key: 'highlights', label: `Highlights: ${filters.highlights.join(', ')}` });
  }
  if (filters.features?.length) {
    chips.push({ key: 'features', label: `Features: ${filters.features.join(', ')}` });
  }
  if (filters.route_type) {
    const typeLabel = ROUTE_TYPES.find(t => t.value === filters.route_type)?.label ?? filters.route_type;
    chips.push({ key: 'route_type', label: `Type: ${typeLabel}` });
  }

  if (chips.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2">
      {chips.map(({ key, label }) => (
        <span
          key={key}
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-sm bg-secondary text-secondary-foreground"
        >
          {label}
          <button
            type="button"
            onClick={() => onClearFilter(key)}
            className="ml-0.5 p-0.5 rounded-full hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={`Remove ${label} filter`}
          >
            <X className="h-3 w-3" />
          </button>
        </span>
      ))}
      <Button
        variant="ghost"
        size="sm"
        onClick={onClearAll}
        className="text-muted-foreground hover:text-foreground"
      >
        Clear all
      </Button>
    </div>
  );
}
