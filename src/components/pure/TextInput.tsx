import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput as RNTextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import type { TextInputProps } from '../../types/textInput';
import { getTextInputColors } from '../../constants/textInput';
import { useThemeColors } from '../../utils/theme';

export type { TextInputProps } from '../../types/textInput';

export const TextInput = React.forwardRef<any, TextInputProps>(
  (
    {
      leftIcon,
      rightIcon,
      suffix,
      onClear,
      showClearButton = true,
      placeholderTextColor,
      error = false,
      disabled = false,
      focusBorderColor,
      value,
      placeholder,
      style,
      onFocus,
      onBlur,
      ...textInputProps
    },
    ref
  ) => {
    const colors = useThemeColors();
    const inputColors = getTextInputColors(colors);
    const [isFocused, setIsFocused] = useState(false);
    const hasValue = value && value.length > 0;
    const shouldShowClearButton = showClearButton && hasValue && !disabled;

    const finalPlaceholderColor =
      placeholderTextColor ?? inputColors.placeholder;
    const finalFocusBorderColor = focusBorderColor ?? inputColors.borderFocused;

    const handleClear = () => {
      onClear?.();
    };

    const getBorderColor = () => {
      if (error) return inputColors.borderError;
      if (isFocused && !disabled) return finalFocusBorderColor;
      return inputColors.border;
    };

    return (
      <View
        style={[
          styles.container,
          {
            borderColor: getBorderColor(),
            backgroundColor: inputColors.background,
          },
          disabled && styles.disabled,
        ]}
      >
        {/* Left Icon */}
        {leftIcon && <View style={styles.leftIconContainer}>{leftIcon}</View>}

        {/* Text Input */}
        <RNTextInput
          ref={ref}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={finalPlaceholderColor}
          selectionColor={colors.primary}
          editable={!disabled}
          {...textInputProps}
          onFocus={(e) => {
            setIsFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          style={[styles.input, { color: inputColors.text }, style]}
        />

        {/* Right Side: Suffix Text or Clear Button */}
        <View style={styles.rightContainer}>
          {suffix && (
            <Text style={[styles.suffix, { color: inputColors.placeholder }]}>
              {suffix}
            </Text>
          )}

          {shouldShowClearButton && (
            <TouchableOpacity
              onPress={handleClear}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              activeOpacity={0.7}
            >
              {rightIcon || (
                <Text
                  style={[styles.clearIcon, { color: inputColors.iconColor }]}
                >
                  ✕
                </Text>
              )}
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
);

TextInput.displayName = 'TextInput';

export default TextInput;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: 20,
  },
  disabled: {
    opacity: 0.5,
  },
  leftIconContainer: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  rightContainer: {
    marginLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  suffix: {
    fontSize: 18,
  },
  clearIcon: {
    fontSize: 16,
  },
});
