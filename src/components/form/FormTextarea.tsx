import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Controller, type FieldValues } from 'react-hook-form';

import type { FormTextareaProps } from '../../types/formTextarea';
import { getFormTextareaColors } from '../../constants/formTextarea';
import { useThemeColors } from '../../utils/theme';

export type { FormTextareaProps } from '../../types/formTextarea';

export function FormTextarea<T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  error,
  required,
  disabled,
  height = 140,
  maxLength,
  focusBorderColor,
  inputProps,
  containerStyle,
  labelStyle,
  textareaStyle,
  inputStyle,
  errorStyle,
}: FormTextareaProps<T>) {
  const colors = useThemeColors();
  const textareaColors = getFormTextareaColors(colors);
  const [isFocused, setIsFocused] = useState(false);
  const finalFocusBorderColor =
    focusBorderColor ?? textareaColors.borderFocused;

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error: fieldError },
      }) => {
        const errorMessage = error || fieldError?.message;

        const getBorderColor = () => {
          if (errorMessage) return textareaColors.borderError;
          if (isFocused && !disabled) return finalFocusBorderColor;
          return textareaColors.border;
        };

        const {
          onFocus: inputOnFocus,
          onBlur: inputOnBlur,
          ...restInputProps
        } = inputProps || {};

        return (
          <View style={[styles.container, containerStyle]}>
            {label && (
              <View style={styles.labelContainer}>
                <Text
                  style={[
                    styles.label,
                    { color: textareaColors.label },
                    labelStyle,
                  ]}
                >
                  {label}
                </Text>
                {required && (
                  <Text
                    style={[
                      styles.required,
                      { color: textareaColors.required },
                    ]}
                  >
                    {' '}
                    *
                  </Text>
                )}
              </View>
            )}
            <View
              style={[
                styles.textarea,
                {
                  height,
                  borderColor: getBorderColor(),
                  backgroundColor: disabled
                    ? textareaColors.backgroundDisabled
                    : textareaColors.background,
                },
                disabled && styles.disabled,
                textareaStyle,
              ]}
            >
              <TextInput
                placeholder={placeholder}
                placeholderTextColor={textareaColors.placeholder}
                selectionColor={colors.primary}
                value={value || ''}
                onChangeText={onChange}
                multiline
                editable={!disabled}
                maxLength={maxLength}
                {...restInputProps}
                onFocus={(e) => {
                  setIsFocused(true);
                  inputOnFocus?.(e);
                }}
                onBlur={(e) => {
                  setIsFocused(false);
                  onBlur();
                  inputOnBlur?.(e);
                }}
                style={[
                  styles.input,
                  { color: textareaColors.text },
                  inputStyle,
                ]}
              />
            </View>
            {errorMessage && (
              <Text
                style={[
                  styles.error,
                  { color: textareaColors.error },
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

FormTextarea.displayName = 'FormTextarea';

export default FormTextarea;

const styles = StyleSheet.create({
  container: {
    gap: 4,
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
  textarea: {
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  disabled: {
    opacity: 0.5,
  },
  input: {
    flex: 1,
    fontSize: 15,
    textAlignVertical: 'top',
  },
  error: {
    fontSize: 14,
  },
});
