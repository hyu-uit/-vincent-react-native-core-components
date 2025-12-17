import { COLORS } from './colors';
import type { ThemeColors } from '../types/theme';

export const getFormNumberInputColors = (colors: ThemeColors) => ({
  label: colors.black,
  required: colors.error,
  error: colors.error,
});

export const FORM_NUMBER_INPUT_COLORS = getFormNumberInputColors(COLORS);
