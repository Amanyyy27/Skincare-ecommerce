import React, { useState } from 'react';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Navbar2 } from './Components/Navbar/Navbar2';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Favourites from './Pages/Favourites';
import LoginSignup from './Pages/LoginSignup';
import ShopCategory from './Pages/ShopCategory';
import About from './Pages/About';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login

  const handleLogin = () => {
    setIsLoggedIn(true); // Update login state when the user logs in
  };

  return (
    <div>
      <BrowserRouter>
        {isLoggedIn ? <Navbar2 /> : <Navbar />} {/* Switch navbar */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />}>
            <Route path=':productId' element={<Shop />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/favourites' element={<Favourites />} />
          <Route path='/eye care' element={<ShopCategory category='eye-care' />} />
          <Route path='/lip care' element={<ShopCategory category='lip-care' />} />
          <Route path='/cleansing' element={<ShopCategory category='cleansing' />} />
          <Route path='/exfoliating' element={<ShopCategory category='exfoliating' />} />
          <Route path='/about' element={<About />} />
          <Route path='/login-signup' element={<LoginSignup onLogin={handleLogin} />} /> 
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
