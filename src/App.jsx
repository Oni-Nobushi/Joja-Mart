import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import Navbar from './components/Navbar.jsx';
import Productos from './pages/Productos.jsx';
import Checkout from './pages/Checkout.jsx';
import Contacto from './pages/Contacto.jsx';
import Home from './pages/Home.jsx';
import Footer from './components/Footer.jsx'

function App() {


  return (
    <>
      
      <Router>
      <Navbar/>
      
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App