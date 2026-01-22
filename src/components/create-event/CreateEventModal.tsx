import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { X, ArrowLeft } from "lucide-react";
import { nextSaturday } from "date-fns";
import { Button } from "@/components/ui/button";
import { ActivityTypeStep } from "./ActivityTypeStep";
import { RouteSelectionStep } from "./RouteSelectionStep";
import { DateTimeStep } from "./DateTimeStep";
import { ProgressIndicator } from "./ProgressIndicator";
import { UnsavedChangesDialog } from "./UnsavedChangesDialog";
import type { ActivityType, CreateEventFormData } from "./types";
import { ACTIVITIES_WITH_ROUTES, getStepsForActivity } from "./types";

const STORAGE_KEY = "create-event-draft";

interface CreateEventModalProps {
  open: boolean;
  onClose: () => void;
}

const getNextSaturday = (): Date => {
  const today = new Date();
  // If today is Saturday, get next Saturday
  return nextSaturday(today);
};

const getInitialFormData = (): CreateEventFormData => ({
  activityType: null,
  routeId: null,
  date: getNextSaturday(),
  time: "09:00",
});

export function CreateEventModal({ open, onClose }: CreateEventModalProps) {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<CreateEventFormData>(getInitialFormData);
  const [showUnsavedDialog, setShowUnsavedDialog] = useState(false);

  // Load saved data from localStorage on mount
  useEffect(() => {
    if (open) {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setFormData({
            ...parsed,
            date: parsed.date ? new Date(parsed.date) : null,
          });
        } catch {
          // Invalid data, ignore
        }
      }
    }
  }, [open]);

  const hasUnsavedChanges = useCallback((): boolean => {
    // Only consider it unsaved if user has selected an activity (started the flow)
    return !!formData.activityType;
  }, [formData.activityType]);

  // Save to localStorage whenever formData changes
  useEffect(() => {
    if (hasUnsavedChanges()) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        ...formData,
        date: formData.date?.toISOString() ?? null,
      }));
    }
  }, [formData, hasUnsavedChanges]);

  const handleClose = () => {
    if (hasUnsavedChanges()) {
      setShowUnsavedDialog(true);
    } else {
      onClose();
    }
  };

  const handleDiscard = () => {
    localStorage.removeItem(STORAGE_KEY);
    setFormData(getInitialFormData());
    setCurrentStep(1);
    setShowUnsavedDialog(false);
    onClose();
  };

  const handleContinueEditing = () => {
    setShowUnsavedDialog(false);
  };

  const handleBack = () => {
    if (currentStep === 1) return;
    
    // If on date step and activity doesn't need route, go back to activity
    if (currentStep === 3 && formData.activityType && !ACTIVITIES_WITH_ROUTES.includes(formData.activityType)) {
      setCurrentStep(1);
    } else {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleContinue = () => {
    const totalSteps = getStepsForActivity(formData.activityType);
    
    if (currentStep === 1 && formData.activityType) {
      // If activity doesn't need route, skip to date/time
      if (!ACTIVITIES_WITH_ROUTES.includes(formData.activityType)) {
        setCurrentStep(3);
      } else {
        setCurrentStep(2);
      }
    } else if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleActivitySelect = (activity: ActivityType) => {
    setFormData((prev) => ({ ...prev, activityType: activity }));
  };

  const handleRouteSelect = (routeId: string) => {
    setFormData((prev) => ({ ...prev, routeId }));
  };

  const handleDateChange = (date: Date | undefined) => {
    setFormData((prev) => ({ ...prev, date: date ?? null }));
  };

  const handleTimeChange = (time: string) => {
    setFormData((prev) => ({ ...prev, time }));
  };

  const getDisplayStep = (): number => {
    if (!formData.activityType || ACTIVITIES_WITH_ROUTES.includes(formData.activityType)) {
      return currentStep;
    }
    // For activities without route, step 3 displays as step 2
    return currentStep === 3 ? 2 : currentStep;
  };

  const canContinue = (): boolean => {
    switch (currentStep) {
      case 1:
        return !!formData.activityType;
      case 2:
        // Route step - for now always allow (stub)
        return true;
      case 3:
        return !!formData.date && !!formData.time;
      default:
        return false;
    }
  };

  const isLastStep = (): boolean => {
    const totalSteps = getStepsForActivity(formData.activityType);
    return getDisplayStep() === totalSteps;
  };

  if (!open) return null;

  const totalSteps = getStepsForActivity(formData.activityType);
  const displayStep = getDisplayStep();
  const showBackButton = currentStep > 1;

  return (
    <>
      <div 
        className="fixed inset-0 z-50 bg-background flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="create-event-title"
      >
        {/* Header */}
        <header className="flex items-center justify-between px-4 md:px-6 py-4 border-b border-border">
          <div className="flex items-center gap-4">
            {showBackButton && (
              <Button
                variant="ghost"
                size="icon"
                onClick={handleBack}
                aria-label={t("createEvent.back")}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
            )}
            <h1 id="create-event-title" className="text-lg font-semibold text-foreground">
              {t("createEvent.title")}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <ProgressIndicator currentStep={displayStep} totalSteps={totalSteps} />
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              aria-label={t("createEvent.close")}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto py-8">
          {currentStep === 1 && (
            <ActivityTypeStep
              selectedActivity={formData.activityType}
              onSelect={handleActivitySelect}
            />
          )}
          {currentStep === 2 && (
            <RouteSelectionStep
              selectedRouteId={formData.routeId}
              onSelect={handleRouteSelect}
            />
          )}
          {currentStep === 3 && (
            <DateTimeStep
              selectedDate={formData.date}
              selectedTime={formData.time}
              onDateChange={handleDateChange}
              onTimeChange={handleTimeChange}
            />
          )}
        </main>

        {/* Footer */}
        <footer className="px-4 md:px-6 py-4 border-t border-border">
          <div className="flex justify-end">
            <Button
              onClick={handleContinue}
              disabled={!canContinue()}
              size="lg"
            >
              {isLastStep() ? t("createEvent.finish") : t("createEvent.continue")}
            </Button>
          </div>
        </footer>
      </div>

      <UnsavedChangesDialog
        open={showUnsavedDialog}
        onContinueEditing={handleContinueEditing}
        onDiscard={handleDiscard}
      />
    </>
  );
}
