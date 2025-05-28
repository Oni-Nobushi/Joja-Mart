import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
    <div className="footer-content">

        <div className="footer-box">
            <h3 className="title-logo">Natural <span>Market</span></h3>

            <p>Siguenos en nuestras redes!!</p>
            <div className="social">
                <a href="#" className="fab fa-facebook"></a>
                <a href="#" className="fa-brands fa-square-instagram"></a>
                <a href="#" className="fab fa-twitter"></a>
            </div>
        </div>


        <div className="footer-box">
            <h3>Contact Info</h3>
            <a href="#"><i className="fab fa-whatsapp-square"></i>+54 9 11 5555 5555</a>
            <a href="#"><i className="fa-solid fa-phone"></i>+54 9 11 2222 2222</a>
            <a href="./src/pages/contact.html"><i className="fa-solid fa-envelope"></i>jojamarket@gmail.com</a>
            <a href="#"><i className="fa-solid fa-location-dot"></i>Av.Dr.Tristán Achával Rodríguez,Buenos Aires</a>
        </div>


        <div className="footer-box">
            <h3>Links</h3>
            <a href="index.html"><i className="fa-solid fa-arrow-right"></i>Home</a>
            <a href=""><i className="fa-solid fa-arrow-right"></i>Productos</a>
            <a href=""><i className="fa-solid fa-arrow-right"></i>Recetas</a>
            <a href=""><i className="fa-solid fa-arrow-right"></i>Contacto</a>
        </div>


        <div className="footer-box">
            <h3>Novedades</h3>
            <p>Subcribite para tener todas las novedades</p>
            <input type="email" placeholder="Email" className="email"/>
            <input type="submit" value="Suscribete" className="btn"/>

        </div>


        <div className="footer-box">
            <h3>Información adicional</h3>

            <a href="#"><i className="fa-solid fa-arrow-right"></i>Gastos de envío</a>
            <a href="#"><i className="fa-solid fa-arrow-right"></i>Política de devoluciones</a>
            <a href="#"><i className="fa-solid fa-arrow-right"></i>Cómo hacer un pedido</a>
            <a href="#"><i className="fa-solid fa-arrow-right"></i>Seguimiento de envío</a>
            <p className="payment-title">Medios de pago:</p>
            <img src="../assets/img/payment-img.png" alt="medios de pago" className="payment-img"/>

        </div>

      

    </div>

   

    <div className="copyright">
        &copy; 202 <span>JOJAmarket</span> - Todos los Derechos Reservados.
    </div>
</footer>
  )
}
