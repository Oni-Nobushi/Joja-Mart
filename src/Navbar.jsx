import React from 'react';

const Navbar = () => {
  return (
    <header className="header">
      <a href="/" className="logo">Joja <span>Market</span></a>

      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/productos">Productos</a>
        <a href="/recetas">Recetas</a>
        <a href="/contacto">Contacto</a>
      </nav>

      <div className="icons">
        <div id="search-btn"><i className="fas fa-search"></i></div>
        <div id="cart-btn"><i className="fa-solid fa-cart-shopping"></i></div>
        <div id="login-btn"><i className="fas fa-user"></i></div>
        <div id="menu-btn"><i className="fas fa-bars"></i></div>
      </div>

      <form className="search-form">
        <input type="search" id="search-box" placeholder="Search here..." />
        <label htmlFor="search-box" className="fas fa-search"></label>
      </form>

      <form className="login-form" id="loginForm">
        <h3>Login</h3>
        <input type="email" placeholder="Email registrado" className="box" id="email" required />
        <input type="password" placeholder="Contraseña" className="box" id="password" required />
        <p>¿No estás registrado/a? <a href="/contacto">Crea tu cuenta</a></p>
        <input type="submit" value="Login" className="btn" />
        <p id="errorMsg"></p>
      </form>
    </header>
  );
};

export default Navbar;