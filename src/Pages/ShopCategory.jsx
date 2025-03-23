import React, { useContext } from 'react'
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import {Data} from '../Components/Assets/data';
import Menu from '../Components/Menu/Menu';
import Item from "../Components/Item/Item";


export const ShopCategory = (props) => {
    const {Data} = useContext(ShopContext);
  return (
    <div className='shop-category'>
        <p>
            <span>Showing 1-8 </span>out of 13 results
        </p>
        <div className='shopcategory-sort'>
            Sort by <img src={Menu} alt=''></img>
        </div>
        <div className='shopcategory-products'>
            {Data.map((item,i)=>{
                if (props.category==item.category){
                    return <Item key={item.id} id={item.id} name={item.name} image={item.image} price={item.price} />
                }
                else{
                    return null;
                }
            })}
        </div>
    </div>
  )
}
export default ShopCategory;
