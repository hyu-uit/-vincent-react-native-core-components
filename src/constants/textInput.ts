import { COLORS } from './colors';
import type { ThemeColors } from '../types/theme';

export const getTextInputColors = (colors: ThemeColors) => ({
  background: colors.white,
  text: colors.black,
  placeholder: colors.gray400,
  border: colors.gray300,
  borderFocused: colors.primary,
  borderError: colors.danger,
  iconColor: colors.gray400,
});

// Default export for backward compatibility
export const TEXT_INPUT_COLORS = getTextInputColors(COLORS);
