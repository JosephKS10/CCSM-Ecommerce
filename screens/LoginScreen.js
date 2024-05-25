import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react'

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Log in</Text>
    <Text style={styles.subtitle}>Log in to your account</Text>

    <Text style={styles.label}>Username</Text>
    <TextInput
      style={styles.input}
      placeholder="Username"
      autoCapitalize="none"
    />

    <Text style={styles.label}>Password</Text>
    <TextInput
      style={styles.input}
      placeholder="Password"
      secureTextEntry
    />

    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
      <Text style={styles.buttonText}>Log in</Text>
    </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 100,
  },
  subtitle: {
    fontSize: 10,
    textAlign: 'left',
    marginVertical: 10,
    color: "#B8B8B8"
  },
  label: {
    fontSize: 16,
    textAlign: 'left',
    marginTop: 20,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#B8B8B8',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#0665CD',
    paddingVertical: 12,
    paddingHorizontal: 110,
    borderRadius: 37,
    marginTop: 40,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen