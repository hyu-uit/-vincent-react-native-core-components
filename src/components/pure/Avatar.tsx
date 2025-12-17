import { StyleSheet, Text, Image, View } from 'react-native';

import type { AvatarProps } from '../../types/avatar';
import { AVATAR_COLORS } from '../../constants/avatar';

export type { AvatarProps } from '../../types/avatar';

const Avatar = ({
  imageUri,
  name,
  size = 100,
  nameStyle,
  containerStyle,
}: AvatarProps) => {
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
            { width: size, height: size, borderRadius: size / 2 },
            containerStyle,
          ]}
        >
          <Text style={[styles.name, { fontSize: size / 2 }, nameStyle]}>
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
    backgroundColor: AVATAR_COLORS.placeholder,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    color: AVATAR_COLORS.text,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
