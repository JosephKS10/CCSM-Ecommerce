import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'; // Assuming you're using Expo for icons
import { useNavigation } from '@react-navigation/native'; // Navigation hook

const products = [
  // Chemicals
  {
    id: 1,
    name: 'Chemical A',
    image: require('../assets/images/product1.png'),
    category: 'Chemicals',
    rating: 4,
    price: 29.99,
    discount: 80,
    deliveryDate: 'May 25, 2024',
    productBoughtByPeople: 123,
    vendor: 'CCSM',
    type: 'Liquid',
    SKU: 'CHEM-A-001',
    description: 'High-quality chemical A suitable for various industrial applications.',
  },
  {
    id: 2,
    name: 'Chemical B',
    image: require('../assets/images/product2.png'),
    category: 'Chemicals',
    rating: 5,
    price: 59.99,
    discount: 15,
    deliveryDate: 'May 26, 2024',
    productBoughtByPeople: 200,
    vendor: 'CCSM',
    type: 'Powder',
    SKU: 'CHEM-B-002',
    description: 'Premium chemical B with excellent purity and performance.',
  },
  {
    id: 3,
    name: 'Chemical C',
    image: require('../assets/images/product3.png'),
    category: 'Chemicals',
    rating: 3,
    price: 19.99,
    discount: 5,
    deliveryDate: 'May 27, 2024',
    productBoughtByPeople: 95,
    vendor: 'CCSM',
    type: 'Solid',
    SKU: 'CHEM-C-003',
    description: 'Cost-effective chemical C for basic industrial uses.',
  },
  {
    id: 4,
    name: 'Chemical D',
    image: require('../assets/images/product4.png'),
    category: 'Chemicals',
    rating: 4,
    price: 39.99,
    discount: 12,
    deliveryDate: 'May 28, 2024',
    productBoughtByPeople: 150,
    vendor: 'CCSM',
    type: 'Liquid',
    SKU: 'CHEM-D-004',
    description: 'Versatile chemical D, suitable for multiple applications.',
  },
  {
    id: 5,
    name: 'Chemical E',
    image: require('../assets/images/product1.png'),
    category: 'Chemicals',
    rating: 2,
    price: 25.99,
    discount: 8,
    deliveryDate: 'May 29, 2024',
    productBoughtByPeople: 60,
    vendor: 'CCSM',
    type: 'Gas',
    SKU: 'CHEM-E-005',
    description: 'Economic chemical E, ideal for specific industrial requirements.',
  },
  // Electronics
  {
    id: 6,
    name: 'Smartphone X',
    image: require('../assets/images/product2.png'),
    category: 'Electronics',
    rating: 5,
    price: 699.99,
    discount: 20,
    deliveryDate: 'May 25, 2024',
    productBoughtByPeople: 500,
    vendor: 'CCSM',
    type: 'Smartphone',
    SKU: 'ELEC-X-006',
    description: 'Latest model smartphone with cutting-edge features.',
  },
  {
    id: 7,
    name: 'Laptop Y',
    image: require('../assets/images/product3.png'),
    category: 'Electronics',
    rating: 4,
    price: 999.99,
    discount: 15,
    deliveryDate: 'May 26, 2024',
    productBoughtByPeople: 300,
    vendor: 'CCSM',
    type: 'Laptop',
    SKU: 'ELEC-Y-007',
    description: 'High-performance laptop for all your computing needs.',
  },
  {
    id: 8,
    name: 'Headphones Z',
    image: require('../assets/images/product4.png'),
    category: 'Electronics',
    rating: 4,
    price: 199.99,
    discount: 10,
    deliveryDate: 'May 27, 2024',
    productBoughtByPeople: 400,
    vendor: 'CCSM',
    type: 'Headphones',
    SKU: 'ELEC-Z-008',
    description: 'Noise-cancelling headphones with superior sound quality.',
  },
  {
    id: 9,
    name: 'Smartwatch A',
    image: require('../assets/images/product1.png'),
    category: 'Electronics',
    rating: 3,
    price: 149.99,
    discount: 5,
    deliveryDate: 'May 28, 2024',
    productBoughtByPeople: 250,
    vendor: 'CCSM',
    type: 'Smartwatch',
    SKU: 'ELEC-A-009',
    description: 'Stylish smartwatch with fitness tracking capabilities.',
  },
  {
    id: 10,
    name: 'Tablet B',
    image: require('../assets/images/product2.png'),
    category: 'Electronics',
    rating: 5,
    price: 499.99,
    discount: 25,
    deliveryDate: 'May 29, 2024',
    productBoughtByPeople: 350,
    vendor: 'CCSM',
    type: 'Tablet',
    SKU: 'ELEC-B-010',
    description: 'Powerful tablet perfect for both work and entertainment.',
  },
  // Books
  {
    id: 11,
    name: 'Book A',
    image: require('../assets/images/product3.png'),
    category: 'Books',
    rating: 4,
    price: 9.99,
    discount: 5,
    deliveryDate: 'May 25, 2024',
    productBoughtByPeople: 100,
    vendor: 'CCSM',
    type: 'Paperback',
    SKU: 'BOOK-A-011',
    description: 'Engaging and thought-provoking book A.',
  },
  {
    id: 12,
    name: 'Book B',
    image: require('../assets/images/product4.png'),
    category: 'Books',
    rating: 5,
    price: 14.99,
    discount: 10,
    deliveryDate: 'May 26, 2024',
  },
  {
    id: 13,
    name: 'Book C',
    image: require('../assets/images/product1.png'),
    category: 'Books',
    rating: 3,
    price: 19.99,
    discount: 15,
    deliveryDate: 'May 27, 2024',
  },
  {
    id: 14,
    name: 'Book D',
    image: require('../assets/images/product2.png'),
    category: 'Books',
    rating: 4,
    price: 24.99,
    discount: 8,
    deliveryDate: 'May 28, 2024',
  },
  {
    id: 15,
    name: 'Book E',
    image: require('../assets/images/product3.png'),
    category: 'Books',
    rating: 2,
    price: 29.99,
    discount: 12,
    deliveryDate: 'May 29, 2024',
  },
  // Clothing
  {
    id: 16,
    name: 'T-shirt A',
    image: require('../assets/images/product4.png'),
    category: 'Clothing',
    rating: 4,
    price: 19.99,
    discount: 10,
    deliveryDate: 'May 25, 2024',
  },
  {
    id: 17,
    name: 'Jeans B',
    image: require('../assets/images/product1.png'),
    category: 'Clothing',
    rating: 5,
    price: 49.99,
    discount: 20,
    deliveryDate: 'May 26, 2024',
  },
  {
    id: 18,
    name: 'Jacket C',
    image: require('../assets/images/product2.png'),
    category: 'Clothing',
    rating: 3,
    price: 89.99,
    discount: 15,
    deliveryDate: 'May 27, 2024',
  },
  {
    id: 19,
    name: 'Shirt D',
    image: require('../assets/images/product3.png'),
    category: 'Clothing',
    rating: 4,
    price: 39.99,
    discount: 8,
    deliveryDate: 'May 28, 2024',
  },
  {
    id: 20,
    name: 'Shorts E',
    image: require('../assets/images/product1.png'),
    category: 'Clothing',
    rating: 2,
    price: 24.99,
    discount: 5,
    deliveryDate: 'May 29, 2024',
  },
];

