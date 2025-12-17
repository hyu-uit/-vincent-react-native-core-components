import type { RefreshControlProps } from 'react-native';

export interface RefreshControlComponentProps
  extends Omit<RefreshControlProps, 'tintColor' | 'colors'> {
  /**
   * Whether the view should be indicating an active refresh
   */
  refreshing: boolean;
  /**
   * Called when the view should start refreshing
   */
  onRefresh: () => void;
  /**
   * The tint color of the refresh indicator (iOS only)
   * @default COLORS.primary
   */
  tintColor?: string;
  /**
   * The colors of the refresh indicator (Android only)
   * @default [COLORS.primary]
   */
  colors?: string[];
}
