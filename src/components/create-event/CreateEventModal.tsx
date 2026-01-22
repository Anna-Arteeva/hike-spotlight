import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { X, ArrowLeft } from "lucide-react";
import { nextSaturday } from "date-fns";
import { Button } from "@/components/ui/button";
import { ActivityTypeStep } from "./ActivityTypeStep";
import { RouteSelectionStep } from "./RouteSelectionStep";
import { DateTimeStep } from "./DateTimeStep";
import { EventDetailsStep } from "./EventDetailsStep";
import { EventDescriptionStep } from "./EventDescriptionStep";
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
  return nextSaturday(today);
};

const getInitialFormData = (): CreateEventFormData => ({
  activityType: null,
  routeId: null,
  date: getNextSaturday(),
  time: "09:00",
  eventName: "",
  maxParticipants: 10,
  description: "",
  addDisclaimer: false,
  coverPhotoUrl: null,
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

  /**
   * Navigation logic for back button
   * For activities WITH routes: 1 -> 2 -> 3 -> 4 -> 5
   * For activities WITHOUT routes: 1 -> 3 -> 4 -> 5 (skip step 2)
   */
  const handleBack = () => {
    if (currentStep === 1) return;
    
    // If going back from step 3 and activity doesn't need route, go to step 1
    if (currentStep === 3 && formData.activityType && !ACTIVITIES_WITH_ROUTES.includes(formData.activityType)) {
      setCurrentStep(1);
    } else {
      setCurrentStep((prev) => prev - 1);
    }
  };

  /**
   * Navigation logic for continue button
   */
  const handleContinue = () => {
    const totalSteps = getStepsForActivity(formData.activityType);
    
    if (currentStep === 1 && formData.activityType) {
      // If activity doesn't need route, skip to date/time (step 3)
      if (!ACTIVITIES_WITH_ROUTES.includes(formData.activityType)) {
        setCurrentStep(3);
      } else {
        setCurrentStep(2);
      }
    } else if (currentStep < 5) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Last step - handle form submission
      console.log("Form submitted:", formData);
      handleDiscard(); // For now, just close
    }
  };

  // Form data handlers
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

  const handleEventNameChange = (eventName: string) => {
    setFormData((prev) => ({ ...prev, eventName }));
  };

  const handleMaxParticipantsChange = (maxParticipants: number) => {
    setFormData((prev) => ({ ...prev, maxParticipants }));
  };

  const handleDescriptionChange = (description: string) => {
    setFormData((prev) => ({ ...prev, description }));
  };

  const handleAddDisclaimerChange = (addDisclaimer: boolean) => {
    setFormData((prev) => ({ ...prev, addDisclaimer }));
  };

  const handleCoverPhotoChange = (coverPhotoUrl: string | null) => {
    setFormData((prev) => ({ ...prev, coverPhotoUrl }));
  };

  /**
   * Calculate display step number for progress indicator
   * For activities without routes, we skip step 2 (route selection)
   */
  const getDisplayStep = (): number => {
    if (!formData.activityType || ACTIVITIES_WITH_ROUTES.includes(formData.activityType)) {
      return currentStep;
    }
    // For activities without route:
    // currentStep 1 -> display 1
    // currentStep 3 -> display 2
    // currentStep 4 -> display 3
    // currentStep 5 -> display 4
    if (currentStep === 1) return 1;
    return currentStep - 1;
  };

  const canContinue = (): boolean => {
    switch (currentStep) {
      case 1:
        return !!formData.activityType;
      case 2:
        return true; // Route step - optional for now
      case 3:
        return !!formData.date && !!formData.time;
      case 4:
        return formData.eventName.trim().length > 0;
      case 5:
        return true; // Description is optional
      default:
        return false;
    }
  };

  const isLastStep = (): boolean => {
    return currentStep === 5;
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
          {currentStep === 4 && (
            <EventDetailsStep
              eventName={formData.eventName}
              maxParticipants={formData.maxParticipants}
              onEventNameChange={handleEventNameChange}
              onMaxParticipantsChange={handleMaxParticipantsChange}
            />
          )}
          {currentStep === 5 && (
            <EventDescriptionStep
              description={formData.description}
              addDisclaimer={formData.addDisclaimer}
              coverPhotoUrl={formData.coverPhotoUrl}
              onDescriptionChange={handleDescriptionChange}
              onAddDisclaimerChange={handleAddDisclaimerChange}
              onCoverPhotoChange={handleCoverPhotoChange}
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
