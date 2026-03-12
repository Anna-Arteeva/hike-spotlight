import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { MemoryRouter } from "react-router-dom";
import { ActiveFilterChips } from "@/components/routes/ActiveFilterChips";
import { DependentSelect } from "@/components/routes/DependentSelect";
import { DifficultyBadge, DifficultyChips } from "@/components/routes/DifficultyChips";
import { DurationChips } from "@/components/routes/DurationChips";
import { FilterDrawer } from "@/components/routes/FilterDrawer";
import { MultiSelect } from "@/components/routes/MultiSelect";
import { RangeSlider } from "@/components/routes/RangeSlider";
import { RouteCard, RouteCardSkeleton } from "@/components/routes/RouteCard";
import { RouteTypeToggle } from "@/components/routes/RouteTypeToggle";
import { RoutesToolbar } from "@/components/routes/RoutesToolbar";
import { SortSelect } from "@/components/routes/SortSelect";
import type { Route, RouteFilters, SortOption } from "@/types/route";
import { FACILITIES, HIGHLIGHTS } from "@/types/route";

const meta: Meta = {
  title: "Routes",
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleRoute: Route = {
  id: "route-1",
  slug: "alpine-loop",
  title: "Alpine loop trail",
  summary: "A scenic loop with ridge views and alpine meadows.",
  country: "Switzerland",
  region: "Bernese Oberland",
  distance_km: 14.5,
  duration_min: 360,
  elevation_gain_m: 980,
  difficulty: "T3",
  route_type: "loop",
  facilities: ["Mountain huts"],
  highlights: ["Mountain ridge"],
  features: ["Via ferrata"],
};

export const RouteCardPrimary: Story = {
  render: () => (
    <MemoryRouter>
      <RouteCard route={sampleRoute} />
    </MemoryRouter>
  ),
};

export const RouteCardSecondary: Story = {
  render: () => (
    <MemoryRouter>
      <RouteCard
        route={{
          ...sampleRoute,
          id: "route-2",
          slug: "coastal-trail",
          title: "Coastal out and back",
          route_type: "out_and_back",
          difficulty: "T2",
          distance_km: 9.2,
          duration_min: 240,
        }}
      />
    </MemoryRouter>
  ),
};

export const RouteCardLoading: Story = {
  render: () => <RouteCardSkeleton />,
};

export const RouteCardEdgeCase: Story = {
  render: () => (
    <MemoryRouter>
      <RouteCard
        route={{
          ...sampleRoute,
          id: "route-3",
          slug: "very-long-route-title",
          title: "Very long route title that should wrap onto multiple lines in the card layout",
          summary:
            "Summary text that is intentionally verbose to test clamping behavior inside the card.",
        }}
      />
    </MemoryRouter>
  ),
};

export const RoutesToolbarPrimary: Story = {
  render: () => {
    const [filters, setFilters] = useState<RouteFilters>({});
    const [sort, setSort] = useState<SortOption>("relevance");
    return (
      <RoutesToolbar
        filters={filters}
        sort={sort}
        totalCount={24}
        activeFilterCount={0}
        onUpdateFilters={(updates) => setFilters((prev) => ({ ...prev, ...updates }))}
        onSetSort={setSort}
        onClearFilters={() => setFilters({})}
        onClearFilter={(key) => setFilters((prev) => ({ ...prev, [key]: undefined }))}
      />
    );
  },
};

export const RoutesToolbarSecondary: Story = {
  render: () => {
    const [filters, setFilters] = useState<RouteFilters>({
      difficulty: ["T3"],
      route_type: "loop",
    });
    const [sort, setSort] = useState<SortOption>("distance_desc");
    return (
      <RoutesToolbar
        filters={filters}
        sort={sort}
        totalCount={8}
        activeFilterCount={2}
        onUpdateFilters={(updates) => setFilters((prev) => ({ ...prev, ...updates }))}
        onSetSort={setSort}
        onClearFilters={() => setFilters({})}
        onClearFilter={(key) => setFilters((prev) => ({ ...prev, [key]: undefined }))}
      />
    );
  },
};

export const RoutesToolbarLoading: Story = {
  render: () => {
    const [filters, setFilters] = useState<RouteFilters>({});
    const [sort, setSort] = useState<SortOption>("relevance");
    return (
      <div className="opacity-60 pointer-events-none">
        <RoutesToolbar
          filters={filters}
          sort={sort}
          totalCount={0}
          activeFilterCount={0}
          onUpdateFilters={(updates) => setFilters((prev) => ({ ...prev, ...updates }))}
          onSetSort={setSort}
          onClearFilters={() => setFilters({})}
          onClearFilter={(key) => setFilters((prev) => ({ ...prev, [key]: undefined }))}
        />
      </div>
    );
  },
};

export const RoutesToolbarEdgeCase: Story = {
  render: () => {
    const [filters, setFilters] = useState<RouteFilters>({
      country: "Switzerland",
      region: "Bernese Oberland",
      difficulty: ["T1", "T2", "T3", "T4"],
    });
    const [sort, setSort] = useState<SortOption>("recent");
    return (
      <RoutesToolbar
        filters={filters}
        sort={sort}
        totalCount={120}
        activeFilterCount={4}
        onUpdateFilters={(updates) => setFilters((prev) => ({ ...prev, ...updates }))}
        onSetSort={setSort}
        onClearFilters={() => setFilters({})}
        onClearFilter={(key) => setFilters((prev) => ({ ...prev, [key]: undefined }))}
      />
    );
  },
};

export const SortSelectPrimary: Story = {
  render: () => {
    const [value, setValue] = useState<SortOption>("relevance");
    return <SortSelect value={value} onChange={setValue} />;
  },
};

export const SortSelectSecondary: Story = {
  render: () => {
    const [value, setValue] = useState<SortOption>("duration_desc");
    return <SortSelect value={value} onChange={setValue} />;
  },
};

export const SortSelectLoading: Story = {
  render: () => (
    <div className="opacity-60 pointer-events-none">
      <SortSelect value="relevance" onChange={() => undefined} />
    </div>
  ),
};

export const SortSelectEdgeCase: Story = {
  render: () => {
    const [value, setValue] = useState<SortOption>("distance_asc");
    return <SortSelect value={value} onChange={setValue} />;
  },
};

export const RouteTypeTogglePrimary: Story = {
  render: () => {
    const [value, setValue] = useState<RouteFilters["route_type"]>(undefined);
    return <RouteTypeToggle value={value} onChange={setValue} />;
  },
};

export const RouteTypeToggleSecondary: Story = {
  render: () => {
    const [value, setValue] = useState<RouteFilters["route_type"]>("loop");
    return <RouteTypeToggle value={value} onChange={setValue} />;
  },
};

export const RouteTypeToggleLoading: Story = {
  render: () => (
    <div className="opacity-60 pointer-events-none">
      <RouteTypeToggle value="out_and_back" onChange={() => undefined} />
    </div>
  ),
};

export const RouteTypeToggleEdgeCase: Story = {
  render: () => (
    <div className="max-w-[420px]">
      <RouteTypeToggle value="point_to_point" onChange={() => undefined} />
    </div>
  ),
};

export const RangeSliderPrimary: Story = {
  render: () => {
    const [value, setValue] = useState<[number | undefined, number | undefined]>([5, 20]);
    return (
      <RangeSlider label="Distance" min={0} max={50} value={value} onChange={setValue} unit=" km" />
    );
  },
};

export const RangeSliderSecondary: Story = {
  render: () => {
    const [value, setValue] = useState<[number | undefined, number | undefined]>([undefined, 120]);
    return (
      <RangeSlider
        label="Duration"
        min={0}
        max={720}
        step={30}
        value={value}
        onChange={setValue}
        formatValue={(v) => `${Math.floor(v / 60)}h`}
      />
    );
  },
};

export const RangeSliderLoading: Story = {
  render: () => (
    <div className="opacity-60 pointer-events-none">
      <RangeSlider label="Elevation" min={0} max={2500} value={[200, 1600]} onChange={() => undefined} unit=" m" />
    </div>
  ),
};

export const RangeSliderEdgeCase: Story = {
  render: () => (
    <RangeSlider label="Distance" min={0} max={200} value={[0, 200]} onChange={() => undefined} unit=" km" />
  ),
};

export const MultiSelectPrimary: Story = {
  render: () => {
    const [selected, setSelected] = useState(["Mountain huts"]);
    return (
      <MultiSelect label="Facilities" options={FACILITIES} selected={selected} onChange={setSelected} />
    );
  },
};

export const MultiSelectSecondary: Story = {
  render: () => {
    const [selected, setSelected] = useState(["Lakes"]);
    return (
      <MultiSelect label="Highlights" options={HIGHLIGHTS} selected={selected} onChange={setSelected} />
    );
  },
};

export const MultiSelectLoading: Story = {
  render: () => (
    <div className="opacity-60 pointer-events-none">
      <MultiSelect label="Facilities" options={FACILITIES} selected={[]} onChange={() => undefined} />
    </div>
  ),
};

export const MultiSelectEdgeCase: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    return (
      <MultiSelect
        label="Facilities with very long label for edge case testing"
        options={["Very long facility name", "Another long option"]}
        selected={selected}
        onChange={setSelected}
      />
    );
  },
};

