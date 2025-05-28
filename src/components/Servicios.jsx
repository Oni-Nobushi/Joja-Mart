// src/components/Servicios.jsx
import React from 'react';

const servicios = [
  {
    img: '/assets/img/food_delivery_service_restaurant_order_icon_187259.png',
    title: 'Delivery',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, accusamus.',
  },
  {
    img: '/assets/img/payment_icon_194171.png',
    title: 'Pago Seguro',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, accusamus.',
  },
  {
    img: '/assets/img/customer_support_help_service_icon_192442.png',
    title: 'Soporte 24/7',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, accusamus.',
  },
];

export default function Servicios() {
  return (
    <section className="servicios" id="servicios">
      <h1 className="heading">Nuestros <span>Servicios</span></h1>
      <div className="box-container">
        {servicios.map((servicio, i) => (
          <div className="box" key={i}>
            <img src={servicio.img} alt={servicio.title} />
            <h3>{servicio.title}</h3>
            <p>{servicio.text}</p>
            <a href="#" className="btn">Read more</a>
          </div>
        ))}
      </div>
    </section>
  );
}