const ProductListingScreen = ({ route }) => {
  const { searchQuery } = route.params;
  const navigation = useNavigation();

  const filteredProducts = products.filter(product =>
    product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderProduct = ({ item }) => (
    <TouchableOpacity 
      style={styles.productContainer} 
      onPress={() => navigation.navigate('ProductDetail', { product: item })}
    >
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productCategory}>{item.category}</Text>
        <View style={styles.rating}>
          {[...Array(5)].map((_, i) => (
            <MaterialCommunityIcons
              key={i}
              name="star"
              size={16}
              color={i < item.rating ? '#1CE9D4' : '#CCC'}
            />
          ))}
        </View>
        <Text style={styles.productPrice}>${item.price}</Text>
        <Text style={styles.discountBanner}>Save {item.discount}%</Text>
        <Text style={styles.deliveryDate}>Get it delivered by {item.deliveryDate}</Text>
        <TouchableOpacity style={styles.addToCartButton} onPress={() => navigation.navigate('ProductDetail', { product: item })}>
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <HeaderComponent showSearchBar={true} />
      <View style={styles.filterContainer}>
        <Text style={styles.searchResult}>Search result for "{searchQuery}"</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Filters</Text>
          <MaterialCommunityIcons name="filter" size={20} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  searchResult: {
    fontSize: 18,
    margin: 10,
  },
  filterButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 10,
    borderWidth: 1,
    borderColor: '#F0F2F1',
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  filterButtonText: {
    marginRight: 5,
    fontSize: 16,
  },
  productContainer: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#E3E3E3',
    width: '98%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
  },
  productImage: {
    width: 155,
    height: 155,
    resizeMode: 'contain',
  },
  productInfo: {
    flex: 1,
    marginLeft: 15,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 19.36,
    marginBottom: 5,
  },
  productCategory: {
    fontSize: 8,
    color: '#666',
    backgroundColor: '#F0F2F1',
    padding: 3,
    minWidth: 50,
    maxWidth: 80,
    textAlign: 'center',
  },
  rating: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  productPrice: {
    fontSize: 16,
    color: '#000',
    marginTop: 5,
  },
  discountBanner: {
    backgroundColor: '#07AE9D',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
    marginVertical: 5,
    width: 80,
    color: 'white',
  },
  deliveryDate: {
    fontSize: 12,
    color: '#666',
    marginVertical: 5,
  },
  addToCartButton: {
    backgroundColor: '#07AE9D',
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginVertical: 5,
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ProductListingScreen;
