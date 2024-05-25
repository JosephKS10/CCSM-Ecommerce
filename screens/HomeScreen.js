import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import Carousel from 'react-native-snap-carousel-v4';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'; // Assuming you're using Expo for icons
import { useNavigation } from '@react-navigation/native'; // Navigation hook

import HeaderComponent from '../components/HeaderComponent';

const logo = require('../assets/images/LOGO.png'); 


const categories = [
  { id: '1', name: 'Electronics', logo: require('../assets/images/electronics.png') },
  { id: '2', name: 'Fashion', logo: require('../assets/images/fashion.png') },
  { id: '3', name: 'Home', logo: require('../assets/images/home.png') },
  { id: '4', name: 'Beauty', logo: require('../assets/images/beauty.png') },
  { id: '5', name: 'Toys', logo: require('../assets/images/toys.png') },
  { id: '6', name: 'All', logo: require('../assets/images/all.png') },

];

const popularProducts = [
  { 
    id: '100', 
    name: 'Product 1', 
    image: require('../assets/images/product1.png'), 
    rating: 4, 
    price: 29.99,
    category: 'Electronics', 
    discount: 10, 
    deliveryDate: 'June 1, 2024', 
    productBoughtByPeople: 256, 
    vendor: 'TechWise', 
    type: 'Gadget', 
    SKU: 'PROD1-123', 
    description: 'A versatile electronic gadget suitable for various tasks.'
  },
  { 
    id: '101', 
    name: 'Product 2', 
    image: require('../assets/images/product2.png'), 
    rating: 2.5, 
    price: 59.99,
    category: 'Home & Kitchen', 
    discount: 15, 
    deliveryDate: 'May 28, 2024', 
    productBoughtByPeople: 98, 
    vendor: 'HomeNest', 
    type: 'Appliance', 
    SKU: 'PROD2-456', 
    description: 'A modern kitchen appliance to simplify your cooking experience.'
  },
  { 
    id: '102', 
    name: 'Product 3', 
    image: require('../assets/images/product3.png'), 
    rating: 3, 
    price: 19.99,
    category: 'Clothing', 
    discount: 20, 
    deliveryDate: 'May 27, 2024', 
    productBoughtByPeople: 172, 
    vendor: 'FashionHub', 
    type: 'Apparel', 
    SKU: 'PROD3-789', 
    description: 'Stylish clothing item suitable for casual outings.'
  },
  { 
    id: '103', 
    name: 'Product 4', 
    image: require('../assets/images/product4.png'), 
    rating: 4, 
    price: 39.99,
    category: 'Health & Wellness', 
    discount: 5, 
    deliveryDate: 'May 29, 2024', 
    productBoughtByPeople: 342, 
    vendor: 'WellnessWorld', 
    type: 'Supplement', 
    SKU: 'PROD4-101', 
    description: 'A natural supplement to boost your overall well-being.'
  }
];


const HomeScreen = () => {
  const navigation = useNavigation();

  const renderBanner = ({ item }) => (
    <View style={[styles.banner, { backgroundColor: item }]} />
  );

  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.category}>
      <Image source={item.logo} style={styles.categoryLogo} />
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderProduct = ({ item }) => (
    <TouchableOpacity 
      style={styles.product}
      onPress={() => navigation.navigate('ProductDetail', { product: item })}
    >
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <View style={styles.rating}>
          {[...Array(5)].map((_, i) => (
            <FontAwesome
              key={i}
              name="star"
              size={16}
              color={i < item.rating ? '#1CE9D4' : '#ccc'}
            />
          ))}
        </View>
        <Text style={styles.price}>${item.price}</Text>
        <TouchableOpacity 
          style={styles.addToCartButton}
          onPress={() => navigation.navigate('ProductDetail', { product: item })}>          
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View>
        <HeaderComponent showSearchBar={true} showDeliveryBar={true}/>
      </View>
      <Carousel
        data={['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF']}
        renderItem={renderBanner}
        sliderWidth={400}
        itemWidth={300}
        autoplay={true}
        loop={true}
      />
     
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>

          <FlatList
            data={categories}
            renderItem={renderCategory}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />

        </View>
     
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Products</Text>
        <FlatList
          data={popularProducts}
          renderItem={renderProduct}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={styles.productRow}
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
  
  banner: {
    height: 150,
    width: '100%',
    marginBottom: 20,
    borderRadius: 10,
  },

  section: {
    marginBottom: 20,
    paddingHorizontal: 10,
    borderColor: "#F0EBD8",
    borderWidth: 1,
    width: '95%',
    marginLeft: "auto",
    marginRight: "auto",
    paddingVertical: 10,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 14,
    marginBottom: 10,
  },
  category: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 10,
    minWidth: 95,
    maxWidth: 95,
  },
  categoryLogo: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  categoryName: {
    fontSize: 14,
    textAlign: 'center',
  },
  productRow: {
    justifyContent: 'space-between',
  },
  product: {
    width: '48%',
    marginBottom: 10,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.13,
    shadowRadius: 7,
    elevation: 4,
  },
  productImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  productInfo: {
    width: '100%',
  },
  productName: {
    fontSize: 14,
    marginBottom: 5,
    marginLeft: 10,
  },
  rating: {
    flexDirection: 'row',
    marginBottom: 5,
    marginLeft: 10,

  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
  },
  addToCartButton: {
    backgroundColor: '#07AE9D',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 7,
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
