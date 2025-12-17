import type { StyleProp, ViewStyle, TextStyle } from 'react-native';
import type { Control, FieldValues, Path } from 'react-hook-form';

export interface FormNumberInputProps<T extends FieldValues> {
  /** Field name (must match form schema) */
  name: Path<T>;
  /** React Hook Form control object */
  control: Control<T>;
  /** Label text above the input */
  label?: string;
  /** Placeholder text for the input */
  placeholder?: string;
  /** External error message (overrides form validation error) */
  error?: string;
  /** Show required indicator (*) next to label */
  required?: boolean;
  /** Disable the input */
  disabled?: boolean;
  /** Character used as thousands delimiter (default: ",") */
  delimiter?: string;
  /** Character used as decimal separator (default: ".") */
  separator?: string;
  /** Number of decimal places (default: 0) */
  precision?: number;
  /** Prefix text (e.g., "$") */
  prefix?: string;
  /** Suffix text (e.g., "kg") */
  suffix?: string;
  /** Minimum allowed value */
  minValue?: number;
  /** Maximum allowed value */
  maxValue?: number;
  /** Container style */
  containerStyle?: StyleProp<ViewStyle>;
  /** Label text style */
  labelStyle?: StyleProp<TextStyle>;
  /** Error text style */
  errorStyle?: StyleProp<TextStyle>;
}
