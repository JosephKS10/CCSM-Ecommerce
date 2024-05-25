import { View, Text, ScrollView, StyleSheet} from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'

const WishlistScreen = () => {
  return (
    <ScrollView style={styles.container}>
    <View>
    <HeaderComponent showSearchBar={true} showDeliveryBar={true}/>
    </View>
  </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
});
export default WishlistScreen