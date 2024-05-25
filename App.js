import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './navigation/MainNavigator';
import { LogBox } from 'react-native';

import { CartProvider } from './context/CartContext';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
  'VirtualizedLists should never be nested inside plain ScrollViews',
  'Found screens with the same name nested inside one another'
]);

export default function App() {
  return (
    <CartProvider>
    <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor="white" />
    <MainNavigator />
   </NavigationContainer>
   </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
