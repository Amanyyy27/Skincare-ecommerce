import React, { useState } from 'react'
import  './Navbar.css'
import logo from '../Assets/logo/earth.png'
import {Link} from 'react-router-dom';

export const Navbar = () => {
  const[menu,setMenu] = useState("home");
  return (
    
    <div className='nav'>
      <ul>
        <li onClick={()=>{setMenu("home")}} class="list"><Link style={{textDecoration: 'none'}} to="/"><a href="#" class="button">HOME {menu==="home"}</a></Link></li>
        <li onClick={()=>{setMenu("shop")}} class="list"><Link style={{textDecoration: 'none'}} to="/shop"><a href="#" class="button">SHOP{menu==="shop"}</a></Link></li>
        <li>
            <img src={logo} alt="earth. logo" id="logo"/>
        </li>
        <li onClick={()=>{setMenu("about")}} class="list"><Link style={{textDecoration: 'none'}} to="/about"><a href="#" class="button">ABOUT{menu==="about"}</a></Link></li>
        <li onClick={()=>{setMenu("login")}} class="list"><Link style={{textDecoration: 'none'}} to="/login-signup"><a href="#" class="button">LOGIN{menu==="login"}</a></Link></li>
      </ul>


    </div>
  )
}