export const DependentSelectPrimary: Story = {
  render: () => {
    const [country, setCountry] = useState<string | undefined>("Germany");
    const [region, setRegion] = useState<string | undefined>("Bavaria");
    return (
      <DependentSelect
        countryValue={country}
        regionValue={region}
        countries={["Germany", "Austria"]}
        regions={["Bavaria", "Tyrol"]}
        onCountryChange={setCountry}
        onRegionChange={setRegion}
      />
    );
  },
};

export const DependentSelectSecondary: Story = {
  render: () => {
    const [country, setCountry] = useState<string | undefined>(undefined);
    const [region, setRegion] = useState<string | undefined>(undefined);
    return (
      <DependentSelect
        countryValue={country}
        regionValue={region}
        countries={["Italy", "France"]}
        regions={["Dolomites", "Alps"]}
        onCountryChange={setCountry}
        onRegionChange={setRegion}
      />
    );
  },
};

export const DependentSelectLoading: Story = {
  render: () => (
    <div className="opacity-60 pointer-events-none">
      <DependentSelect
        countryValue="Germany"
        regionValue={undefined}
        countries={["Germany"]}
        regions={["Bavaria"]}
        onCountryChange={() => undefined}
        onRegionChange={() => undefined}
      />
    </div>
  ),
};

