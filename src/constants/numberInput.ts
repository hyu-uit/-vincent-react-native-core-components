import { COLORS } from './colors';
import type { ThemeColors } from '../types/theme';

export const getNumberInputColors = (colors: ThemeColors) => ({
  background: colors.white,
  text: colors.black,
  border: colors.gray300,
  borderFocused: colors.primary,
  borderError: colors.danger,
});

export const NUMBER_INPUT_COLORS = getNumberInputColors(COLORS);
