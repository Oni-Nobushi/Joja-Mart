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
    </>
  )
}

export default App