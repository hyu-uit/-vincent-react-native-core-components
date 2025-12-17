import { COLORS } from './colors';
import type { ThemeColors } from '../types/theme';

export const getPasswordInputColors = (colors: ThemeColors) => ({
  background: colors.white,
  text: colors.black,
  placeholder: colors.gray400,
  border: colors.gray300,
  borderFocused: colors.primary,
  borderError: colors.danger,
  icon: colors.gray400,
});

export const PASSWORD_INPUT_COLORS = getPasswordInputColors(COLORS);
