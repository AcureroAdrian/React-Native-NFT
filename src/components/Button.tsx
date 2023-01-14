import { COLORS, SIZES, FONTS, SHADOWS } from "../constants";
import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";

interface CircleProps {
  imgUrl?: any;
  left?: number
  right?: number;
  top?: number;
  handlePress?: () => any
}

interface RectProps {
  minWidth: number
  fontSize: number,
  handlePress?: () => any
}

export const CircleButton = ({ imgUrl, handlePress, ...props }: CircleProps) => {

  return (
    <TouchableOpacity
      style={[CircleStyle.touchable, ...[props]]}
      onPress={handlePress}
    >
      <Image source={imgUrl} resizeMode="contain" style={CircleStyle.image} />
    </TouchableOpacity>
  );
};

export const RectButton = ({fontSize, handlePress, minWidth, ...props}: RectProps) => {
  return (
    <TouchableOpacity
      style={[RectStyle.touchable, ...[{minWidth, ...props }]]}
      onPress={handlePress}
    >
      <Text style={[RectStyle.text, ...[{fontSize }]]}>
        Pace a bid
      </Text>
    </TouchableOpacity>
  );
};

const CircleStyle = StyleSheet.create({
  touchable: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    position: "absolute",
    borderRadius: SIZES.extraLarge,
    alignItems: "center",
    justifyContent: "center",
    ...SHADOWS.light,
  },
  image: {
    width: 24,
    height: 24,
  },
});

const RectStyle = StyleSheet.create({
  touchable: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.extraLarge,
    padding: SIZES.small,
    ...SHADOWS.light,
  },
  text: {
     fontFamily: FONTS.semiBold,
     color: COLORS.white,
     textAlign: "center",
  },
});