import { COLORS } from './colors';
import type { ThemeColors } from '../types/theme';

export const getRefreshControlColors = (colors: ThemeColors) => ({
  tint: colors.primary,
  android: [colors.primary],
});

export const REFRESH_CONTROL_COLORS = getRefreshControlColors(COLORS);
