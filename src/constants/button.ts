import { COLORS } from './colors';
import type { ButtonVariant, ButtonSize } from '../types/button';

export const BUTTON_COLORS = {
  primary: COLORS.primary,
  primaryText: COLORS.white,
  secondary: COLORS.gray100,
  secondaryText: COLORS.black,
  outline: COLORS.transparent,
  outlineBorder: COLORS.gray200,
  outlineText: COLORS.black,
  ghost: COLORS.transparent,
  ghostText: COLORS.black,
  textVariant: COLORS.transparent,
  textVariantText: COLORS.black,
  danger: COLORS.dangerLight,
  dangerText: COLORS.danger,
  disabled: COLORS.disabled,
  disabledText: COLORS.disabledText,
};

export const BUTTON_VARIANT_STYLES: Record<
  ButtonVariant,
  { backgroundColor: string; textColor: string; borderColor?: string }
> = {
  primary: {
    backgroundColor: BUTTON_COLORS.primary,
    textColor: BUTTON_COLORS.primaryText,
  },
  secondary: {
    backgroundColor: BUTTON_COLORS.secondary,
    textColor: BUTTON_COLORS.secondaryText,
  },
  outline: {
    backgroundColor: BUTTON_COLORS.outline,
    textColor: BUTTON_COLORS.outlineText,
    borderColor: BUTTON_COLORS.outlineBorder,
  },
  ghost: {
    backgroundColor: BUTTON_COLORS.ghost,
    textColor: BUTTON_COLORS.ghostText,
  },
  text: {
    backgroundColor: BUTTON_COLORS.textVariant,
    textColor: BUTTON_COLORS.textVariantText,
  },
  danger: {
    backgroundColor: BUTTON_COLORS.danger,
    textColor: BUTTON_COLORS.dangerText,
  },
};

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
