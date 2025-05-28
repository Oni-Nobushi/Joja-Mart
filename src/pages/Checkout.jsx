import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

export function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    setCartItems(carrito);
    const total = carrito.reduce(
      (sum, item) => sum + item.price * item.cantidad,
      0
    );
    setTotal(total);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    Swal.fire({
      icon: "success",
      title: "¡Compra realizada!",
      text: "Gracias por tu compra.",
      timer: 2000,
      showConfirmButton: false,
    }).then(() => {
      localStorage.removeItem("carrito"); 
      navigate("/"); 
    });
  };
  return (
    <main className="main">
      <section className="checkout  container">
        <h1 className="heading ">Checkout</h1>
        <div className="container py-5">
          <h2 className="mb-4">Checkout</h2>

          <div className="row">
            <div className="col-md-6">
              <h4>Productos en el carrito</h4>
              {cartItems.length === 0 ? (
                <p>No hay productos.</p>
              ) : (
                <ul className="list-group mb-3">
                  {cartItems.map((item) => (
                    <li
                      key={item.id}
                      className="list-group-item d-flex justify-content-between lh-sm"
                    >
                      <div>
                        <h6 className="my-0">{item.name}</h6>
                        <small className="text-muted">
                          Cantidad: {item.cantidad}
                        </small>
                      </div>
                      <span className="text-muted">
                        ${item.price * item.cantidad}
                      </span>
                    </li>
                  ))}
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Total</span>
                    <strong>${total.toFixed(2)}</strong>
                  </li>
                </ul>
              )}
            </div>

            {/* Formulario del comprador */}
            <div className="col-md-6">
              <h4>Datos del comprador</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Nombre completo</label>
                  <input type="text" className="form-control" required />
                </div>

                <div className="mb-3">
                  <label className="form-label">Correo electrónico</label>
                  <input type="email" className="form-control" required />
                </div>

                <div className="mb-3">
                  <label className="form-label">Dirección</label>
                  <input type="text" className="form-control" required />
                </div>

                <div className="mb-3">
                  <label className="form-label">Teléfono</label>
                  <input type="tel" className="form-control" required />
                </div>

                <button type="submit" className="btn btn-success w-100 mt-3">
                  Finalizar compra
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Checkout;
