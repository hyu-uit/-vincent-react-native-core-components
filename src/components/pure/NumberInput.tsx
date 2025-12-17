import React, { useState } from 'react';
import type { FocusEvent } from 'react-native';
import { StyleSheet, View } from 'react-native';
import CurrencyInput from 'react-native-currency-input';

import type { NumberInputProps } from '../../types/numberInput';
import { NUMBER_INPUT_COLORS } from '../../constants/numberInput';

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
      ...textInputProps
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const getBorderColor = () => {
      if (error) return NUMBER_INPUT_COLORS.borderError;
      if (isFocused && !disabled) return NUMBER_INPUT_COLORS.borderFocused;
      return NUMBER_INPUT_COLORS.border;
    };

    return (
      <View
        style={[
          styles.container,
          { borderColor: getBorderColor() },
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
          editable={!disabled}
          onFocus={(e: FocusEvent) => {
            setIsFocused(true);
            textInputProps.onFocus?.(e);
          }}
          onBlur={(e: FocusEvent) => {
            setIsFocused(false);
            textInputProps.onBlur?.(e);
          }}
          keyboardType="numeric"
          returnKeyType="done"
          style={[styles.input, style]}
          {...textInputProps}
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
    backgroundColor: NUMBER_INPUT_COLORS.background,
  },
  disabled: {
    opacity: 0.5,
  },
  input: {
    flex: 1,
    color: NUMBER_INPUT_COLORS.text,
    fontSize: 16,
  },
});
