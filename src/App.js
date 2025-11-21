import React, { useState } from 'react'
import Navbar from './Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Cart from './pages/Cart/Cart.jsx'
import PlaceOrder from './pages/PlaceOrder/Placeo.jsx'
import Footer from './Footer.jsx'
import LoginUp from './LoginUp.jsx'

const App = () => {
    const [showLogin , setShowLogin] = useState(false)
  return (
    <>
    {showLogin? <LoginUp setShowLogin={setShowLogin} />:<></>}
        <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
      </Routes>
    </div>
    <Footer />
    </>

  )
}

export default App