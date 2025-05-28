import React, { useEffect, useRef, useState } from "react";
import { Link} from "react-router-dom";
import Cart from "../components/Cart"; // importa el componente del carrito

const Navbar = () => {
  const searchFormRef = useRef(null);
  const loginFormRef = useRef(null);
  const navbarRef = useRef(null);
 
  const [cartCount, setCartCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false); // <- estado para mostrar u ocultar el carrito

  const closeAll = () => {
    searchFormRef.current.classList.remove("active");
    loginFormRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };

  const toggleSearch = () => {
    searchFormRef.current.classList.toggle("active");
    loginFormRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };

  const toggleLogin = () => {
    loginFormRef.current.classList.toggle("active");
    searchFormRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };

  const toggleNavbar = () => {
    navbarRef.current.classList.toggle("active");
    searchFormRef.current.classList.remove("active");
    loginFormRef.current.classList.remove("active");
  };

  const toggleCart = () => {
    setIsCartOpen(prev => !prev); // <- abrir o cerrar el carrito
  };

  const actualizarContador = () => {
    const cart = JSON.parse(localStorage.getItem("carrito")) || [];
    const totalItems = cart.reduce((acc, item) => acc + item.cantidad, 0);
    setCartCount(totalItems);
  };

  useEffect(() => {
    const handleScroll = () => {
      closeAll();
    };
    window.addEventListener("scroll", handleScroll);
    actualizarContador();
    window.addEventListener("storage", actualizarContador);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("storage", actualizarContador);
    };
  }, []);

  return (
    <>
      <header className="header">
        <Link to="/" className="logo">
          Joja <span>Market</span>
        </Link>

        <nav className="navbar" ref={navbarRef}>
          <Link to="/">Home</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/checkout">Checkout</Link>
        </nav>

        <div className="icons">
          <div id="search-btn" onClick={toggleSearch}>
            <i className="fas fa-search"></i>
          </div>
          <div id="cart-btn" onClick={toggleCart} style={{ position: "relative" }}>
            <i className="fa-solid fa-cart-shopping"></i>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </div>
          <div id="login-btn" onClick={toggleLogin}>
            <i className="fas fa-user"></i>
          </div>
          <div id="menu-btn" onClick={toggleNavbar}>
            <i className="fas fa-bars"></i>
          </div>
        </div>

        <form className="search-form" ref={searchFormRef}>
          <input type="search" id="search-box" placeholder="Search here..." />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </form>

        <form className="login-form" ref={loginFormRef}>
          <h3>Login</h3>
          <input type="email" placeholder="Email registrado" className="box" required />
          <input type="password" placeholder="Contraseña" className="box" required />
          <p>
            ¿No estás registrado/a? <Link to="/contacto">Crea tu cuenta</Link>
          </p>
          <input type="submit" value="Login" className="btn" />
          <p id="errorMsg"></p>
        </form>
      </header>

      {/* Mostrar el carrito si está abierto */}
      <Cart isOpen={isCartOpen} toggleCart={toggleCart} />
    </>
  );
};

export default Navbar;
