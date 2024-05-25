import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { FontAwesome, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'; // Assuming you're using Expo for icons
import { useCart } from '../context/CartContext';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState('');

  // State for quantity
  const [quantity, setQuantity] = useState(1);

  // Function to handle size selection
  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  // Function to decrease quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Function to increase quantity
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addToCart(product, selectedSize, quantity);
  };

  // Sample data for horizontal product list and reviews
  const relatedProducts = [
    { id: '1', name: 'Related Product 1', image: require('../assets/images/product1.png'), rating: 4, price: 29.99 },
    { id: '2', name: 'Related Product 2', image: require('../assets/images/product2.png'), rating: 5, price: 59.99 },
    { id: '3', name: 'Related Product 3', image: require('../assets/images/product3.png'), rating: 3, price: 19.99 },
  ];

  const reviews = [
    { id: '1', name: 'John Doe', designation: 'Verified Buyer', rating: 5, review: 'Excellent product!' },
    { id: '2', name: 'Jane Smith', designation: 'Verified Buyer', rating: 4, review: 'Very good, will buy again.' },
  ];

  const renderRelatedProduct = ({ item }) => (
    <View style={styles.relatedProduct}>
      <Image source={item.image} style={styles.relatedProductImage} />
      <Text style={styles.relatedProductName}>{item.name}</Text>
      <View style={styles.rating}>
        {[...Array(5)].map((_, i) => (
          <FontAwesome
            key={i}
            name="star"
            size={16}
            color={i < item.rating ? '#1CE9D4' : '#CCC'}
          />
        ))}
      </View>
      <Text style={styles.price}>${item.price}</Text>
    </View>
  );

  const renderReview = ({ item }) => (
    <View style={styles.review}>
      <Image source={require('../assets/images/user.png')} style={styles.profileImage} />
      <View style={styles.reviewContent}>
        <Text style={styles.reviewName}>{item.name}</Text>
        <Text style={styles.reviewDesignation}>{item.designation}</Text>
        <View style={styles.rating}>
          {[...Array(5)].map((_, i) => (
            <FontAwesome
              key={i}
              name="star"
              size={16}
              color={i < item.rating ? '#1CE9D4' : '#CCC'}
            />
          ))}
        </View>
        <Text style={styles.reviewText}>{item.review}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={product.image} style={styles.productImage} />
        
        <View style={styles.productInfoContainer}>
          <View style={styles.productInfoLeft}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>${product.price} ({product.productBoughtByPeople} people bought this)</Text>
          </View>
          <TouchableOpacity style={styles.likeButton}>
            <AntDesign name="hearto" size={24} color="black" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.sizeVendorContainer}>
          <View style={styles.sizeContainer}>
            <Text>Choose the size</Text>
            <View style={styles.sizeOptions}>
              <TouchableOpacity
                style={[styles.sizeOption, selectedSize === '5L' && styles.selectedSizeOption]}
                onPress={() => handleSizeSelection('5L')}
              >
                <Text>5L</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.sizeOption, selectedSize === '15L' && styles.selectedSizeOption]}
                onPress={() => handleSizeSelection('15L')}
              >
                <Text>15L</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.sizeOption, selectedSize === '25L' && styles.selectedSizeOption]}
                onPress={() => handleSizeSelection('25L')}
              >
                <Text>25L</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.vendorInfo}>
            <Text>VENDOR: {product.vendor}</Text>
            <Text>TYPE: {product.type}</Text>
            <Text>SKU: {product.sku}</Text>
          </View>
        </View>

        <View style={styles.quantityContainer}>
          <Text>Select Quantity</Text>
          <View style={styles.quantitySelector}>
            <TouchableOpacity style={styles.quantityButton} onPress={decreaseQuantity}>
              <Text style={styles.textColor}>-</Text>
            </TouchableOpacity>
            <Text>{quantity}</Text>
            <TouchableOpacity style={styles.quantityButton} onPress={increaseQuantity}>
              <Text style={styles.textColor}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.descriptionContainer}>
          <Text style={styles.sectionTitle}>Description of product</Text>
          <Text>{product.description}</Text>
        </View>
        
        <View style={styles.relatedProductsContainer}>
          <Text style={styles.sectionTitle}>Customers who bought this item also bought</Text>
          <FlatList
            data={relatedProducts}
            renderItem={renderRelatedProduct}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.line}></View>
        <View style={styles.reviewsContainer}>
          <Text style={styles.sectionTitle}>Reviews</Text>
          <FlatList
            data={reviews}
            renderItem={renderReview}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <TouchableOpacity style={styles.cartButton} onPress={handleAddToCart}><Text style={styles.buttonText}>Add to Cart</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buyButton}><Text style={{fontWeight:"bold", fontSize:16}}>Buy Now</Text></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    paddingBottom: 80, // Enough space to show the fixed footer
  },
  productImage: {
    width: '100%',
    height: Dimensions.get('window').height * 0.3,
    resizeMode: 'cover',
  },
  productInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingVertical: 15,
  },
  productInfoLeft: {
    flex: 1,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: 'gray',
  },
  likeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: '#9393931A',
    padding: 10,
    borderRadius: 20,
  },
  sizeVendorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  sizeContainer: {
    flex: 1,
  },
  sizeOptions: {
    flexDirection: 'row',
    marginTop: 10,
  },
  sizeOption: {
    marginRight: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  selectedSizeOption: {
    backgroundColor: '#13B2A4',
  },
  vendorInfo: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    lineHeight: 14.52,
  },
  quantityContainer: {
    width: '50%',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  textColor: {
    color: '#FFF',
  },
  quantityButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#000",
  },
  descriptionContainer: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  relatedProductsContainer: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  relatedProduct: {
    marginRight: 10,
    width: 140,
    alignItems: 'flex-start',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 10,
    padding: 15,
  },
  relatedProductImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  relatedProductName: {
    fontSize: 12,
    textAlign: "left"
  },
  line: {
    marginVertical: 20,
    borderTopColor: '#ECECEC',
    borderTopWidth: 1,
  },
  reviewsContainer: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  review: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  reviewContent: {
    flex: 1,
  },
  reviewName: {
    fontWeight: 'bold',
  },
  reviewDesignation: {
    color: 'gray',
    marginBottom: 5,
  },
  reviewText: {
    marginTop: 5,
  },
  rating: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  cartButton: {
    flex: 1,
    marginRight: 5,
    paddingVertical: 14,
    paddingHorizontal: 15,
    backgroundColor: '#13B2A4',
    borderRadius: 5,
    alignItems: 'center',
  },
  buyButton: {
    flex: 1,
    marginLeft: 5,
    paddingVertical: 14,
    paddingHorizontal: 15,
    backgroundColor: '#F0F2F1',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProductDetailScreen;
