import { StyleSheet, Text, View } from 'react-native';
import { Controller, type FieldValues } from 'react-hook-form';

import type { FormCheckboxProps } from '../../types/formCheckbox';
import { FORM_CHECKBOX_COLORS } from '../../constants/formCheckbox';
import Checkbox from '../pure/Checkbox';

export type { FormCheckboxProps } from '../../types/formCheckbox';

export function FormCheckbox<T extends FieldValues>({
  name,
  control,
  label,
  error,
  disabled,
  containerStyle,
  errorStyle,
  size,
  checkIcon,
}: FormCheckboxProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, value },
        fieldState: { error: fieldError },
      }) => {
        const errorMessage = error || fieldError?.message;

        return (
          <View style={[styles.container, containerStyle]}>
            <Checkbox
              checked={value || false}
              onPress={() => onChange(!value)}
              label={label}
              disabled={disabled}
              error={!!errorMessage}
              size={size}
              checkIcon={checkIcon}
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

FormCheckbox.displayName = 'FormCheckbox';

export default FormCheckbox;

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  error: {
    marginTop: 4,
    fontSize: 12,
    color: FORM_CHECKBOX_COLORS.error,
  },
});
