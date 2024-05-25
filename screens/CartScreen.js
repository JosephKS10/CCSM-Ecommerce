import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useCart } from '../context/CartContext';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const CartScreen = () => {
  const { cart, removeFromCart, updateQuantity, calculateTotal } = useCart();

  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleIncreaseQuantity = (item) => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <View style={styles.checkboxContainer}>
        <FontAwesome name="square-o" size={24} color="black" />
      </View>
      <Image source={item.image} style={styles.cartItemImage} />
      <View style={styles.cartItemInfo}>
        <Text style={styles.cartItemName}>{item.name}</Text>
        <Text style={styles.cartItemSize}>{item.selectedSize}</Text>
        <Text style={styles.cartItemPrice}>${item.price}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.quantityButton} onPress={() => handleDecreaseQuantity(item)}>
          <FontAwesome name="minus" size={10} color="black" />
        </TouchableOpacity>
        <Text style={styles.quantityInput}>{item.quantity}</Text>
        <TouchableOpacity style={styles.quantityButton} onPress={() => handleIncreaseQuantity(item)}>
          <FontAwesome name="plus" size={10} color="black" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.removeButton}>
        <MaterialCommunityIcons name="trash-can-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Your Cart</Text>
      </View>
      <View style={styles.deliveryContainer}>
        <Text style={{color:"#878787"}}>Delivery to</Text>
        <TouchableOpacity style={styles.locationDropdown}>
          <Text style={{color:"#878787"}}>Springvale, VIC</Text>
          <FontAwesome name="chevron-down" size={15} color="#878787" style={{marginLeft:10}}/>
        </TouchableOpacity>
      </View>
      <FlatList
        data={cart}
        renderItem={renderCartItem}
        keyExtractor={item => item.id.toString()}
      />
      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Totals</Text>
          <Text style={styles.totalAmount}>${calculateTotal().toFixed(2)}</Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Proceed to checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    paddingVertical: 15,
    marginTop: 40,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  deliveryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  locationDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  checkboxContainer: {
    paddingHorizontal: 5,
  },
  cartItemImage: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
  cartItemInfo: {
    flex: 1,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartItemSize: {
    fontSize: 14,
    color: '#666',
  },
  cartItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  quantityButton: {
    padding: 4,
    marginHorizontal: 5,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 20,
  },
  quantityInput: {
    width: 30,
    height: 30,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    marginHorizontal: 5,
    paddingVertical: 5,
  },
  removeButton: {
    padding: 5,
  },
  footer: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  totalText: {
    fontSize: 18,
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#00C4B4',
    paddingVertical: 15,
    borderRadius: 5,
  },
  checkoutButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default CartScreen;
