import React, { useState } from 'react';
import type { FocusEvent } from 'react-native';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import type { PasswordInputProps } from '../../types/passwordInput';
import { getPasswordInputColors } from '../../constants/passwordInput';
import { useThemeColors } from '../../utils/theme';

export type { PasswordInputProps } from '../../types/passwordInput';

export const PasswordInput = React.forwardRef<any, PasswordInputProps>(
  (
    {
      placeholderTextColor,
      error = false,
      disabled = false,
      focusBorderColor,
      showIcon,
      hideIcon,
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
    const inputColors = getPasswordInputColors(colors);
    const [isFocused, setIsFocused] = useState(false);
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const finalPlaceholderColor =
      placeholderTextColor ?? inputColors.placeholder;
    const finalFocusBorderColor = focusBorderColor ?? inputColors.borderFocused;

    const getBorderColor = () => {
      if (error) return inputColors.borderError;
      if (isFocused && !disabled) return finalFocusBorderColor;
      return inputColors.border;
    };

    const defaultShowIcon = (
      <Text style={[styles.iconText, { color: inputColors.icon }]}>Show</Text>
    );
    const defaultHideIcon = (
      <Text style={[styles.iconText, { color: inputColors.icon }]}>Hide</Text>
    );

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
        <TextInput
          ref={ref}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={finalPlaceholderColor}
          editable={!disabled}
          {...textInputProps}
          onFocus={(e: FocusEvent) => {
            setIsFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e: FocusEvent) => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          style={[styles.input, { color: inputColors.text }, style]}
          secureTextEntry={secureTextEntry}
        />

        <TouchableOpacity
          onPress={() => setSecureTextEntry(!secureTextEntry)}
          style={styles.iconButton}
        >
          {secureTextEntry
            ? showIcon || defaultShowIcon
            : hideIcon || defaultHideIcon}
        </TouchableOpacity>
      </View>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;

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
  input: {
    flex: 1,
    fontSize: 16,
  },
  iconButton: {
    padding: 4,
  },
  iconText: {
    fontSize: 12,
  },
});
