import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

interface DependentSelectProps {
  countryValue: string | undefined;
  regionValue: string | undefined;
  countries: string[];
  regions: string[];
  onCountryChange: (country: string | undefined) => void;
  onRegionChange: (region: string | undefined) => void;
  className?: string;
}

export function DependentSelect({
  countryValue,
  regionValue,
  countries,
  regions,
  onCountryChange,
  onRegionChange,
  className,
}: DependentSelectProps) {
  const handleCountryChange = (value: string) => {
    if (value === '__all__') {
      onCountryChange(undefined);
      onRegionChange(undefined);
    } else {
      onCountryChange(value);
      onRegionChange(undefined);
    }
  };

  const handleRegionChange = (value: string) => {
    if (value === '__all__') {
      onRegionChange(undefined);
    } else {
      onRegionChange(value);
    }
  };

  return (
    <div className={cn('grid grid-cols-1 sm:grid-cols-2 gap-4', className)}>
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Country</label>
        <Select
          value={countryValue || '__all__'}
          onValueChange={handleCountryChange}
        >
          <SelectTrigger aria-label="Select country">
            <SelectValue placeholder="All countries" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="__all__">All countries</SelectItem>
            {countries.map((country) => (
              <SelectItem key={country} value={country}>
                {country}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Region</label>
        <Select
          value={regionValue || '__all__'}
          onValueChange={handleRegionChange}
          disabled={!countryValue}
        >
          <SelectTrigger aria-label="Select region">
            <SelectValue placeholder={countryValue ? 'All regions' : 'Select a country first'} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="__all__">All regions</SelectItem>
            {regions.map((region) => (
              <SelectItem key={region} value={region}>
                {region}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
