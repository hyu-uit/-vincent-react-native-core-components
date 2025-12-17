import { StyleSheet, Text, View } from 'react-native';
import { Controller, type FieldValues } from 'react-hook-form';

import type { FormFieldProps } from '../../types/formField';
import { FORM_FIELD_COLORS } from '../../constants/formField';
import TextInput from '../pure/TextInput';

export type {
  FormFieldProps,
  FormFieldRenderProps,
} from '../../types/formField';

export function FormField<T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  error,
  required,
  disabled,
  inputProps,
  renderInput,
  containerStyle,
  labelStyle,
  errorStyle,
}: FormFieldProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error: fieldError },
      }) => {
        const errorMessage = error || fieldError?.message;

        if (renderInput) {
          return renderInput({
            value: value || '',
            onChange,
            onBlur,
            error: errorMessage,
          });
        }

        const handleClear = () => {
          onChange('');
        };

        return (
          <View style={[styles.container, containerStyle]}>
            {label && (
              <Text style={[styles.label, labelStyle]}>
                {label}
                {required && <Text style={styles.required}> *</Text>}
              </Text>
            )}
            <TextInput
              value={value || ''}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              onClear={handleClear}
              error={!!errorMessage}
              disabled={disabled}
              autoCapitalize="none"
              {...inputProps}
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

FormField.displayName = 'FormField';

export default FormField;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
    fontSize: 14,
    fontWeight: '500',
    color: FORM_FIELD_COLORS.label,
  },
  required: {
    color: FORM_FIELD_COLORS.required,
  },
  error: {
    marginTop: 4,
    fontSize: 12,
    color: FORM_FIELD_COLORS.error,
  },
});
