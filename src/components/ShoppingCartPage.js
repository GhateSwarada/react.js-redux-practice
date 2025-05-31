// src/pages/ShoppingCartPage/ShoppingCartPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  increaseItemQuantity,
  decreaseItemQuantity,
  removeItemFromCart,
} from '../redux/cartSlice.js';
import Header from '../components/Header.js';
import styles from './styles/ShoppingCartPage.module.css';

const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const totalCost = useSelector(state => state.cart.totalCost);

  const handleIncrease = (id) => {
    dispatch(increaseItemQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseItemQuantity(id));
  };

  const handleDelete = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleCheckout = () => {
    alert('Checkout Feature Coming Soon!');
  };

  return (
    <>
      <Header />
      <div className={styles.shoppingCartPage}>
        <h2>Your Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty. <Link to="/products">Start shopping!</Link></p>
        ) : (
          <>
            <p>Total Items: {totalQuantity}</p>
            <p>Total Cost: ${totalCost.toFixed(2)}</p>

            <div className={styles.cartItemsContainer}>
              {cartItems.map(item => (
                <div key={item.plantId} className={styles.cartItem}>
                  <img src={item.image} alt={item.name} className={styles.itemImage} />
                  <div className={styles.itemDetails}>
                    <h3>{item.name}</h3>
                    <p>Unit Price: ${item.price.toFixed(2)}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Subtotal: ${(item.quantity * item.price).toFixed(2)}</p>
                  </div>
                  <div className={styles.itemActions}>
                    <button onClick={() => handleIncrease(item.plantId)} className={styles.actionButton}>+</button>
                    <button onClick={() => handleDecrease(item.plantId)} className={styles.actionButton}>-</button>
                    <button onClick={() => handleDelete(item.plantId)} className={styles.deleteButton}>Delete</button>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.cartActions}>
              <button onClick={handleCheckout} className={styles.checkoutButton}>Checkout</button>
              <Link to="/products" className={styles.continueShoppingButton}>
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ShoppingCartPage;
