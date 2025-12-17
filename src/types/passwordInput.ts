import type { ReactNode } from 'react';
import type { TextInputProps } from 'react-native';

export interface PasswordInputProps
  extends Omit<TextInputProps, 'placeholderTextColor' | 'secureTextEntry'> {
  /** Placeholder text color */
  placeholderTextColor?: string;
  /** Show error state */
  error?: boolean;
  /** Disable the input */
  disabled?: boolean;
  /** Border color when focused */
  focusBorderColor?: string;
  /** Custom icon for show password (when hidden) */
  showIcon?: ReactNode;
  /** Custom icon for hide password (when visible) */
  hideIcon?: ReactNode;
}
