import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import type { CheckboxProps } from '../../types/checkbox';
import { CHECKBOX_COLORS } from '../../constants/checkbox';

export type { CheckboxProps } from '../../types/checkbox';

export const Checkbox = React.forwardRef<
  React.ComponentRef<typeof TouchableOpacity>,
  CheckboxProps
>(
  (
    {
      checked,
      onPress,
      label,
      checkIcon,
      disabled = false,
      error = false,
      size = 20,
    },
    ref
  ) => {
    const borderColor = error
      ? CHECKBOX_COLORS.borderError
      : checked
      ? CHECKBOX_COLORS.borderChecked
      : CHECKBOX_COLORS.border;

    const backgroundColor = checked
      ? CHECKBOX_COLORS.checked
      : CHECKBOX_COLORS.unchecked;

    const defaultCheckIcon = (
      <Text style={[styles.checkmark, { fontSize: size * 0.7 }]}>✓</Text>
    );

    return (
      <TouchableOpacity
        ref={ref}
        onPress={onPress}
        disabled={disabled}
        activeOpacity={0.7}
        style={[styles.container, disabled && styles.disabled]}
      >
        <View
          style={[
            styles.checkbox,
            {
              width: size,
              height: size,
              borderColor,
              backgroundColor,
            },
          ]}
        >
          {checked && (checkIcon || defaultCheckIcon)}
        </View>
        {label &&
          (typeof label === 'string' ? (
            <Text style={styles.label}>{label}</Text>
          ) : (
            <View>{label}</View>
          ))}
      </TouchableOpacity>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  disabled: {
    opacity: 0.5,
  },
  checkbox: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 4,
  },
  checkmark: {
    color: CHECKBOX_COLORS.checkmark,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 12,
    lineHeight: 16,
    color: CHECKBOX_COLORS.labelText,
  },
});
