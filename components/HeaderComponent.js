import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'; // Assuming you're using Expo for icons
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const logo = require('../assets/images/LOGO.png');

const HeaderComponent = (props) => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (text) => {
    setSearchQuery(text);
  };

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      navigation.navigate('ProductListing', { searchQuery });
    }
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
      </View>
      {props.showSearchBar && (
        <TextInput
          style={styles.searchBar}
          placeholder="Search here ..."
          value={searchQuery}
          onChangeText={handleSearchChange}
          onSubmitEditing={handleSearchSubmit}
        />
      )}
      {props.showDeliveryBar && <View style={styles.deliveryBar}>
        <MaterialCommunityIcons name='map-marker-outline' style={styles.mapIcon} size={20} />
        <Text style={styles.deliveryText}>Delivery address </Text>
        <Text>- Springvale, Vic</Text>
        <TouchableOpacity style={styles.caretContainer}>
          <AntDesign name="down" size={12} color="black" />
        </TouchableOpacity>
      </View>}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'white',
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  searchBar: {
    width: '90%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    alignSelf: 'center',
    position: 'relative',
    top: -10,
  },
  caretContainer: {
    marginLeft: 5,
  },
  deliveryBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    backgroundColor: '#0BB4A3',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  mapIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  deliveryText: {
    fontSize: 14,
    color: 'white',
  },
});

export default HeaderComponent;
