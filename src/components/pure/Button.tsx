import React from 'react';
import type { ViewStyle, TextStyle } from 'react-native';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import type { ButtonProps } from '../../types/button';
import {
  BUTTON_COLORS,
  BUTTON_VARIANT_STYLES,
  BUTTON_SIZE_STYLES,
} from '../../constants/button';

export type {
  ButtonProps,
  ButtonVariant,
  ButtonSize,
} from '../../types/button';

export const Button = React.forwardRef<
  React.ComponentRef<typeof TouchableOpacity>,
  ButtonProps
>(
  (
    {
      variant = 'primary',
      size = 'md',
      leftIcon,
      rightIcon,
      loading = false,
      disabled = false,
      fullWidth = false,
      text,
      textColor,
      containerStyle,
      textStyle,
      style,
      ...touchableProps
    },
    ref
  ) => {
    const isDisabled = disabled || loading;
    const variantStyle = BUTTON_VARIANT_STYLES[variant];
    const sizeStyle = BUTTON_SIZE_STYLES[size];

    const isTextVariant = variant === 'text';

    const containerStyles: ViewStyle[] = [
      styles.container,
      {
        backgroundColor: isDisabled
          ? BUTTON_COLORS.disabled
          : variantStyle.backgroundColor,
        height: isTextVariant ? undefined : sizeStyle.height,
        paddingHorizontal: isTextVariant ? 0 : sizeStyle.paddingHorizontal,
        borderRadius: sizeStyle.borderRadius,
      },
      variantStyle.borderColor && {
        borderWidth: 1,
        borderColor: variantStyle.borderColor,
      },
      fullWidth && styles.fullWidth,
      isDisabled && styles.disabled,
      isTextVariant && styles.textVariantContainer,
    ].filter(Boolean) as ViewStyle[];

    const textStyles: TextStyle[] = [
      styles.text,
      {
        fontSize: sizeStyle.fontSize,
        color:
          textColor ||
          (isDisabled ? BUTTON_COLORS.disabledText : variantStyle.textColor),
      },
      isTextVariant && styles.underline,
    ].filter(Boolean) as TextStyle[];

    return (
      <TouchableOpacity
        ref={ref}
        style={[containerStyles, containerStyle, style]}
        disabled={isDisabled}
        activeOpacity={0.7}
        {...touchableProps}
      >
        {loading ? (
          <ActivityIndicator
            size="small"
            color={
              variant === 'primary'
                ? BUTTON_COLORS.primaryText
                : variantStyle.textColor
            }
          />
        ) : (
          <View style={styles.content}>
            {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}
            <Text style={[textStyles, textStyle]}>{text}</Text>
            {rightIcon && <View style={styles.iconRight}>{rightIcon}</View>}
          </View>
        )}
      </TouchableOpacity>
    );
  }
);

Button.displayName = 'Button';

export default Button;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '500',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  fullWidth: {
    width: '100%',
  },
  disabled: {
    opacity: 0.5,
  },
  textVariantContainer: {
    alignItems: 'center',
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
});
