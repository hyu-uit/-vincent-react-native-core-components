import type { StyleProp, ViewStyle, TextStyle } from 'react-native';

export interface TabItem<T = string> {
  /** Tab display label */
  label: string;
  /** Tab value */
  value: T;
  /** Whether the tab is disabled */
  disabled?: boolean;
}

export interface TabsProps<T = string> {
  /** Array of tab items */
  tabs: TabItem<T>[];
  /** Currently selected tab value */
  value: T;
  /** Callback when tab selection changes */
  onChange: (value: T) => void;
  /** Custom container style */
  containerStyle?: StyleProp<ViewStyle>;
  /** Custom style for individual tab */
  tabStyle?: StyleProp<ViewStyle>;
  /** Custom style for selected tab */
  selectedTabStyle?: StyleProp<ViewStyle>;
  /** Custom text style */
  textStyle?: StyleProp<TextStyle>;
  /** Custom text style for selected tab */
  selectedTextStyle?: StyleProp<TextStyle>;
}
