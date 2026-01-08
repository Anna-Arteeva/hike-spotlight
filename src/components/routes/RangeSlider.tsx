import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';
import { useId } from 'react';

interface RangeSliderProps {
  label: string;
  min: number;
  max: number;
  step?: number;
  value: [number | undefined, number | undefined];
  onChange: (value: [number | undefined, number | undefined]) => void;
  formatValue?: (value: number) => string;
  unit?: string;
  className?: string;
}

export function RangeSlider({
  label,
  min,
  max,
  step = 1,
  value,
  onChange,
  formatValue = (v) => String(v),
  unit = '',
  className,
}: RangeSliderProps) {
  const id = useId();
  const currentMin = value[0] ?? min;
  const currentMax = value[1] ?? max;

  const handleChange = (newValues: number[]) => {
    const [newMin, newMax] = newValues;
    onChange([
      newMin === min ? undefined : newMin,
      newMax === max ? undefined : newMax,
    ]);
  };

  return (
    <div className={cn('space-y-3', className)}>
      <div className="flex justify-between items-center">
        <label id={id} className="text-sm font-medium text-foreground">
          {label}
        </label>
        <span className="text-sm text-muted-foreground">
          {formatValue(currentMin)}{unit} – {formatValue(currentMax)}{unit}
        </span>
      </div>
      <Slider
        aria-labelledby={id}
        min={min}
        max={max}
        step={step}
        value={[currentMin, currentMax]}
        onValueChange={handleChange}
        className="w-full"
      />
    </div>
  );
}
