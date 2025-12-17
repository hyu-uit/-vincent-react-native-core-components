import type { ReactNode } from 'react';
import type { TextInputProps as RNTextInputProps } from 'react-native';

export interface TextInputProps
  extends Omit<RNTextInputProps, 'placeholderTextColor'> {
  /** Left icon component */
  leftIcon?: ReactNode;
  /** Right icon component (shown as clear button when showClearButton is true) */
  rightIcon?: ReactNode;
  /** Suffix text displayed after the input */
  suffix?: string;
  /** Callback when clear button is pressed */
  onClear?: () => void;
  /** Whether to show clear button when input has value */
  showClearButton?: boolean;
  /** Placeholder text color */
  placeholderTextColor?: string;
  /** Show error state */
  error?: boolean;
  /** Disable the input */
  disabled?: boolean;
  /** Border color when focused */
  focusBorderColor?: string;
}
