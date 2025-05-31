// src/components/PlantCard/PlantCard.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../redux/cartSlice.js';
import styles from './styles/PlantCard.module.css';
// ../../redux/cartSlice
const PlantCard = ({ plant }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [addedToCart, setAddedToCart] = useState(
    cartItems.some(item => item.plantId === plant.id)
  );

  // Effect to re-check if item is in cart when cartItems changes
  React.useEffect(() => {
    setAddedToCart(cartItems.some(item => item.plantId === plant.id));
  }, [cartItems, plant.id]);


  const handleAddToCart = () => {
    dispatch(addItemToCart(plant));
    setAddedToCart(true); // Disable button immediately
  };

  return (
    <div className={styles.card}>
      <img src={plant.image} alt={plant.name} className={styles.image} />
      <h3>{plant.name}</h3>
      <p>${plant.price.toFixed(2)}</p>
      <button
        onClick={handleAddToCart}
        disabled={addedToCart}
        className={addedToCart ? styles.disabledButton : styles.addButton}
      >
        {addedToCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default PlantCard;
