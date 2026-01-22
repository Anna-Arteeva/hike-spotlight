import { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { SlidersHorizontal } from 'lucide-react';
import { DifficultyChips } from './DifficultyChips';
import { RangeSlider } from './RangeSlider';
import { MultiSelect } from './MultiSelect';
import { DependentSelect } from './DependentSelect';
import { RouteTypeToggle } from './RouteTypeToggle';
import { DurationChips } from './DurationChips';
import type { RouteFilters } from '@/types/route';
import { FACILITIES, HIGHLIGHTS, FEATURES } from '@/types/route';
import { getCountries, getRegionsByCountry } from '@/lib/routeUtils';

interface FilterDrawerProps {
  filters: RouteFilters;
  onUpdateFilters: (updates: Partial<RouteFilters>) => void;
  onClearFilters: () => void;
  activeFilterCount: number;
}

export function FilterDrawer({
  filters,
  onUpdateFilters,
  onClearFilters,
  activeFilterCount,
}: FilterDrawerProps) {
  const [open, setOpen] = useState(false);
  
  const countries = getCountries();
  const regions = filters.country ? getRegionsByCountry(filters.country) : [];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          Filters
          {activeFilterCount > 0 && (
            <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
              {activeFilterCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        align="start" 
        className="w-[340px] sm:w-[400px] p-0 z-50 bg-popover border border-border shadow-lg"
        sideOffset={8}
      >
        <div className="p-4 border-b border-border">
          <h3 className="font-semibold text-foreground">Filter Routes</h3>
        </div>
        
        <ScrollArea className="h-[400px] px-4">
          <div className="space-y-5 py-4">
            {/* Location */}
            <section>
              <h4 className="text-sm font-medium text-foreground mb-2">Location</h4>
              <DependentSelect
                countryValue={filters.country}
                regionValue={filters.region}
                countries={countries}
                regions={regions}
                onCountryChange={(country) => onUpdateFilters({ country, region: undefined })}
                onRegionChange={(region) => onUpdateFilters({ region })}
              />
            </section>

            <Separator />

            {/* Difficulty */}
            <section>
              <h4 className="text-sm font-medium text-foreground mb-2">Difficulty (SAC Scale)</h4>
              <DifficultyChips
                selected={filters.difficulty || []}
                onChange={(difficulty) => onUpdateFilters({ difficulty })}
              />
            </section>

            <Separator />

            {/* Route Type */}
            <section>
              <RouteTypeToggle
                value={filters.route_type}
                onChange={(route_type) => onUpdateFilters({ route_type })}
              />
            </section>

            <Separator />

            {/* Distance */}
            <section>
              <RangeSlider
                label="Distance"
                min={0}
                max={50}
                step={1}
                value={[filters.distance_min, filters.distance_max]}
                onChange={([min, max]) => onUpdateFilters({ distance_min: min, distance_max: max })}
                unit=" km"
              />
            </section>

            <Separator />

            {/* Duration */}
            <section className="space-y-2">
              <h4 className="text-sm font-medium text-foreground">Duration</h4>
              <DurationChips
                value={{ min: filters.duration_min, max: filters.duration_max }}
                onChange={({ min, max }) => onUpdateFilters({ duration_min: min, duration_max: max })}
              />
              <RangeSlider
                label="Custom range"
                min={0}
                max={720}
                step={30}
                value={[filters.duration_min, filters.duration_max]}
                onChange={([min, max]) => onUpdateFilters({ duration_min: min, duration_max: max })}
                formatValue={(v) => `${Math.floor(v / 60)}h${v % 60 ? ` ${v % 60}m` : ''}`}
              />
            </section>

            <Separator />

            {/* Elevation */}
            <section>
              <RangeSlider
                label="Elevation Gain"
                min={0}
                max={2500}
                step={100}
                value={[filters.elevation_min, filters.elevation_max]}
                onChange={([min, max]) => onUpdateFilters({ elevation_min: min, elevation_max: max })}
                unit=" m"
              />
            </section>

            <Separator />

            {/* Facilities */}
            <section>
              <MultiSelect
                label="Facilities"
                options={FACILITIES}
                selected={filters.facilities || []}
                onChange={(facilities) => onUpdateFilters({ facilities })}
              />
            </section>

            <Separator />

            {/* Highlights */}
            <section>
              <MultiSelect
                label="Highlights"
                options={HIGHLIGHTS}
                selected={filters.highlights || []}
                onChange={(highlights) => onUpdateFilters({ highlights })}
              />
            </section>

            <Separator />

            {/* Features */}
            <section>
              <MultiSelect
                label="Features"
                options={FEATURES}
                selected={filters.features || []}
                onChange={(features) => onUpdateFilters({ features })}
              />
            </section>
          </div>
        </ScrollArea>

        <div className="flex gap-3 p-4 border-t border-border">
          <Button variant="outline" size="sm" className="flex-1" onClick={onClearFilters}>
            Clear all
          </Button>
          <Button size="sm" className="flex-1" onClick={() => setOpen(false)}>
            Show results
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
