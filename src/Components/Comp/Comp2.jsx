import React from 'react'
import './Comp2.css';
import icon1 from '../Assets/Comp/icon1.png';
import icon2 from '../Assets/Comp/icon2.png';
import comp2Bg from '../Assets/Comp/Comp2bg.jpg';

export const Comp2 = () => {
  return (
    <div className="comp2-body" style={{ backgroundImage: `url(${comp2Bg})` }}>
    <div className='comp2-inner'>
        <div className='comp2-left'>
            <div><img src={icon1} alt='Organic Icon' /></div>
            <div><p><h2>ORGANIC</h2></p></div>
        </div>
        <div className='comp2-right'>
            <div><img src={icon2} alt='Non-Toxic Icon' /></div>
            <div><p><h2>NON-TOXIC</h2></p></div>
        </div>
    </div>
</div>

  )
}

export default Comp2;
