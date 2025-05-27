import React, { useState } from 'react'
import './App.css'
import Navbar from './Navbar.jsx'

function App() {
  const [cart, setCart] = useState([])

  return (
    <>
      <Navbar />
    </>
  )
}

export default App