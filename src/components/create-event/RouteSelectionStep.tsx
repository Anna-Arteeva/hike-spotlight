import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RouteCard } from "@/components/routes/RouteCard";
import { RoutesToolbar } from "@/components/routes/RoutesToolbar";
import { useRouteFilters } from "@/hooks/useRouteFilters";
import { routes, filterRoutes, sortRoutes } from "@/lib/routeUtils";
import type { Route } from "@/types/route";

interface RouteSelectionStepProps {
  selectedRouteId: string | null;
  onSelect: (routeId: string) => void;
}

export function RouteSelectionStep({ selectedRouteId, onSelect }: RouteSelectionStepProps) {
  const { t } = useTranslation();
  const { filters, sort, updateFilters, setSort, clearFilters, clearFilter, activeFilterCount } = useRouteFilters();

  const filteredRoutes = useMemo(() => {
    const filtered = filterRoutes(routes, filters);
    return sortRoutes(filtered, sort);
  }, [filters, sort]);

  const handleRouteClick = (route: Route) => {
    onSelect(route.id);
  };

  return (
    <div className="flex flex-col flex-1 px-4 md:px-8 overflow-hidden">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          {t("createEvent.step2.title")}
        </h2>
        <p className="text-muted-foreground">
          {t("createEvent.step2.subtitle")}
        </p>
      </div>

      {/* Toolbar with filters and sort */}
      <RoutesToolbar
        filters={filters}
        sort={sort}
        totalCount={filteredRoutes.length}
        activeFilterCount={activeFilterCount}
        onUpdateFilters={updateFilters}
        onSetSort={setSort}
        onClearFilters={clearFilters}
        onClearFilter={clearFilter}
      />

      {/* Routes Grid - Scrollable */}
      <div className="flex-1 overflow-y-auto pb-4">
        {filteredRoutes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredRoutes.map((route) => (
              <div
                key={route.id}
                className={`relative rounded-xl transition-all ${
                  selectedRouteId === route.id
                    ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                    : ""
                }`}
              >
                <RouteCard
                  route={route}
                  onClick={() => handleRouteClick(route)}
                />
                {selectedRouteId === route.id && (
                  <div className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-medium">
                    {t("createEvent.step2.selected")}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Mountain className="h-16 w-16 mx-auto text-muted-foreground/30 mb-4" aria-hidden="true" />
            <h3 className="text-lg font-semibold text-foreground mb-2">{t("routes.noRoutesFound")}</h3>
            <p className="text-muted-foreground mb-4">{t("common.tryAdjusting")}</p>
            <Button variant="outline" onClick={clearFilters}>{t("common.clearAllFilters")}</Button>
          </div>
        )}
      </div>
    </div>
  );
}
