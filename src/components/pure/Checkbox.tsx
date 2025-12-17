import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import type { CheckboxProps } from '../../types/checkbox';
import { getCheckboxColors } from '../../constants/checkbox';
import { useThemeColors } from '../../utils/theme';

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
    const colors = useThemeColors();
    const checkboxColors = getCheckboxColors(colors);

    const borderColor = error
      ? checkboxColors.borderError
      : checked
      ? checkboxColors.borderChecked
      : checkboxColors.border;

    const backgroundColor = checked
      ? checkboxColors.checked
      : checkboxColors.unchecked;

    const defaultCheckIcon = (
      <Text
        style={[
          styles.checkmark,
          { fontSize: size * 0.7, color: checkboxColors.checkmark },
        ]}
      >
        ✓
      </Text>
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
            <Text style={[styles.label, { color: checkboxColors.labelText }]}>
              {label}
            </Text>
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
    fontWeight: 'bold',
  },
  label: {
    fontSize: 12,
    lineHeight: 16,
  },
});
