import { COLORS } from './colors';
import type { ThemeColors } from '../types/theme';

export const getFormPasswordFieldColors = (colors: ThemeColors) => ({
  label: colors.black,
  required: colors.error,
  error: colors.error,
});

export const FORM_PASSWORD_FIELD_COLORS = getFormPasswordFieldColors(COLORS);
