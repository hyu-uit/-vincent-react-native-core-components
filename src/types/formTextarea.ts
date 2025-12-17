import type {
  StyleProp,
  ViewStyle,
  TextStyle,
  TextInputProps,
} from 'react-native';
import type { Control, FieldValues, Path } from 'react-hook-form';

export interface FormTextareaProps<T extends FieldValues> {
  /** Field name (must match form schema) */
  name: Path<T>;
  /** React Hook Form control object */
  control: Control<T>;
  /** Label text above the textarea */
  label?: string;
  /** Placeholder text for the textarea */
  placeholder?: string;
  /** External error message (overrides form validation error) */
  error?: string;
  /** Show required indicator (*) next to label */
  required?: boolean;
  /** Disable the textarea */
  disabled?: boolean;
  /** Height of the textarea (default: 140) */
  height?: number;
  /** Maximum character length */
  maxLength?: number;
  /** Border color when focused */
  focusBorderColor?: string;
  /** Additional TextInput props */
  inputProps?: Partial<TextInputProps>;
  /** Container style */
  containerStyle?: StyleProp<ViewStyle>;
  /** Label text style */
  labelStyle?: StyleProp<TextStyle>;
  /** Textarea container style */
  textareaStyle?: StyleProp<ViewStyle>;
  /** Input text style */
  inputStyle?: StyleProp<TextStyle>;
  /** Error text style */
  errorStyle?: StyleProp<TextStyle>;
}
