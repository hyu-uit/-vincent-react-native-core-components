import { StyleSheet, View } from 'react-native';

import type { DividerProps } from '../../types/divider';
import { DIVIDER_COLORS, DIVIDER_DEFAULT_SIZE } from '../../constants/divider';

export type { DividerProps } from '../../types/divider';

const Divider = ({ height, width, style, vertical = false }: DividerProps) => {
  if (vertical) {
    const defaults = DIVIDER_DEFAULT_SIZE.vertical;
    const finalWidth = width ?? defaults.width;

    return (
      <View
        style={[
          styles.divider,
          { width: finalWidth },
          height != null ? { height } : styles.flex,
          style,
        ]}
      />
    );
  }

  const defaults = DIVIDER_DEFAULT_SIZE.horizontal;
  const finalHeight = height ?? defaults.height;

  return (
    <View
      style={[
        styles.divider,
        { height: finalHeight },
        width != null ? { width } : styles.fullWidth,
        style,
      ]}
    />
  );
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    backgroundColor: DIVIDER_COLORS.background,
  },
  flex: {
    flex: 1,
  },
  fullWidth: {
    alignSelf: 'stretch',
  },
});
