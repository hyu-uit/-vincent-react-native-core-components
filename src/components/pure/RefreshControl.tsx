import React from 'react';
import { RefreshControl as RNRefreshControl } from 'react-native';

import type { RefreshControlComponentProps } from '../../types/refreshControl';
import { REFRESH_CONTROL_COLORS } from '../../constants/refreshControl';

export type { RefreshControlComponentProps } from '../../types/refreshControl';

/**
 * A reusable RefreshControl component with consistent styling
 * Wraps React Native's RefreshControl with app-specific defaults
 */
export const RefreshControl: React.FC<RefreshControlComponentProps> = ({
  refreshing,
  onRefresh,
  tintColor = REFRESH_CONTROL_COLORS.tint,
  colors: androidColors = REFRESH_CONTROL_COLORS.android,
  ...props
}) => {
  return (
    <RNRefreshControl
      refreshing={refreshing}
      onRefresh={onRefresh}
      tintColor={tintColor}
      colors={androidColors}
      {...props}
    />
  );
};

export default RefreshControl;
