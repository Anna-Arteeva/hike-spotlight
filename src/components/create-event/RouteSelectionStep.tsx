import { useTranslation } from "react-i18next";

interface RouteSelectionStepProps {
  selectedRouteId: string | null;
  onSelect: (routeId: string) => void;
}

export function RouteSelectionStep({ selectedRouteId, onSelect }: RouteSelectionStepProps) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center flex-1 px-4">
      <div className="max-w-2xl w-full text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          {t("createEvent.step2.title")}
        </h2>
        <p className="text-muted-foreground mb-8">
          {t("createEvent.step2.subtitle")}
        </p>

        {/* Stub content - to be implemented later */}
        <div className="border-2 border-dashed border-border rounded-xl p-12 bg-muted/30">
          <p className="text-muted-foreground">
            {t("createEvent.step2.placeholder")}
          </p>
        </div>
      </div>
    </div>
  );
}