export const DependentSelectEdgeCase: Story = {
  render: () => {
    const [country, setCountry] = useState<string | undefined>("United States of America");
    const [region, setRegion] = useState<string | undefined>("Pacific Northwest");
    return (
      <DependentSelect
        countryValue={country}
        regionValue={region}
        countries={["United States of America"]}
        regions={["Pacific Northwest", "Rocky Mountains"]}
        onCountryChange={setCountry}
        onRegionChange={setRegion}
      />
    );
  },
};

export const DifficultyChipsPrimary: Story = {
  render: () => {
    const [selected, setSelected] = useState<Difficulty[]>(["T2"]);
    return <DifficultyChips selected={selected} onChange={setSelected} />;
  },
};

export const DifficultyChipsSecondary: Story = {
  render: () => {
    const [selected, setSelected] = useState(["T4", "T5"]);
    return <DifficultyChips selected={selected} onChange={setSelected} />;
  },
};

export const DifficultyChipsLoading: Story = {
  render: () => (
    <div className="opacity-60 pointer-events-none">
      <DifficultyChips selected={[]} onChange={() => undefined} />
    </div>
  ),
};

export const DifficultyChipsEdgeCase: Story = {
  render: () => <DifficultyBadge difficulty="T6" />,
};

export const DurationChipsPrimary: Story = {
  render: () => {
    const [value, setValue] = useState<{ min?: number; max?: number }>({ min: 120, max: 240 });
    return <DurationChips value={value} onChange={setValue} />;
  },
};

