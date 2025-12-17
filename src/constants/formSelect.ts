import { COLORS } from './colors';
import type { ThemeColors } from '../types/theme';

export const getFormSelectColors = (colors: ThemeColors) => ({
  label: colors.black,
  required: colors.error,
  error: colors.error,
  border: colors.gray200,
  borderError: colors.error,
  background: colors.white,
  backgroundDisabled: colors.gray100,
  text: colors.black,
  placeholder: colors.gray400,
  icon: colors.gray400,
});

export const FORM_SELECT_COLORS = getFormSelectColors(COLORS);
