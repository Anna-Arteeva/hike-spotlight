export type ActivityType = 
  | "hiking" 
  | "cycling" 
  | "climbing" 
  | "skiing" 
  | "bouldering" 
  | "social";

export interface CreateEventFormData {
  activityType: ActivityType | null;
  routeId: string | null;
  date: Date | null;
  time: string | null;
  eventName: string;
  maxParticipants: number;
  description: string;
  addDisclaimer: boolean;
  coverPhotoUrl: string | null;
}

export const ACTIVITIES_WITH_ROUTES: ActivityType[] = ["hiking", "cycling", "climbing"];

/**
 * Steps for activities WITH routes:
 * 1. Activity Type
 * 2. Route Selection
 * 3. Date/Time
 * 4. Event Details (name, participants)
 * 5. Description (description, disclaimer, photo)
 * 
 * Steps for activities WITHOUT routes:
 * 1. Activity Type
 * 2. Date/Time (skip route)
 * 3. Event Details
 * 4. Description
 */
export const getStepsForActivity = (activity: ActivityType | null): number => {
  if (!activity) return 5;
  return ACTIVITIES_WITH_ROUTES.includes(activity) ? 5 : 4;
};

export const getStepIndex = (
  currentStep: number, 
  activity: ActivityType | null
): { step: number; total: number } => {
  const total = getStepsForActivity(activity);
  
  // If activity doesn't need route selection, step 2 (route) is skipped
  if (activity && !ACTIVITIES_WITH_ROUTES.includes(activity)) {
    // Step 1 = Activity, Step 2 = Date/Time (skipping route)
    return { step: currentStep, total };
  }
  
  return { step: currentStep, total };
};
