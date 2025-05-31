import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array of { plantId, name, price, image, quantity }
  totalQuantity: 0,
  totalCost: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload; // payload is {id, name, price, image}
      const existingItem = state.items.find(item => item.plantId === newItem.id);

      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          plantId: newItem.id,
          name: newItem.name,
          price: newItem.price,
          image: newItem.image,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
      }
      state.totalCost = state.items.reduce((sum, item) => sum + item.quantity * item.price, 0);
    },
    removeItemFromCart: (state, action) => {
      const idToRemove = action.payload;
      const existingItem = state.items.find(item => item.plantId === idToRemove);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity; // Subtract all quantity
        state.items = state.items.filter(item => item.plantId !== idToRemove);
      }
      state.totalCost = state.items.reduce((sum, item) => sum + item.quantity * item.price, 0);
    },
    increaseItemQuantity: (state, action) => {
      const idToIncrease = action.payload;
      const existingItem = state.items.find(item => item.plantId === idToIncrease);

      if (existingItem) {
        existingItem.quantity++;
        state.totalQuantity++;
      }
      state.totalCost = state.items.reduce((sum, item) => sum + item.quantity * item.price, 0);
    },
    decreaseItemQuantity: (state, action) => {
      const idToDecrease = action.payload;
      const existingItem = state.items.find(item => item.plantId === idToDecrease);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(item => item.plantId !== idToDecrease);
        } else {
          existingItem.quantity--;
        }
        state.totalQuantity--;
      }
      state.totalCost = state.items.reduce((sum, item) => sum + item.quantity * item.price, 0);
    },
  },
});

export const { addItemToCart, removeItemFromCart, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
