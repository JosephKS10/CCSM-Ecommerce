import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import logo from '../assets/images/LOGO.png';
import LoadingPageRectangle from '../assets/images/LoadingPageRectangle.png';

const LoadingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Image source={LoadingPageRectangle} style={styles.centerImage} />
      <Text style={styles.textLine1}>Your trusted & local, Melbourne owned & family operated consumables supplier</Text>
      <Text style={styles.textLine2}>CCSM – Cleaning & Consumable Supplies Melbourne is your local and logical choice for consumables and cleaning supplies. </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.alreadyAccountText}>Already have an account?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 107,
    height: 68,
    resizeMode: 'contain',
  },
  centerImage: {
    width: 320,
    height: 320,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  textLine1: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
    width: 300,
    lineHeight: 22,
  },
  textLine2: {
    fontSize: 12,
    textAlign: 'center',
    marginVertical: 10,
    color: "#838383",
    width: 320,
    lineHeight: 14.52,

  },
  button: {
    backgroundColor: '#0665CD',
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 37,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  alreadyAccountText: {
    color: '#000000',
    fontSize: 16,
    lineHeight: 19.36,
    marginTop: 15,
    fontWeight: 400,
  },
});

export default LoadingScreen;
