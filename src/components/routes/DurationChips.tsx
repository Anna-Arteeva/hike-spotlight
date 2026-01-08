import { cn } from '@/lib/utils';

interface DurationChipsProps {
  value: { min?: number; max?: number };
  onChange: (value: { min?: number; max?: number }) => void;
  className?: string;
}

const DURATION_OPTIONS = [
  { label: '< 2h', min: undefined, max: 120 },
  { label: '2–4h', min: 120, max: 240 },
  { label: '4–8h', min: 240, max: 480 },
  { label: '> 8h', min: 480, max: undefined },
];

export function DurationChips({ value, onChange, className }: DurationChipsProps) {
  const isSelected = (option: typeof DURATION_OPTIONS[number]) => {
    return value.min === option.min && value.max === option.max;
  };

  const handleClick = (option: typeof DURATION_OPTIONS[number]) => {
    if (isSelected(option)) {
      onChange({ min: undefined, max: undefined });
    } else {
      onChange({ min: option.min, max: option.max });
    }
  };

  return (
    <div className={cn('flex flex-wrap gap-2', className)} role="group" aria-label="Duration quick filters">
      {DURATION_OPTIONS.map((option) => {
        const selected = isSelected(option);
        return (
          <button
            key={option.label}
            type="button"
            onClick={() => handleClick(option)}
            aria-pressed={selected}
            className={cn(
              'px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
              selected
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-muted text-muted-foreground border-border hover:bg-muted/80'
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
