import { View, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NFTDataInterface } from "interfaces";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { CircleButton, RectButton } from "./Button";
import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";

interface Props {
  data: NFTDataInterface;
}

const NFTCard = ({ data }: Props) => {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <View style={style.card}>
        <Image source={data.image} resizeMode="cover" style={style.image} />

        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>

      <SubInfo />

      <View style={style.title}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />

        <View style={style.price}>
          <EthPrice price={data.price} />
          <RectButton 
          minWidth={120}
          fontSize={SIZES.font}
          //@ts-ignore
          handlePress={() => navigation.navigate('Details', { data })}
          />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.font,
    marginBottom: SIZES.extraLarge,
    margin: SIZES.base,
    ...SHADOWS.dark,
  },
  card: {
    width: "100%",
    height: 250,
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: SIZES.font,
    borderTopRightRadius: SIZES.font,
  },
  title: {
    width: "100%",
    padding: SIZES.font,
  },
  price: {
    marginTop: SIZES.font,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center'
  }
});

export default NFTCard;
