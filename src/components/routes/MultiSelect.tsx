import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface MultiSelectProps<T extends string> {
  label: string;
  options: T[];
  selected: T[];
  onChange: (selected: T[]) => void;
  className?: string;
}

export function MultiSelect<T extends string>({
  label,
  options,
  selected,
  onChange,
  className,
}: MultiSelectProps<T>) {
  const toggleOption = (option: T) => {
    if (selected.includes(option)) {
      onChange(selected.filter(s => s !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  return (
    <div className={cn('space-y-2', className)}>
      <label className="text-sm font-medium text-foreground">{label}</label>
      <div className="flex flex-wrap gap-2" role="group" aria-label={label}>
        {options.map((option) => {
          const isSelected = selected.includes(option);
          return (
            <button
              key={option}
              type="button"
              onClick={() => toggleOption(option)}
              aria-pressed={isSelected}
              className={cn(
                'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm border transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                isSelected
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-muted text-muted-foreground border-border hover:bg-muted/80'
              )}
            >
              {isSelected && <Check className="h-3.5 w-3.5" />}
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
