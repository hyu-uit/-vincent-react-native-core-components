import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Controller, type FieldValues } from 'react-hook-form';

import type { FormSelectProps } from '../../types/formSelect';
import { getFormSelectColors } from '../../constants/formSelect';
import { useThemeColors } from '../../utils/theme';

export type { FormSelectProps } from '../../types/formSelect';

export function FormSelect<T extends FieldValues>({
  name,
  control,
  label,
  placeholder = 'Select',
  error,
  required,
  disabled,
  onPress,
  displayValue,
  rightIcon,
  containerStyle,
  labelStyle,
  selectStyle,
  selectTextStyle,
  errorStyle,
}: FormSelectProps<T>) {
  const colors = useThemeColors();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value }, fieldState: { error: fieldError } }) => {
        const selectColors = getFormSelectColors(colors);
        const errorMessage = error || fieldError?.message;
        const hasValue = value && value.length > 0;
        const displayText = displayValue || value;

        return (
          <View style={[styles.container, containerStyle]}>
            {label && (
              <View style={styles.labelContainer}>
                <Text
                  style={[
                    styles.label,
                    { color: selectColors.label },
                    labelStyle,
                  ]}
                >
                  {label}
                </Text>
                {required && (
                  <Text
                    style={[styles.required, { color: selectColors.required }]}
                  >
                    {' '}
                    *
                  </Text>
                )}
              </View>
            )}
            <TouchableOpacity
              onPress={onPress}
              activeOpacity={0.7}
              disabled={disabled}
              style={[
                styles.select,
                {
                  borderColor: errorMessage
                    ? selectColors.borderError
                    : selectColors.border,
                  backgroundColor: disabled
                    ? selectColors.backgroundDisabled
                    : selectColors.background,
                },
                disabled && styles.disabled,
                selectStyle,
              ]}
            >
              <Text
                style={[
                  styles.selectText,
                  {
                    color: hasValue
                      ? selectColors.text
                      : selectColors.placeholder,
                  },
                  selectTextStyle,
                ]}
              >
                {hasValue ? displayText : placeholder}
              </Text>
              {rightIcon || (
                <Text style={[styles.icon, { color: selectColors.icon }]}>
                  ▼
                </Text>
              )}
            </TouchableOpacity>
            {errorMessage && (
              <Text
                style={[
                  styles.error,
                  { color: selectColors.error },
                  errorStyle,
                ]}
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

FormSelect.displayName = 'FormSelect';

export default FormSelect;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    gap: 8,
    width: '100%',
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
  },
  required: {
    fontSize: 14,
    fontWeight: '600',
  },
  select: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 12,
    height: 44,
  },
  disabled: {
    opacity: 0.5,
  },
  selectText: {
    fontSize: 15,
    flex: 1,
  },
  icon: {
    fontSize: 12,
  },
  error: {
    fontSize: 14,
  },
});
