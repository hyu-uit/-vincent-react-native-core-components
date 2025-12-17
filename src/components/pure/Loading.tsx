import { ActivityIndicator, StyleSheet, View } from 'react-native';

import type { LoadingProps } from '../../types/loading';
import { getLoadingColors } from '../../constants/loading';
import { useThemeColors } from '../../utils/theme';

export type { LoadingProps } from '../../types/loading';

export function Loading({
  size = 'large',
  color,
  fullScreen = true,
}: LoadingProps) {
  const colors = useThemeColors();
  const loadingColors = getLoadingColors(colors);
  const indicatorColor = color ?? loadingColors.indicator;
  if (fullScreen) {
    return (
      <View style={styles.fullScreen}>
        <ActivityIndicator size={size} color={indicatorColor} />
      </View>
    );
  }

  return <ActivityIndicator size={size} color={indicatorColor} />;
}

export default Loading;

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
