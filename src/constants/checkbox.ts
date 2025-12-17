import { COLORS } from './colors';
import type { ThemeColors } from '../types/theme';

export const getCheckboxColors = (colors: ThemeColors) => ({
  checked: colors.primary,
  unchecked: colors.transparent,
  border: colors.gray300,
  borderChecked: colors.primary,
  borderError: colors.danger,
  checkmark: colors.white,
  labelText: colors.gray400,
});

export const CHECKBOX_COLORS = getCheckboxColors(COLORS);
