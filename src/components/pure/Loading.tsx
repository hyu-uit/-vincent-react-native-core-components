import { ActivityIndicator, StyleSheet, View } from 'react-native';

import type { LoadingProps } from '../../types/loading';
import { LOADING_COLORS } from '../../constants/loading';

export type { LoadingProps } from '../../types/loading';

export function Loading({
  size = 'large',
  color = LOADING_COLORS.indicator,
  fullScreen = true,
}: LoadingProps) {
  if (fullScreen) {
    return (
      <View style={styles.fullScreen}>
        <ActivityIndicator size={size} color={color} />
      </View>
    );
  }

  return <ActivityIndicator size={size} color={color} />;
}

export default Loading;

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
