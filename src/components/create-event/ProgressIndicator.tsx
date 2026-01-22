import { cn } from "@/lib/utils";

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressIndicator({ currentStep, totalSteps }: ProgressIndicatorProps) {
  return (
    <div className="flex items-center gap-2" role="progressbar" aria-valuenow={currentStep} aria-valuemin={1} aria-valuemax={totalSteps}>
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
        <div
          key={step}
          className={cn(
            "h-2 rounded-full transition-all duration-300",
            step === currentStep 
              ? "w-8 bg-primary" 
              : step < currentStep 
                ? "w-2 bg-primary/60" 
                : "w-2 bg-muted-foreground/30"
          )}
          aria-hidden="true"
        />
      ))}
      <span className="ml-2 text-sm text-muted-foreground">
        {currentStep}/{totalSteps}
      </span>
    </div>
  );
}