export const DurationChipsSecondary: Story = {
  render: () => {
    const [value, setValue] = useState<{ min?: number; max?: number }>({ min: undefined, max: 120 });
    return <DurationChips value={value} onChange={setValue} />;
  },
};

export const DurationChipsLoading: Story = {
  render: () => (
    <div className="opacity-60 pointer-events-none">
      <DurationChips value={{}} onChange={() => undefined} />
    </div>
  ),
};

export const DurationChipsEdgeCase: Story = {
  render: () => <DurationChips value={{ min: 480, max: undefined }} onChange={() => undefined} />,
};

export const ActiveFilterChipsPrimary: Story = {
  render: () => (
    <ActiveFilterChips
      filters={{ difficulty: ["T2"], route_type: "loop" }}
      onClearFilter={() => undefined}
      onClearAll={() => undefined}
    />
  ),
};

export const ActiveFilterChipsSecondary: Story = {
  render: () => (
    <ActiveFilterChips
      filters={{ country: "Austria", region: "Tyrol", distance_min: 5, distance_max: 20 }}
      onClearFilter={() => undefined}
      onClearAll={() => undefined}
    />
  ),
};

export const ActiveFilterChipsLoading: Story = {
  render: () => (
    <div className="opacity-60 pointer-events-none">
      <ActiveFilterChips filters={{ difficulty: ["T4"] }} onClearFilter={() => undefined} onClearAll={() => undefined} />
    </div>
  ),
};

export const ActiveFilterChipsEdgeCase: Story = {
  render: () => (
    <ActiveFilterChips
      filters={{ features: ["Via ferrata"], highlights: ["Mountain ridge", "Waterfalls"] }}
      onClearFilter={() => undefined}
      onClearAll={() => undefined}
    />
  ),
};

export const FilterDrawerPrimary: Story = {
  render: () => {
    const [filters, setFilters] = useState<RouteFilters>({});
    return (
      <FilterDrawer
        filters={filters}
        activeFilterCount={0}
        onUpdateFilters={(updates) => setFilters((prev) => ({ ...prev, ...updates }))}
        onClearFilters={() => setFilters({})}
      />
    );
  },
};

export const FilterDrawerSecondary: Story = {
  render: () => {
    const [filters, setFilters] = useState<RouteFilters>({
      difficulty: ["T3"],
      route_type: "loop",
    });
    return (
      <FilterDrawer
        filters={filters}
        activeFilterCount={2}
        onUpdateFilters={(updates) => setFilters((prev) => ({ ...prev, ...updates }))}
        onClearFilters={() => setFilters({})}
      />
    );
  },
};

export const FilterDrawerLoading: Story = {
  render: () => (
    <div className="opacity-60 pointer-events-none">
      <FilterDrawer filters={{}} activeFilterCount={0} onUpdateFilters={() => undefined} onClearFilters={() => undefined} />
    </div>
  ),
};

export const FilterDrawerEdgeCase: Story = {
  render: () => {
    const [filters, setFilters] = useState<RouteFilters>({
      country: "Switzerland",
      region: "Bernese Oberland",
      difficulty: ["T1", "T2", "T3", "T4"],
      distance_min: 0,
      distance_max: 50,
      duration_min: 0,
      duration_max: 720,
      elevation_min: 0,
      elevation_max: 2000,
      facilities: ["Mountain huts", "Restaurants"],
      highlights: ["Lakes", "Waterfalls"],
    });
    return (
      <FilterDrawer
        filters={filters}
        activeFilterCount={6}
        onUpdateFilters={(updates) => setFilters((prev) => ({ ...prev, ...updates }))}
        onClearFilters={() => setFilters({})}
      />
    );
  },
};
