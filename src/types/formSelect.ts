import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle, TextStyle } from 'react-native';
import type { Control, FieldValues, Path } from 'react-hook-form';

export interface FormSelectProps<T extends FieldValues> {
  /** Field name (must match form schema) */
  name: Path<T>;
  /** React Hook Form control object */
  control: Control<T>;
  /** Label text above the select */
  label?: string;
  /** Placeholder text when no value selected */
  placeholder?: string;
  /** External error message (overrides form validation error) */
  error?: string;
  /** Show required indicator (*) next to label */
  required?: boolean;
  /** Disable the select */
  disabled?: boolean;
  /** Callback when select is pressed (to open picker/modal) */
  onPress: () => void;
  /** Display value (formatted text to show instead of raw value) */
  displayValue?: string;
  /** Custom right icon (default: "▼") */
  rightIcon?: ReactNode;
  /** Container style */
  containerStyle?: StyleProp<ViewStyle>;
  /** Label text style */
  labelStyle?: StyleProp<TextStyle>;
  /** Select button style */
  selectStyle?: StyleProp<ViewStyle>;
  /** Select text style */
  selectTextStyle?: StyleProp<TextStyle>;
  /** Error text style */
  errorStyle?: StyleProp<TextStyle>;
}
