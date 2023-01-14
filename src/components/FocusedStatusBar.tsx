import { View, Text, StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/core'

interface Props {
  backgroundColor: string
  barStyle?: any
  translucent?: boolean
}

const FocusedStatusBar = (props :Props) => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated={true} {...props}/> : null
}

export default FocusedStatusBar 