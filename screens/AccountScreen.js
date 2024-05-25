import React from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';

const accountOptions = [
  'Update Account Details',
  'Notifications',
  'Orders',
  'Login & Security',
  'Your Payments',
  'Manage Address',
  'Privacy Policy',
];

const AccountScreen = () => {
  const renderOption = ({ item }) => (
    <TouchableOpacity style={styles.option}>
      <Text style={styles.optionText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View>
        <HeaderComponent showSearchBar={false} showDeliveryBar={true}/>
      </View>
      <Text style={styles.title}>Account</Text>
      <FlatList
        data={accountOptions}
        renderItem={renderOption}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    marginVertical: 20,
    marginBottom: 10,
    marginLeft: 20,
    textAlign: 'left',
  },
  list: {
    paddingHorizontal: 10,
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  option: {
    padding: 15,
    backgroundColor: 'white',
    marginVertical: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
});

export default AccountScreen;
