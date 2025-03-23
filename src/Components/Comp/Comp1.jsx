import React from 'react'
import './Comp1.css';
import img1 from '../Assets/Comp/1.jpg';
import img2 from '../Assets/Comp/2.jpg';

export const Comp1 = () => {
  return (
    <div className='comp1-body'>
    <div className='comp1-left'>
        <div className='comp1-img1'><img src={img1} alt="Skincare product 1" /></div>
        <div className='comp1-img2'><img src={img2} alt="Skincare product 2" /></div>
    </div>

    <div className='comp1-right'>
        <p>
            Our <b>earth.</b> skincare line suits all skin types with its gentle, organic ingredients.
            <br></br>
            <br></br>
            
            Our natural formulas ensure everyone, from oily to sensitive skin, enjoys healthy, radiant results. 
            Trust Earth. Skincare for universal care.
        </p>
    </div>
</div>

  )
}
export default Comp1;
