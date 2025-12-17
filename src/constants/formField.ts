import { COLORS } from './colors';
import type { ThemeColors } from '../types/theme';

export const getFormFieldColors = (colors: ThemeColors) => ({
  label: colors.black,
  required: colors.error,
  error: colors.error,
});

export const FORM_FIELD_COLORS = getFormFieldColors(COLORS);
