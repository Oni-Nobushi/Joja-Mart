import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Swal from "sweetalert2";

const Cart = ({ isOpen, toggleCart }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const navigate = useNavigate(); 

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("carrito")) || [];
    setCartItems(storedCart);
  }, [isOpen]);

  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.cantidad, 0);
    setCartTotal(total);
  }, [cartItems]);

  const updateCart = (items) => {
    localStorage.setItem("carrito", JSON.stringify(items));
    setCartItems(items);
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    updateCart(updatedCart);
    Swal.fire({
      icon: "success",
      title: "Producto eliminado",
      timer: 1200,
      showConfirmButton: false,
    });
  };

  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
    );
    updateCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cartItems.map(item =>
      item.id === id && item.cantidad > 1
        ? { ...item, cantidad: item.cantidad - 1 }
        : item
    );
    updateCart(updatedCart);
  };

  const irACheckout = () => {
    toggleCart(); // cierra el modal
    navigate("/checkout"); // redirige
  };

  return (
    <div
      className={`modal fade show ${isOpen ? "d-block" : "d-none"}`}
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      onClick={toggleCart}
    >
      <div
        className="modal-dialog modal-dialog-scrollable"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Carrito de compras</h5>
            <button type="button" className="btn-close" onClick={toggleCart}></button>
          </div>

          <div className="modal-body">
            {cartItems.length === 0 ? (
              <p>El carrito está vacío</p>
            ) : (
              cartItems.map((item) => (
                <div className="cartItem mb-3" key={item.id}>
                  <div>
                    <p className="mb-1">{item.name}</p>
                    <small>Subtotal: ${item.price * item.cantidad}</small>
                  </div>
                  <div className="d-flex align-items-center gap-2 mt-2">
                    <button className="btn btn-sm btn-outline-secondary" onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.cantidad}</span>
                    <button className="btn btn-sm btn-outline-secondary" onClick={() => increaseQuantity(item.id)}>+</button>
                    <button className="btn btn-sm btn-outline-danger" onClick={() => removeFromCart(item.id)}>Eliminar</button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="modal-footer">
            <h5 className="me-auto">Total: ${cartTotal.toFixed(2)}</h5>
            <button className="btn btn-secondary" onClick={toggleCart}>Cerrar</button>
            <button className="btn btn-success" onClick={irACheckout}>Finalizar compra</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
