import { StyleSheet, Text, View } from 'react-native';
import { Controller, type FieldValues } from 'react-hook-form';

import type { FormPasswordFieldProps } from '../../types/formPasswordField';
import { getFormPasswordFieldColors } from '../../constants/formPasswordField';
import { useThemeColors } from '../../utils/theme';
import PasswordInput from '../pure/PasswordInput';

export type {
  FormPasswordFieldProps,
  FormPasswordFieldRenderProps,
} from '../../types/formPasswordField';

export function FormPasswordField<T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  error,
  required,
  disabled,
  inputProps,
  renderInput,
  showIcon,
  hideIcon,
  containerStyle,
  labelStyle,
  errorStyle,
}: FormPasswordFieldProps<T>) {
  const colors = useThemeColors();

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error: fieldError },
      }) => {
        const fieldColors = getFormPasswordFieldColors(colors);
        const errorMessage = error || fieldError?.message;

        if (renderInput) {
          return renderInput({
            value: value || '',
            onChange,
            onBlur,
            error: errorMessage,
          });
        }

        return (
          <View style={[styles.container, containerStyle]}>
            {label && (
              <Text
                style={[styles.label, { color: fieldColors.label }, labelStyle]}
              >
                {label}
                {required && (
                  <Text
                    style={[styles.required, { color: fieldColors.required }]}
                  >
                    {' '}
                    *
                  </Text>
                )}
              </Text>
            )}
            <PasswordInput
              value={value || ''}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              disabled={disabled}
              error={!!errorMessage}
              showIcon={showIcon}
              hideIcon={hideIcon}
              {...inputProps}
            />
            {errorMessage && (
              <Text
                style={[styles.error, { color: fieldColors.error }, errorStyle]}
              >
                {errorMessage}
              </Text>
            )}
          </View>
        );
      }}
    />
  );
}

FormPasswordField.displayName = 'FormPasswordField';

export default FormPasswordField;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
    fontSize: 14,
    fontWeight: '500',
  },
  required: {},
  error: {
    marginTop: 4,
    fontSize: 12,
  },
});
