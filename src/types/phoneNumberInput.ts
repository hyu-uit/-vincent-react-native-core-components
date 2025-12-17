import type { ReactNode } from 'react';
import type { TextInputProps } from 'react-native';

export interface PhoneNumberInputProps
  extends Omit<TextInputProps, 'value' | 'onChangeText'> {
  /** Current phone number value (without country code) */
  phoneNumber?: string;
  /** Country calling code (e.g., "+82", "+1") */
  callingCode?: string;
  /** Callback when phone number changes */
  onPhoneNumberChange?: (phoneNumber: string) => void;
  /** Callback when calling code changes */
  onCallingCodeChange?: (callingCode: string) => void;
  /** Show error state */
  error?: boolean;
  /** Disable the input */
  disabled?: boolean;
  /** Custom dropdown icon */
  dropdownIcon?: ReactNode;
  /** Custom country selector component */
  renderCountrySelector?: (props: {
    callingCode: string;
    onPress: () => void;
    disabled: boolean;
  }) => ReactNode;
  /** Custom modal component for country selection */
  renderCountryModal?: (props: {
    visible: boolean;
    onSelect: (country: { cca2: string; callingCode: string }) => void;
    onClose: () => void;
    selectedCallingCode?: string;
  }) => ReactNode;
}
