import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import logo from '../assets/images/LOGO.png';

const SplashScreen = ({ navigation }) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('Loading');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
        <Image source={logo}  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default SplashScreen;
