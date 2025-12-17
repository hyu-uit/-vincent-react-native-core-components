import { COLORS } from './colors';
import type { ThemeColors } from '../types/theme';

export const getFormCheckboxColors = (colors: ThemeColors) => ({
  error: colors.error,
});

export const FORM_CHECKBOX_COLORS = getFormCheckboxColors(COLORS);
