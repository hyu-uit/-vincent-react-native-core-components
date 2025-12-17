import { COLORS } from './colors';
import type { ThemeColors } from '../types/theme';

export const getTabsColors = (colors: ThemeColors) => ({
  background: colors.gray100,
  tabBackground: colors.transparent,
  selectedTabBackground: colors.white,
  text: colors.gray400,
  selectedText: colors.black,
});

export const TABS_COLORS = getTabsColors(COLORS);
