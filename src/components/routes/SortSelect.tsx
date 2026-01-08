import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { SortOption } from '@/types/route';

interface SortSelectProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'relevance', label: 'Relevance' },
  { value: 'distance_asc', label: 'Distance (shortest)' },
  { value: 'distance_desc', label: 'Distance (longest)' },
  { value: 'duration_asc', label: 'Duration (shortest)' },
  { value: 'duration_desc', label: 'Duration (longest)' },
  { value: 'elevation_asc', label: 'Elevation (lowest)' },
  { value: 'elevation_desc', label: 'Elevation (highest)' },
  { value: 'recent', label: 'Recently added' },
];

export function SortSelect({ value, onChange }: SortSelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]" aria-label="Sort routes by">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        {SORT_OPTIONS.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
