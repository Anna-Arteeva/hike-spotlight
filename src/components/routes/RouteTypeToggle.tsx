import { cn } from '@/lib/utils';
import type { RouteType } from '@/types/route';
import { ROUTE_TYPES } from '@/types/route';

interface RouteTypeToggleProps {
  value: RouteType | undefined;
  onChange: (value: RouteType | undefined) => void;
  className?: string;
}

export function RouteTypeToggle({ value, onChange, className }: RouteTypeToggleProps) {
  return (
    <div className={cn('space-y-2', className)}>
      <label className="text-sm font-medium text-foreground">Route Type</label>
      <div
        className="inline-flex rounded-lg border border-border p-1 bg-muted"
        role="radiogroup"
        aria-label="Route type"
      >
        <button
          type="button"
          role="radio"
          aria-checked={!value}
          onClick={() => onChange(undefined)}
          className={cn(
            'px-3 py-1.5 text-sm font-medium rounded-md transition-colors',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
            !value
              ? 'bg-background text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          )}
        >
          All
        </button>
        {ROUTE_TYPES.map((type) => (
          <button
            key={type.value}
            type="button"
            role="radio"
            aria-checked={value === type.value}
            onClick={() => onChange(type.value)}
            className={cn(
              'px-3 py-1.5 text-sm font-medium rounded-md transition-colors',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
              value === type.value
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            {type.label}
          </button>
        ))}
      </div>
    </div>
  );
}
