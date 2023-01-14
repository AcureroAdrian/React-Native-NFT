import { View, Text, Image, TextInput, StyleSheet } from 'react-native'

import { COLORS, FONTS, SIZES, assets } from '../constants'

interface Props {
  onSearch: (value: string) => void
}

const HomeHeader = ({onSearch}:Props) => {
  return (
    <View style={style.container}>
      <View style={style.logoContainer}>
        <Image 
        source={assets.logo} 
        resizeMode='contain'
        style={style.logo}
        />

        <View style={style.profileContainer}>
          <Image 
          source={assets.person01} 
          resizeMode='contain'
          style={style.profileImage}
          />
          <Image 
          source={assets.badge} 
          resizeMode='contain'
          style={style.badge}
          />
        </View>
      </View>

      <View style={style.containerText}>
        <Text style={style.greetingText}>
          Hello, Adrian 👋 
        </Text>
        <Text style={style.description}>
          Let's find a masterpiece
        </Text>
      </View>

      <View style={style.containerSearch}>
        <View style={style.search}>
          <Image 
          source={assets.search}
          resizeMode='contain'
          style={style.searchImage}
          />
          <TextInput 
          placeholder='Search NFTs'
          style={{ flex: 1}}
          onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    padding: SIZES.font,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    width: 90,
    height: 25
  },
  profileContainer: {
    width: 45,
    height: 45
  },
  profileImage: {
    width: '100%',
    height: '100%'
  },
  badge: {
    position: 'absolute',
    width: 15,
    height: 15,
    bottom: 0, 
    right: 0,
  },
  containerText: {
    marginVertical: SIZES.font
  },
  greetingText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.white
  },
  description: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.large,
    color: COLORS.white,
    marginTop: SIZES.base / 2
  },
  containerSearch: {
    marginTop: SIZES.font
  },
  search: {
    width: '100%',
    borderRadius: SIZES.font,
    backgroundColor: COLORS.gray,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.small - 2
  },
  searchImage: {
    width: 20,
    height: 20,
    marginRight: SIZES.base
  }
})

export default HomeHeader