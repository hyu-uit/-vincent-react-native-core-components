import { StyleSheet, Text, Image, View } from 'react-native';

import type { AvatarProps } from '../../types/avatar';
import { getAvatarColors } from '../../constants/avatar';
import { useThemeColors } from '../../utils/theme';

export type { AvatarProps } from '../../types/avatar';

const Avatar = ({
  imageUri,
  name,
  size = 100,
  nameStyle,
  containerStyle,
}: AvatarProps) => {
  const colors = useThemeColors();
  const avatarColors = getAvatarColors(colors);
  const lastWord = name?.trim().split(' ').pop() || '';
  const firstLetter = lastWord[0]?.toUpperCase() || '';

  return (
    <View>
      {imageUri && imageUri.trim() !== '' ? (
        <Image
          source={{ uri: imageUri }}
          style={{
            height: size,
            width: size,
            borderRadius: size / 2,
          }}
          resizeMode="cover"
        />
      ) : (
        <View
          style={[
            styles.placeholder,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
              backgroundColor: avatarColors.placeholder,
            },
            containerStyle,
          ]}
        >
          <Text
            style={[
              styles.name,
              { fontSize: size / 2, color: avatarColors.text },
              nameStyle,
            ]}
          >
            {firstLetter}
          </Text>
        </View>
      )}
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  placeholder: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
