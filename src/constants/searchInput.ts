import { COLORS } from './colors';
import type { ThemeColors } from '../types/theme';

export const getSearchInputColors = (colors: ThemeColors) => ({
  icon: colors.gray400,
});

export const SEARCH_INPUT_COLORS = getSearchInputColors(COLORS);
