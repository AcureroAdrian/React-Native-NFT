import { View, Text, Image, StyleSheet } from "react-native";

import { EthPrice } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";

interface Props {
  bid?: any;
}

const DetailsBid = ({ bid }: Props) => {
  return (
    <View style={style.container}>
      <Image
        source={bid?.image}
        resizeMode="contain"
        style={{ width: 48, height: 48 }}
      />

      <View style={style.containerDetails}>
        <Text style={style.textName}>Bid place by {bid?.name}</Text>
        <Text style={style.textDate}>{bid?.date}</Text>
      </View>

      <EthPrice price={bid?.price} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: SIZES.base,
    paddingHorizontal: SIZES.base * 2,
  },
  containerDetails: { 
    flexDirection: "column",
    alignItems: "center" 
  },
  textName: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.small,
    color: COLORS.primary,
  },
  textDate: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small - 2,
    color: COLORS.secondary,
    marginTop: 3,
  },
});

export default DetailsBid;
