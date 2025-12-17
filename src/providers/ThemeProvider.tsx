import type { ReactNode } from 'react';

import { ThemeContext } from '../context/ThemeContext';
import { COLORS } from '../constants/colors';
import type { Theme, ThemeColors } from '../types/theme';

export interface ThemeProviderProps {
  /** Custom color overrides */
  colors?: Partial<ThemeColors>;
  /** Child components */
  children: ReactNode;
}

export function ThemeProvider({ colors, children }: ThemeProviderProps) {
  const theme: Theme = {
    colors: {
      ...COLORS,
      ...colors,
    },
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
