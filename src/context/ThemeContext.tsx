import { createContext, useContext } from 'react';

import { COLORS } from '../constants/colors';
import type { Theme, ThemeColors } from '../types/theme';

const defaultTheme: Theme = {
  colors: COLORS,
};

export const ThemeContext = createContext<Theme>(defaultTheme);

export const useTheme = (): Theme => {
  return useContext(ThemeContext);
};

export const useColors = (): ThemeColors => {
  const theme = useTheme();
  return theme.colors;
};
