import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput as RNTextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import type { TextInputProps } from '../../types/textInput';
import { TEXT_INPUT_COLORS } from '../../constants/textInput';

export type { TextInputProps } from '../../types/textInput';

export const TextInput = React.forwardRef<any, TextInputProps>(
  (
    {
      leftIcon,
      rightIcon,
      suffix,
      onClear,
      showClearButton = true,
      placeholderTextColor = TEXT_INPUT_COLORS.placeholder,
      error = false,
      disabled = false,
      focusBorderColor = TEXT_INPUT_COLORS.borderFocused,
      value,
      placeholder,
      style,
      ...textInputProps
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const hasValue = value && value.length > 0;
    const shouldShowClearButton = showClearButton && hasValue && !disabled;

    const handleClear = () => {
      onClear?.();
    };

    const getBorderColor = () => {
      if (error) return TEXT_INPUT_COLORS.borderError;
      if (isFocused && !disabled) return focusBorderColor;
      return TEXT_INPUT_COLORS.border;
    };

    // Default clear icon as text fallback
    const defaultClearIcon = <Text style={styles.clearIcon}>✕</Text>;

    return (
      <View
        style={[
          styles.container,
          { borderColor: getBorderColor() },
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
          placeholderTextColor={placeholderTextColor}
          editable={!disabled}
          onFocus={(e) => {
            setIsFocused(true);
            textInputProps.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            textInputProps.onBlur?.(e);
          }}
          style={[styles.input, style]}
          {...textInputProps}
        />

        {/* Right Side: Suffix Text or Clear Button */}
        <View style={styles.rightContainer}>
          {suffix && <Text style={styles.suffix}>{suffix}</Text>}

          {shouldShowClearButton && (
            <TouchableOpacity
              onPress={handleClear}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              activeOpacity={0.7}
            >
              {rightIcon || defaultClearIcon}
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
    backgroundColor: TEXT_INPUT_COLORS.background,
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
    color: TEXT_INPUT_COLORS.text,
  },
  rightContainer: {
    marginLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  suffix: {
    fontSize: 18,
    color: TEXT_INPUT_COLORS.placeholder,
  },
  clearIcon: {
    fontSize: 16,
    color: TEXT_INPUT_COLORS.iconColor,
  },
});
