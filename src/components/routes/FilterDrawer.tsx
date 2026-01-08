import { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
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
import type { RouteFilters, Difficulty, Facility, Highlight, Feature, RouteType } from '@/types/route';
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
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          Filters
          {activeFilterCount > 0 && (
            <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
              {activeFilterCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Filter Routes</SheetTitle>
        </SheetHeader>
        
        <ScrollArea className="h-[calc(100vh-10rem)] mt-6 pr-4">
          <div className="space-y-6">
            {/* Location */}
            <section>
              <h3 className="text-sm font-semibold text-foreground mb-3">Location</h3>
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
              <h3 className="text-sm font-semibold text-foreground mb-3">Difficulty (SAC Scale)</h3>
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
            <section className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground">Duration</h3>
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

        <div className="flex gap-3 mt-6">
          <Button variant="outline" className="flex-1" onClick={onClearFilters}>
            Clear all
          </Button>
          <Button className="flex-1" onClick={() => setOpen(false)}>
            Show results
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
