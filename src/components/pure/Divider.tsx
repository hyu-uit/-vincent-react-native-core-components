import { StyleSheet, View } from 'react-native';

import type { DividerProps } from '../../types/divider';
import {
  getDividerColors,
  DIVIDER_DEFAULT_SIZE,
} from '../../constants/divider';
import { useThemeColors } from '../../utils/theme';

export type { DividerProps } from '../../types/divider';

const Divider = ({ height, width, style, vertical = false }: DividerProps) => {
  const colors = useThemeColors();
  const dividerColors = getDividerColors(colors);

  if (vertical) {
    const defaults = DIVIDER_DEFAULT_SIZE.vertical;
    const finalWidth = width ?? defaults.width;

    return (
      <View
        style={[
          styles.divider,
          {
            width: finalWidth,
            backgroundColor: dividerColors.background,
          },
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
        {
          height: finalHeight,
          backgroundColor: dividerColors.background,
        },
        width != null ? { width } : styles.fullWidth,
        style,
      ]}
    />
  );
};

export default Divider;

const styles = StyleSheet.create({
  divider: {},
  flex: {
    flex: 1,
  },
  fullWidth: {
    alignSelf: 'stretch',
  },
});
