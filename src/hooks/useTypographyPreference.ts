import { useEffect, useState } from 'react';

export type Typography = 'mono' | 'reading';
export type TypographyScope = 'ui' | 'writeup';

export function useTypographyPreference(scope: TypographyScope) {
  const key = `rowan:typography:${scope}`;
  const [typography, setTypography] = useState<Typography>(() => {
    try {
      const saved = localStorage.getItem(key);
      if (saved === 'mono' || saved === 'reading') return saved;
    } catch {
      // Browsing with storage disabled still supports an in-memory preference.
    }
    return scope === 'ui' ? 'mono' : 'reading';
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, typography);
    } catch {
      // The font switch should remain usable when persistence is unavailable.
    }
  }, [key, typography]);

  return [typography, setTypography] as const;
}
