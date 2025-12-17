import type { ReactNode } from 'react';

export interface CheckboxProps {
  /** Whether the checkbox is checked */
  checked: boolean;
  /** Callback when the checkbox is pressed */
  onPress: () => void;
  /** Label text or custom component */
  label?: string | ReactNode;
  /** Custom check icon component */
  checkIcon?: ReactNode;
  /** Disable the checkbox */
  disabled?: boolean;
  /** Show error state */
  error?: boolean;
  /** Size of the checkbox */
  size?: number;
}
