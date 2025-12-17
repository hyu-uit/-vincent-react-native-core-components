import type { StyleProp, ViewStyle, TextStyle } from 'react-native';

export interface AvatarProps {
  /** URL of the avatar image to display */
  imageUri?: string;
  /** Name used to generate the fallback initial (first letter of last word) */
  name?: string;
  /** Size of the avatar in pixels (width and height) default is 100 */
  size?: number;
  /** Custom styles for the name initial text */
  nameStyle?: StyleProp<TextStyle>;
  /** Custom styles for the placeholder container */
  containerStyle?: StyleProp<ViewStyle>;
}
