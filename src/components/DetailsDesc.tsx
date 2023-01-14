import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { EthPrice, NFTTitle } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
  data: any;
}

const DetailsDesc = ({ data }: Props) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <View style={style.containerDetails}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />

        <EthPrice price={data.price} />
      </View>

      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text style={style.titleDescription}>Description</Text>
        <View style={{ marginTop: SIZES.base }}>
          <Text style={style.description}>
            {text}
            {!readMore && "..."}
              <Text
                style={style.readMore}
                
                onPress={() => {
                  if (!readMore) {
                    setText(data.description);
                    setReadMore(true);
                  } else {
                    setText(data.description.slice(0, 100));
                    setReadMore(false);
                  }
                }}
              >
                {readMore ? " Show Less" : " Read More"}
              </Text>

          </Text>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  containerDetails: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleDescription: {
    fontSize: SIZES.font,
    fontFamily: FONTS.semiBold,
    color: COLORS.primary,
  },
  description: {
    fontSize: SIZES.small,
    fontFamily: FONTS.regular,
    color: COLORS.secondary,
    lineHeight: SIZES.large,
  },
  readMore: {
    fontSize: SIZES.small,
    fontFamily: FONTS.semiBold,
    color: COLORS.primary,
  },
});

export default DetailsDesc;
