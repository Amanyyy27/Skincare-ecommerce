import React, { createContext} from 'react'
import Data from '../Components/Assets/data';

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  return (
    <ShopContext.Provider value={Data}>
        {props.children}
    </ShopContext.Provider>
  )
}
export default ShopContextProvider;
