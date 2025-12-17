import type { ReactElement, ReactNode } from 'react';
import type { StyleProp, ViewStyle, TextStyle } from 'react-native';
import type { Control, FieldValues, Path } from 'react-hook-form';
import type { PasswordInputProps } from './passwordInput';

export interface FormPasswordFieldRenderProps {
  /** Current field value */
  value: string;
  /** Callback to update value */
  onChange: (value: string) => void;
  /** Callback when field loses focus */
  onBlur: () => void;
  /** Error message if validation failed */
  error?: string;
}

export interface FormPasswordFieldProps<T extends FieldValues> {
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
  /** Additional props passed to PasswordInput */
  inputProps?: Partial<PasswordInputProps>;
  /** Custom render function for the input */
  renderInput?: (props: FormPasswordFieldRenderProps) => ReactElement;
  /** Custom show password icon */
  showIcon?: ReactNode;
  /** Custom hide password icon */
  hideIcon?: ReactNode;
  /** Container style */
  containerStyle?: StyleProp<ViewStyle>;
  /** Label text style */
  labelStyle?: StyleProp<TextStyle>;
  /** Error text style */
  errorStyle?: StyleProp<TextStyle>;
}
