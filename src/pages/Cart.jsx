import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "../App.css";

export default function Cart() {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(data);
  }, []);

  const eliminarProducto = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Este producto será eliminado del carrito.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const nuevoCarrito = carrito.filter((item) => item.id !== id);
        setCarrito(nuevoCarrito);
        localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));

        Swal.fire({
          icon: "success",
          title: "Eliminado",
          text: "El producto fue eliminado del carrito.",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  const vaciarCarrito = () => {
    Swal.fire({
      title: "¿Vaciar carrito?",
      text: "Se eliminarán todos los productos del carrito.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e74c3c",
      cancelButtonColor: "#aaa",
      confirmButtonText: "Sí, vaciar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        setCarrito([]);
        localStorage.removeItem("carrito");

        Swal.fire({
          icon: "success",
          title: "Carrito vacío",
          text: "Todos los productos fueron eliminados.",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  const calcularTotal = () => {
    return carrito.reduce(
      (total, producto) => total + producto.cantidad * producto.price,
      0
    );
  };

  return (
    <section className="carrito-container">
      <h2>Carrito</h2>
      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          {carrito.map((producto) => (
            <div key={producto.id} className="carrito-card">
              <h3 className="carrito-producto">{producto.name}</h3>
              <p className="descripcion-carrito">{producto.description}</p>
              <img
                className="carrito-image"
                src={producto.image}
                alt={producto.name}
              />
              <span>{producto.cantidad} unidades</span>
              <div className="carrito-unitario">
                <span>{producto.price} $ c/u</span>
              </div>
              <div className="carrito-sub">
                <span>{producto.cantidad * producto.price} $</span>
              </div>
              <button
                className="boton-carrito-eliminar"
                onClick={() => eliminarProducto(producto.id)}
              >
                X
              </button>
            </div>
          ))}

          <div className="carrito-total">
            <h3>Total a pagar: ${calcularTotal()}</h3>
            <button className="vaciar-carrito-btn" onClick={vaciarCarrito}>
              Vaciar carrito
            </button>
          </div>
        </>
      )}
    </section>
  );
}
