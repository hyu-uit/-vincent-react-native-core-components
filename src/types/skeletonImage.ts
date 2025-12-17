import type { ReactNode } from 'react';
import type {
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  ImageStyle,
  TextStyle,
} from 'react-native';

export type ImageResizeMode =
  | 'cover'
  | 'contain'
  | 'stretch'
  | 'repeat'
  | 'center';

export interface SkeletonImageProps {
  /** Image source */
  source: ImageSourcePropType;
  /** Container style */
  containerStyle?: StyleProp<ViewStyle>;
  /** Image style */
  imageStyle?: StyleProp<ImageStyle>;
  /** Skeleton placeholder style */
  skeletonStyle?: StyleProp<ViewStyle>;
  /** Error container style */
  errorStyle?: StyleProp<ViewStyle>;
  /** Error text style */
  errorTextStyle?: StyleProp<TextStyle>;
  /** Image resize mode */
  resizeMode?: ImageResizeMode;
  /** Whether to show error icon when image fails to load */
  showErrorIcon?: boolean;
  /** Custom error icon component */
  errorIcon?: ReactNode;
  /** Error text to display */
  errorText?: string;
  /** Shimmer animation duration in ms */
  shimmerDuration?: number;
  /** Width of the component (required for proper sizing) */
  width?: number;
  /** Height of the component (required for proper sizing) */
  height?: number;
}
