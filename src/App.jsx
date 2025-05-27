import React, { useState } from 'react'
import './App.css'
import Navbar from './Navbar.jsx'
import Cart from './Cart.jsx'
import ProductList from './ProductList.jsx' 

function App() {
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState([])

  return (
    <>
      <Navbar />
      <Cart cart={cart} />
      {/* Acá podés seguir con el resto de tu UI */}
    </>
  )
}

export default App