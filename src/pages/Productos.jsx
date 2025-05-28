import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import "../App.css";

export default function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://683639ba664e72d28e4032f5.mockapi.io/productos")
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((error) =>
        console.error("Error al obtener los productos:", error)
      );
  }, []);
  const agregarAlCarrito = (producto) => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const productoExistente = carrito.find((item) => item.id === producto.id);

    if (productoExistente) {
      productoExistente.cantidad += 1;
    } else {
      carrito.push({ ...producto, cantidad: 1 });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    Swal.fire({
      icon: "success",
      title: "Agregado al carrito",
      text: `${producto.name} fue agregado correctamente.`,
      timer: 1500,
      showConfirmButton: false,
    });
  };
  return (
    <main>
      <section className="shop container" id="shop">
        <h1 className="heading">Productos</h1>
        <div className="list">
          {productos.map((producto) => (
            <div key={producto.id} className="item">
              <h3 className="product-name">{producto.name}</h3>
              <p className="product-price">Precio: ${producto.price}</p>
              <img src={producto.image} alt={producto.name} width={100}  className="product-img"/>
              <button
                className="add-cart btn"
                onClick={() => agregarAlCarrito(producto)}
              >
                Comprar
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
