// src/components/Categories.jsx
import React from 'react';
import {Link} from 'react-router-dom'

const categories = [
  { img: '/assets/img/especias-elle-1-1666075143-removebg-preview.png', title: 'Especias' },
  { img: '/assets/img/veganologo-removebg-preview.png', title: 'Productos Veganos' },
  { img: '/assets/img/Heart Vegetables - 800x802.png', title: 'Vegetales' },
  { img: '/assets/img/Mixed Fruits in a Plate - 480x480.png', title: 'Frutas' },
  { img: '/assets/img/gluten-free-round-green_559531-67122.avif', title: 'Productos S/TACC' },
  { img: '/assets/img/83436103-logo-100-orgánico-con-hojas-producto-natural-comida-orgánica-y-saludable-insignia-de-alimentos.jpg', title: 'Bebidas Naturales' },
];

export default function Categories() {
  return (
    <section className="categories" id="categories">
      <h1 className="heading">Productos <span>Categorias</span></h1>
      <div className="box-container">
        {categories.map((cat, i) => (
          <div className="box" key={i}>
            <img src={cat.img} alt={cat.title} />
            <h3>{cat.title}</h3>
            <Link to="/products" className="btn">Shop Now</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
