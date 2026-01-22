import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { X, ArrowLeft, Loader2 } from "lucide-react";
import { nextSaturday, format } from "date-fns";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { ActivityTypeStep } from "./ActivityTypeStep";
import { RouteSelectionStep } from "./RouteSelectionStep";
import { DateTimeStep } from "./DateTimeStep";
import { EventDetailsStep } from "./EventDetailsStep";
import { EventDescriptionStep } from "./EventDescriptionStep";
import { ProgressIndicator } from "./ProgressIndicator";
import { UnsavedChangesDialog } from "./UnsavedChangesDialog";
import { supabase } from "@/integrations/supabase/client";
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

// Disclaimer text to append to description when enabled
const DISCLAIMER_TEXT = "⚠️ Disclaimer: Hiking can be dangerous. I am not a mountain guide. Everybody is responsible for her/himself. Make yourself familiar with the route and its requirements. It's recommended to download a map and bring a cell phone and first aid kit for emergencies.";

export function CreateEventModal({ open, onClose }: CreateEventModalProps) {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<CreateEventFormData>(getInitialFormData);
  const [showUnsavedDialog, setShowUnsavedDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load saved data from localStorage on mount
  useEffect(() => {
    if (open) {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          // Merge with defaults to ensure all fields exist (handles old localStorage data)
          setFormData({
            ...getInitialFormData(),
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
   * Save event to database
   */
  const handleCreateEvent = async () => {
    if (!formData.activityType || !formData.date || !formData.time || !formData.eventName) {
      toast.error(t("createEvent.errors.missingFields"));
      return;
    }

    setIsSubmitting(true);

    try {
      // Check if user is authenticated
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast.error(t("createEvent.errors.notAuthenticated"));
        setIsSubmitting(false);
        return;
      }

      // Build description with disclaimer if enabled
      let finalDescription = formData.description || "";
      if (formData.addDisclaimer) {
        finalDescription = finalDescription 
          ? `${finalDescription}\n\n${DISCLAIMER_TEXT}`
          : DISCLAIMER_TEXT;
      }

      // Map activity type to database enum (only hiking and cycling are supported in DB)
      const dbActivity = formData.activityType === "hiking" || formData.activityType === "cycling" 
        ? formData.activityType 
        : "hiking"; // Default to hiking for unsupported types

      // Insert the event
      const { error } = await supabase
        .from("events")
        .insert({
          user_id: user.id,
          title: formData.eventName,
          event_date: format(formData.date, "yyyy-MM-dd"),
          event_time: formData.time,
          activity: dbActivity,
          max_participants: formData.maxParticipants,
          description: finalDescription || null,
          image_url: formData.coverPhotoUrl,
          organizer_name: user.email?.split("@")[0] || "Event Organizer",
          departure_location: "To be announced", // Placeholder - could be enhanced later
        });

      if (error) {
        console.error("Error creating event:", error);
        toast.error(t("createEvent.errors.createFailed"));
        setIsSubmitting(false);
        return;
      }

      toast.success(t("createEvent.success"));
      
      // Clear draft and close modal
      localStorage.removeItem(STORAGE_KEY);
      setFormData(getInitialFormData());
      setCurrentStep(1);
      onClose();
    } catch (error) {
      console.error("Error creating event:", error);
      toast.error(t("createEvent.errors.createFailed"));
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Navigation logic for continue button
   */
  const handleContinue = () => {
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
      handleCreateEvent();
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
              disabled={!canContinue() || isSubmitting}
              size="lg"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t("createEvent.creating")}
                </>
              ) : isLastStep() ? (
                t("createEvent.finish")
              ) : (
                t("createEvent.continue")
              )}
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
