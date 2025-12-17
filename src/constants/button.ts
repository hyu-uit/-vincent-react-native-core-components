import { COLORS } from './colors';
import type { ButtonVariant, ButtonSize } from '../types/button';
import type { ThemeColors } from '../types/theme';

export const getButtonColors = (colors: ThemeColors) => ({
  primary: colors.primary,
  primaryText: colors.white,
  secondary: colors.gray100,
  secondaryText: colors.black,
  outline: colors.transparent,
  outlineBorder: colors.gray200,
  outlineText: colors.black,
  ghost: colors.transparent,
  ghostText: colors.black,
  textVariant: colors.transparent,
  textVariantText: colors.black,
  danger: colors.dangerLight,
  dangerText: colors.danger,
  disabled: colors.disabled,
  disabledText: colors.disabledText,
});

// Default export for backward compatibility
export const BUTTON_COLORS = getButtonColors(COLORS);

export const getButtonVariantStyles = (
  colors: ThemeColors
): Record<
  ButtonVariant,
  { backgroundColor: string; textColor: string; borderColor?: string }
> => {
  const buttonColors = getButtonColors(colors);
  return {
    primary: {
      backgroundColor: buttonColors.primary,
      textColor: buttonColors.primaryText,
    },
    secondary: {
      backgroundColor: buttonColors.secondary,
      textColor: buttonColors.secondaryText,
    },
    outline: {
      backgroundColor: buttonColors.outline,
      textColor: buttonColors.outlineText,
      borderColor: buttonColors.outlineBorder,
    },
    ghost: {
      backgroundColor: buttonColors.ghost,
      textColor: buttonColors.ghostText,
    },
    text: {
      backgroundColor: buttonColors.textVariant,
      textColor: buttonColors.textVariantText,
    },
    danger: {
      backgroundColor: buttonColors.danger,
      textColor: buttonColors.dangerText,
    },
  };
};

// Default export for backward compatibility
export const BUTTON_VARIANT_STYLES = getButtonVariantStyles(COLORS);

export const BUTTON_SIZE_STYLES: Record<
  ButtonSize,
  {
    height: number;
    paddingHorizontal: number;
    fontSize: number;
    borderRadius: number;
  }
> = {
  sm: {
    height: 40,
    paddingHorizontal: 16,
    fontSize: 14,
    borderRadius: 12,
  },
  md: {
    height: 50,
    paddingHorizontal: 24,
    fontSize: 16,
    borderRadius: 16,
  },
  lg: {
    height: 60,
    paddingHorizontal: 32,
    fontSize: 18,
    borderRadius: 16,
  },
};
