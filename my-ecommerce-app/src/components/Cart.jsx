import React from 'react';

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.title} - ${item.price} x {item.quantity}
            <input 
              type="number" 
              value={item.quantity} 
              onChange={e => updateQuantity(item.id, e.target.value)} 
            />
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
