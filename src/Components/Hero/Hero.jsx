import React from 'react'
import "./Hero.css";
import Hero_image from '../Assets/Hero/Hero_image.jpg';

export const Hero = () => {
  return (
    <div className='hero'>
        <div className='herodiv'>
            <div className='hero-left'>
                <img  src={Hero_image} alt="" className='hero-image'></img>
            </div>


            <div className='hero-right'>
                <h2>ENCHANTED EARTHLIGHT</h2>
                <p>Immerse yourself in a dreamy blend of nature’s most mystical elements and transformative botanicals, designed to illuminate and nourish your skin with otherworldly radiance.</p>
                <button className='hero_button'><div >SHOP LATEST COLLECTION</div></button>
            </div>
        </div>
    
    </div>
  )
}

export default Hero;
