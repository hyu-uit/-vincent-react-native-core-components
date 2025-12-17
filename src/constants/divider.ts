import { COLORS } from './colors';
import type { ThemeColors } from '../types/theme';

export const getDividerColors = (colors: ThemeColors) => ({
  background: colors.gray200,
});

export const DIVIDER_COLORS = getDividerColors(COLORS);

export const DIVIDER_DEFAULT_SIZE = {
  horizontal: {
    height: 1,
  },
  vertical: {
    width: 1,
  },
};
