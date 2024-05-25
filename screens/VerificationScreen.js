import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Keyboard, Animated, Easing } from 'react-native';
import verification from "../assets/images/verification.png";
import successImage from "../assets/images/success.png"; 

const VerificationScreen = ({ navigation }) => {
  const [code, setCode] = useState(['', '', '', '']);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const inputRefs = useRef([]);

  const handleChangeText = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 3) {
      inputRefs.current[index + 1].focus();
    }

    if (index === 3 && text) {
      Keyboard.dismiss(); // Close the keyboard once the 4th input is filled
    }
  };

  const handleKeyPress = ({ nativeEvent }, index) => {
    if (nativeEvent.key === 'Backspace' && index > 0 && !code[index]) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = () => {
    // Show the overlay on submit
    Animated.timing(slideAnim, {
      toValue: 1,
      duration: 500,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  const handleGoToHomepage = () => {
    navigation.navigate('Home');
  };

  const slideUp = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [500, 0], // Change the values as per your need
  });

  return (
    <View style={styles.container}>
      <Image source={verification} style={styles.image} />
      <Text style={styles.title}>Verification Code</Text>
      <Text style={styles.subtitle}>We have sent a verification code to</Text>
      <Text style={styles.phoneNumber}>+61 456969310</Text>
      
      <View style={styles.inputContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.input}
            value={digit}
            onChangeText={(text) => handleChangeText(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            keyboardType="numeric"
            maxLength={1}
            ref={(ref) => (inputRefs.current[index] = ref)}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      
      <View style={styles.resendContainer}>
        <Text style={styles.resendText}>
          Didn’t receive a code? 
        </Text>
        <TouchableOpacity onPress={() => {/* handle resend code */}}>
          <Text style={styles.resendLink}> Resend</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom overlay */}
      <Animated.View style={[styles.overlay, { transform: [{ translateY: slideUp }] }]}>
        <Image source={successImage} style={styles.successImage} />
        <Text style={styles.successTitle}>Register Success</Text>
        <Text style={styles.successSubtitle}>
          Congratulations! Your account is created. Please login to get an amazing experience.
        </Text>
        <TouchableOpacity style={styles.modalButton} onPress={handleGoToHomepage}>
          <Text style={styles.modalButtonText}>Go to Homepage</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    color: "#757575"
  },
  phoneNumber: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  input: {
    width: 50,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 24,
    marginHorizontal: 10,
    backgroundColor: "#D9D9D9"
  },
  button: {
    backgroundColor: '#0665CD',
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 37,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  resendText: {
    fontSize: 16,
    textAlign: 'center',
  },
  resendLink: {
    color: '#07AE9D',
    marginLeft: 1,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '55%',
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: 'center',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  successImage: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
  },
  successTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  successSubtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    color: "#757575",
    paddingHorizontal: 20,
  },
  modalButton: {
    backgroundColor: '#0665CD',
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 37,
    marginTop: 40,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default VerificationScreen;
