import React from 'react'
import Slider from '../Components/Slider/Slider';
import Hero from '../Components/Hero/Hero';
import Comp1 from '../Components/Comp/Comp1';
import Comp2 from '../Components/Comp/Comp2';
import Popular from '../Components/Popular/Popular';

const home = () => {
  return (
    <div>
      <Slider></Slider>
      <Popular></Popular>
      <Comp1></Comp1>
      <Hero></Hero>
      <Comp2></Comp2>



    </div>
  )
}

export default home
