import { COLORS } from './colors';
import type { ThemeColors } from '../types/theme';

export const getLoadingColors = (colors: ThemeColors) => ({
  indicator: colors.primary,
});

export const LOADING_COLORS = getLoadingColors(COLORS);
