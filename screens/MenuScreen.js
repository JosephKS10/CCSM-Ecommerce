import React from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';

const categories = [
  { id: '1', name: 'Electronics', image: require('../assets/images/electronics.png') },
  { id: '2', name: 'Fashion', image: require('../assets/images/fashion.png') },
  { id: '3', name: 'Home', image: require('../assets/images/home.png') },
  { id: '4', name: 'Beauty', image: require('../assets/images/beauty.png') },
  { id: '5', name: 'Toys', image: require('../assets/images/toys.png') },
  { id: '6', name: 'Books', image: require('../assets/images/book.png') },
  { id: '7', name: 'Electronics', image: require('../assets/images/electronics.png') },
  { id: '8', name: 'Fashion', image: require('../assets/images/fashion.png') },
  { id: '9', name: 'Home', image: require('../assets/images/home.png') },
  { id: '10', name: 'Beauty', image: require('../assets/images/beauty.png') },
  { id: '11', name: 'Toys', image: require('../assets/images/toys.png') },
  { id: '12', name: 'Books', image: require('../assets/images/book.png') },
];

const MenuScreen = () => {
  const renderCategoryTile = ({ item }) => (
    <TouchableOpacity style={styles.categoryTile}>
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={styles.categoryTitle}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View>
      <HeaderComponent showSearchBar={true} showDeliveryBar={true}/>
      </View>
      <View style={styles.categoryContainer}>
      <Text style={styles.title}>Category</Text>
      <FlatList
        data={categories}
        renderItem={renderCategoryTile}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.categoryList}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  categoryContainer: {
    borderWidth: 1.5,
    width: '95%',
    marginLeft: "auto",
    marginRight: "auto",
    borderColor: '#f8f8f8',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    marginVertical: 20,
    marginLeft: 20,
    textAlign: 'left',
  },
  categoryList: {
    paddingHorizontal: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
  categoryTile: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#f8f8f8',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  categoryImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MenuScreen;
