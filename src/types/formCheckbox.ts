import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle, TextStyle } from 'react-native';
import type { Control, FieldValues, Path } from 'react-hook-form';

export interface FormCheckboxProps<T extends FieldValues> {
  /** Field name (must match form schema) */
  name: Path<T>;
  /** React Hook Form control object */
  control: Control<T>;
  /** Label text or custom component */
  label?: string | ReactNode;
  /** External error message (overrides form validation error) */
  error?: string;
  /** Show required indicator (*) next to label */
  required?: boolean;
  /** Disable the checkbox */
  disabled?: boolean;
  /** Container style */
  containerStyle?: StyleProp<ViewStyle>;
  /** Error text style */
  errorStyle?: StyleProp<TextStyle>;
  /** Size of the checkbox */
  size?: number;
  /** Custom check icon */
  checkIcon?: ReactNode;
}
