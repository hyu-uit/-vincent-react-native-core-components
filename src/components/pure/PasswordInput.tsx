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
import { PASSWORD_INPUT_COLORS } from '../../constants/passwordInput';

export type { PasswordInputProps } from '../../types/passwordInput';

export const PasswordInput = React.forwardRef<any, PasswordInputProps>(
  (
    {
      placeholderTextColor = PASSWORD_INPUT_COLORS.placeholder,
      error = false,
      disabled = false,
      focusBorderColor = PASSWORD_INPUT_COLORS.borderFocused,
      showIcon,
      hideIcon,
      value,
      placeholder,
      style,
      ...textInputProps
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const getBorderColor = () => {
      if (error) return PASSWORD_INPUT_COLORS.borderError;
      if (isFocused && !disabled) return focusBorderColor;
      return PASSWORD_INPUT_COLORS.border;
    };

    const defaultShowIcon = <Text style={styles.iconText}>Show</Text>;
    const defaultHideIcon = <Text style={styles.iconText}>Hide</Text>;

    return (
      <View
        style={[
          styles.container,
          { borderColor: getBorderColor() },
          disabled && styles.disabled,
        ]}
      >
        <TextInput
          ref={ref}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          editable={!disabled}
          onFocus={(e: FocusEvent) => {
            setIsFocused(true);
            textInputProps.onFocus?.(e);
          }}
          onBlur={(e: FocusEvent) => {
            setIsFocused(false);
            textInputProps.onBlur?.(e);
          }}
          style={[styles.input, style]}
          secureTextEntry={secureTextEntry}
          {...textInputProps}
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
    backgroundColor: PASSWORD_INPUT_COLORS.background,
  },
  disabled: {
    opacity: 0.5,
  },
  input: {
    flex: 1,
    color: PASSWORD_INPUT_COLORS.text,
    fontSize: 16,
  },
  iconButton: {
    padding: 4,
  },
  iconText: {
    fontSize: 12,
    color: PASSWORD_INPUT_COLORS.icon,
  },
});
