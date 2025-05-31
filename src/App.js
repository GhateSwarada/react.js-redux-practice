// import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import ProductListingPage from './components/ProductListingPage'
import ShoppingCartPage from './components/ShoppingCartPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
