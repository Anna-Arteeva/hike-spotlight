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
}

export const ACTIVITIES_WITH_ROUTES: ActivityType[] = ["hiking", "cycling", "climbing"];

export const getStepsForActivity = (activity: ActivityType | null): number => {
  if (!activity) return 3;
  return ACTIVITIES_WITH_ROUTES.includes(activity) ? 3 : 2;
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
