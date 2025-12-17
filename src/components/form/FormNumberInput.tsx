import { StyleSheet, Text, View } from 'react-native';
import { Controller, type FieldValues } from 'react-hook-form';

import type { FormNumberInputProps } from '../../types/formNumberInput';
import { FORM_NUMBER_INPUT_COLORS } from '../../constants/formNumberInput';
import NumberInput from '../pure/NumberInput';

export type { FormNumberInputProps } from '../../types/formNumberInput';

export function FormNumberInput<T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  error,
  required,
  disabled,
  delimiter = ',',
  separator = '.',
  precision = 0,
  prefix,
  suffix,
  minValue = 0,
  maxValue,
  containerStyle,
  labelStyle,
  errorStyle,
}: FormNumberInputProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error: fieldError },
      }) => {
        const errorMessage = error || fieldError?.message;

        const handleChangeValue = (numValue: number | null) => {
          if (numValue === null) {
            onChange('');
          } else {
            onChange(String(numValue));
          }
        };

        const numericValue =
          !value || value === ''
            ? null
            : isNaN(Number(value))
            ? null
            : Number(value);

        return (
          <View style={[styles.container, containerStyle]}>
            {label && (
              <View style={styles.labelContainer}>
                <Text style={[styles.label, labelStyle]}>{label}</Text>
                {required && <Text style={styles.required}> *</Text>}
              </View>
            )}
            <NumberInput
              value={numericValue}
              onChangeValue={handleChangeValue}
              delimiter={delimiter}
              separator={separator}
              precision={precision}
              prefix={prefix}
              suffix={suffix}
              minValue={minValue}
              maxValue={maxValue}
              placeholder={placeholder}
              error={!!errorMessage}
              disabled={disabled}
              onBlur={onBlur}
            />
            {errorMessage && (
              <Text style={[styles.error, errorStyle]}>{errorMessage}</Text>
            )}
          </View>
        );
      }}
    />
  );
}

FormNumberInput.displayName = 'FormNumberInput';

export default FormNumberInput;

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: FORM_NUMBER_INPUT_COLORS.label,
  },
  required: {
    fontSize: 14,
    fontWeight: '600',
    color: FORM_NUMBER_INPUT_COLORS.required,
  },
  error: {
    fontSize: 14,
    color: FORM_NUMBER_INPUT_COLORS.error,
  },
});
