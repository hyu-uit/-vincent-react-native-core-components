import type { TextInputProps } from 'react-native';

export interface NumberInputProps
  extends Omit<TextInputProps, 'value' | 'onChangeText'> {
  /** Current numeric value */
  value?: number | null;
  /** Callback when value changes */
  onChangeValue?: (value: number | null) => void;
  /** Thousands delimiter (default: ",") */
  delimiter?: string;
  /** Decimal separator (default: ".") */
  separator?: string;
  /** Number of decimal places (default: 0) */
  precision?: number;
  /** Prefix string (e.g., "$") */
  prefix?: string;
  /** Suffix string (e.g., "%") */
  suffix?: string;
  /** Minimum allowed value (default: 0) */
  minValue?: number;
  /** Maximum allowed value */
  maxValue?: number;
  /** Show error state */
  error?: boolean;
  /** Disable the input */
  disabled?: boolean;
  /** Placeholder text */
  placeholder?: string;
}
