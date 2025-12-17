import React from 'react';
import { RefreshControl as RNRefreshControl } from 'react-native';

import type { RefreshControlComponentProps } from '../../types/refreshControl';
import { getRefreshControlColors } from '../../constants/refreshControl';
import { useThemeColors } from '../../utils/theme';

export type { RefreshControlComponentProps } from '../../types/refreshControl';

/**
 * A reusable RefreshControl component with consistent styling
 * Wraps React Native's RefreshControl with app-specific defaults
 */
export const RefreshControl: React.FC<RefreshControlComponentProps> = ({
  refreshing,
  onRefresh,
  tintColor,
  colors: androidColors,
  ...props
}) => {
  const themeColors = useThemeColors();
  const refreshColors = getRefreshControlColors(themeColors);
  const finalTintColor = tintColor ?? refreshColors.tint;
  const finalAndroidColors = androidColors ?? refreshColors.android;

  return (
    <RNRefreshControl
      refreshing={refreshing}
      onRefresh={onRefresh}
      tintColor={finalTintColor}
      colors={finalAndroidColors}
      {...props}
    />
  );
};

export default RefreshControl;
