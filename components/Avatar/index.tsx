import { FC } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

interface IAvatarProps {
  src?: any;
  size?: number;
}

const Avatar: FC<IAvatarProps> = ({ src, size = 40 }) => {
  return (
    <View style={styles.container}>
      <Image
        source={src}
        style={[styles.image, { width: size, height: size }]}
      />
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {},
});
