import React from 'react';

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Productos disponibles</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Precio: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
