import type { StyleProp, ViewStyle } from 'react-native';

export interface DividerProps {
  /** Height of the divider */
  height?: number;
  /** Width of the divider */
  width?: number;
  /** Whether the divider is vertical */
  vertical?: boolean;
  /** Custom styles for the divider */
  style?: StyleProp<ViewStyle>;
}
