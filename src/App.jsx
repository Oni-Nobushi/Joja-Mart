import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import Navbar from './components/Navbar.jsx';
import Productos from './pages/Productos.jsx';
import Cart from './pages/Cart.jsx';
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
        <Route path="/cart" element={<Cart />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App