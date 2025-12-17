import type { ReactNode } from 'react';
import type { StyleProp, TextInputProps, ViewStyle } from 'react-native';

export interface SearchInputProps
  extends Omit<
    TextInputProps,
    'placeholderTextColor' | 'style' | 'value' | 'onChangeText'
  > {
  /** Current input value (controlled mode) */
  value?: string;
  /** Callback when text changes (immediate, for controlled mode) */
  onChangeText?: (text: string) => void;
  /** Debounced callback when text changes (after delay) - main callback for search */
  onSearch?: (text: string) => void;
  /** Debounce delay in milliseconds (default: 300) */
  debounceDelay?: number;
  /** Callback when clear button is pressed */
  onClear?: () => void;
  /** Placeholder text */
  placeholder?: string;
  /** Placeholder text color */
  placeholderTextColor?: string;
  /** Show error state */
  error?: boolean;
  /** Disable the input */
  disabled?: boolean;
  /** Border color when focused */
  focusBorderColor?: string;
  /** Container style */
  style?: StyleProp<ViewStyle>;
  /** Custom search icon */
  searchIcon?: ReactNode;
}
