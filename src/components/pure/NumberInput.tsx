import React, { useState } from 'react';
import type { FocusEvent } from 'react-native';
import { StyleSheet, View } from 'react-native';
import CurrencyInput from 'react-native-currency-input';

import type { NumberInputProps } from '../../types/numberInput';
import { getNumberInputColors } from '../../constants/numberInput';
import { useThemeColors } from '../../utils/theme';

export type { NumberInputProps } from '../../types/numberInput';

export const NumberInput = React.forwardRef<any, NumberInputProps>(
  (
    {
      value,
      onChangeValue,
      delimiter = ',',
      separator = '.',
      precision = 0,
      prefix,
      suffix,
      minValue = 0,
      maxValue,
      error = false,
      disabled = false,
      placeholder,
      style,
      onFocus,
      onBlur,
      ...textInputProps
    },
    ref
  ) => {
    const colors = useThemeColors();
    const inputColors = getNumberInputColors(colors);
    const [isFocused, setIsFocused] = useState(false);

    const getBorderColor = () => {
      if (error) return inputColors.borderError;
      if (isFocused && !disabled) return inputColors.borderFocused;
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
        <CurrencyInput
          ref={ref}
          value={value ?? null}
          onChangeValue={onChangeValue}
          delimiter={delimiter}
          separator={separator}
          precision={precision}
          prefix={prefix}
          suffix={suffix}
          minValue={minValue}
          maxValue={maxValue}
          placeholder={placeholder}
          selectionColor={colors.primary}
          editable={!disabled}
          keyboardType="numeric"
          returnKeyType="done"
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
        />
      </View>
    );
  }
);

NumberInput.displayName = 'NumberInput';

export default NumberInput;

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
});
