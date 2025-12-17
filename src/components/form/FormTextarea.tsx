import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Controller, type FieldValues } from 'react-hook-form';

import type { FormTextareaProps } from '../../types/formTextarea';
import { FORM_TEXTAREA_COLORS } from '../../constants/formTextarea';

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
  focusBorderColor = FORM_TEXTAREA_COLORS.borderFocused,
  inputProps,
  containerStyle,
  labelStyle,
  textareaStyle,
  inputStyle,
  errorStyle,
}: FormTextareaProps<T>) {
  const [isFocused, setIsFocused] = useState(false);

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
          if (errorMessage) return FORM_TEXTAREA_COLORS.borderError;
          if (isFocused && !disabled) return focusBorderColor;
          return FORM_TEXTAREA_COLORS.border;
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
                <Text style={[styles.label, labelStyle]}>{label}</Text>
                {required && <Text style={styles.required}> *</Text>}
              </View>
            )}
            <View
              style={[
                styles.textarea,
                {
                  height,
                  borderColor: getBorderColor(),
                  backgroundColor: disabled
                    ? FORM_TEXTAREA_COLORS.backgroundDisabled
                    : FORM_TEXTAREA_COLORS.background,
                },
                disabled && styles.disabled,
                textareaStyle,
              ]}
            >
              <TextInput
                placeholder={placeholder}
                placeholderTextColor={FORM_TEXTAREA_COLORS.placeholder}
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
                style={[styles.input, inputStyle]}
              />
            </View>
            {errorMessage && (
              <Text style={[styles.error, errorStyle]}>{errorMessage}</Text>
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
    color: FORM_TEXTAREA_COLORS.label,
  },
  required: {
    fontSize: 14,
    fontWeight: '600',
    color: FORM_TEXTAREA_COLORS.required,
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
    color: FORM_TEXTAREA_COLORS.text,
    textAlignVertical: 'top',
  },
  error: {
    fontSize: 14,
    color: FORM_TEXTAREA_COLORS.error,
  },
});
