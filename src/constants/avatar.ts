import { COLORS } from './colors';
import type { ThemeColors } from '../types/theme';

export const getAvatarColors = (colors: ThemeColors) => ({
  placeholder: colors.gray400,
  text: colors.white,
});

export const AVATAR_COLORS = getAvatarColors(COLORS);
