import React, { useState } from 'react';
import ProductList from './components/productList.jsx';
import Cart from './components/Cart.jsx';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = product => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item => 
        item.id === product.id 
        ? { ...item, quantity: item.quantity + 1 } 
        : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = id => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCart(cart.map(item => 
      item.id === id 
      ? { ...item, quantity: Number(quantity) } 
      : item
    ));
  };

  return (
    <div>
    <h1>My Shopping App</h1>
      <ProductList addToCart={addToCart} />
      <Cart 
        cartItems={cart} 
        removeFromCart={removeFromCart} 
        updateQuantity={updateQuantity} 
      />
    </div>
  );
};

export default App;
