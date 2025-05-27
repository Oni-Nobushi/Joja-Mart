import React, { useEffect, useState } from 'react';
import '../App.css';

export default function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('https://683639ba664e72d28e4032f5.mockapi.io/productos')
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(error => console.error('Error al obtener los productos:', error));
  }, []);

  return (
    <div>
      <h1>Productos</h1>
      {productos.map(producto => (
        <div key={producto.id}>
          <h3>{producto.name}</h3>
          <p>Precio: ${producto.price}</p>
          <img src={producto.image} alt={producto.name} width={100} />
        </div>
      ))}
    </div>
  );
}
