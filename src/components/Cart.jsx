
import { useCart } from "../hooks/useCart"; 

const Cart = ({ isOpen, toggleCart }) => {
  const {
    cartItems,
    cartTotal,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
  } = useCart();

  return (
    <div className={`cartTab ${isOpen ? "open" : ""}`}>
      <h1 className="cartTitle">Shopping Cart</h1>
      <div className="listCart">
        {cartItems.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div className="cartItem" key={item.id}>
              <div>
                <p>{item.title}</p>
                <p>Price: ${item.price * item.quantity}</p>
              </div>

              <div className="quantity">
                <button
                  className="minus"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>
                <p className="cant">{item.quantity}</p>
                <button
                  className="plus"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                X
              </button>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="cartTotal">
          <h3>Total: ${cartTotal.toFixed(2)}</h3>
        </div>
      )}

      <div className="btn">
        <button className="close" onClick={toggleCart}>
          CLOSE
        </button>
        <button className="checkOut">Check Out</button>
      </div>
    </div>
  );
};

export default Cart;
