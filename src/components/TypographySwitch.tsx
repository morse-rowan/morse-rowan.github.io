import { useId } from 'react';
import type { Typography } from '../hooks/useTypographyPreference';

interface TypographySwitchProps {
  label: string;
  value: Typography;
  onChange: (value: Typography) => void;
}

export default function TypographySwitch({ label, value, onChange }: TypographySwitchProps) {
  const name = useId();
  return (
    <fieldset className="typography-switch">
      <legend>{label}</legend>
      <div className="typography-options">
        {(['mono', 'reading'] as const).map((option) => (
          <label key={option}>
            <input type="radio" name={name} value={option} checked={value === option}
              onChange={() => onChange(option)} />
            <span>{option === 'mono' ? 'Mono' : 'Reading'}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
