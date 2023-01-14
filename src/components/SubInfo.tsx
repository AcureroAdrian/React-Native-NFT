import { SIZES, COLORS, FONTS, SHADOWS, assets } from "../constants";
import { View, Text, StyleSheet, Image } from "react-native";

export const NFTTitle = ({title, subTitle, titleSize, subTitleSize} : any) => {
  return (
    <View>
      <Text style={{...styleTitle.title, fontSize: titleSize}}>{title}</Text>
      <Text style={{...styleTitle.subTitle, fontSize: subTitleSize}}>{subTitle}</Text>
    </View>
  );
};

export const EthPrice = ({price} : any) => {
  return (
    <View style={stylePrice.container}>
      <Image 
      source={assets.eth}
      resizeMode='contain'
      style={stylePrice.image}
      />
      <Text style={stylePrice.price}>{price}</Text>
    </View>
  );
};

export const ImageCmp = ({ imgUrl, index}: any) => {
  return (
    <Image source={imgUrl}
    resizeMode='contain'
    style={{width: 48, height: 48, marginLeft: index === 0 ? 0 : -SIZES.font}}
    />
  );
};

export const People = () => {
  return (
    <View style={{ flexDirection: 'row'}}>
      {[assets.person02, assets.person03, assets.person04].map((imgUrl, index) => (
        <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`}/>
      ))}
    </View>
  );
};

export const EndDate = () => {
  return (
    <View style={styleEndDate.container}>
      <Text style={styleEndDate.text1}>EndDate</Text>
      <Text style={styleEndDate.text2}>12h 30m</Text>
    </View>
  );
};

export const SubInfo = () => {
  return (
    <View style={styleSubInfo.container}>
      <People />
      <EndDate />
    </View>
  );
};

//StyleSheet

const styleSubInfo = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: 'row',
        justifyContent: "space-between"
    }
})

const styleEndDate = StyleSheet.create({
  container: {
      paddingHorizontal: SIZES.font,
      paddingVertical: SIZES.base,
      backgroundColor: COLORS.white,
      justifyContent: 'center',
      alignItems: "center",
      ...SHADOWS.light,
      elevation: 1,
      maxWidth: '50%'
  },
  text1: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.primary,
  },
  text2: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
})

const styleTitle = StyleSheet.create({
  title: {
    fontFamily: FONTS.semiBold,
    color: COLORS.primary
  },
  subTitle: {
    fontFamily: FONTS.regular,
    color: COLORS.primary
  }
})

const stylePrice = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center"
  },
  image: { 
    width: 20,
    height: 20,
    marginRight: 2
  },
  price: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.font,
    color: COLORS.primary
  }
})