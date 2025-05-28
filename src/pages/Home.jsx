import React from 'react'
import {Link} from 'react-router-dom'
import Servicios from '../components/Servicios';
import Categorias from '../components/Categorias'
import Footer from '../components/Footer';
import ReviewSection from '../components/ReviewSection'

export default function Home() {
  return (
   <>
     <section className="home">
    <div className="content">
        <h3>Productos Frescos y Organicos</h3>
        <p>Los apasionados por la salud integral y la alimentación natural no pueden perderse nuestros productos
        </p>

        <Link to="/productos" className="btn-home">Shop Now</Link>
    </div>

</section>
    <div>
      <Servicios/>
      <Categorias/>
      <ReviewSection/>
      <Footer/>
    </div>
   </>
  )
}
