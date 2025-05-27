import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <p>{item.name} - ${item.price}</p>
          </div>
        ))
      )}
    </div>
  );
};