import React, { useState } from "react";
import Menu from "../Components/Menu/Menu";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import Search from "../Components/Search/Search";
import Popular from "../Components/Popular/Popular";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All"); // Default category
  const [searchTerm, setSearchTerm] = useState("");

  // Handle search input change
  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  // Handle category selection change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Search onSearch={handleSearchChange} />

      <div style={{ display: "flex", flexDirection: "row", paddingBottom: '100px' }}>
        <Menu onSelectCategory={handleCategoryChange} />

        <ProductDisplay searchTerm={searchTerm} selectedCategory={selectedCategory} />
      </div>
    </div>
  );
};

export default Shop;


// import React from 'react'
// import Popular from '../Components/Popular/Popular';
// import Search from '../Components/Search/Search';
// import Menu from '../Components/Menu/Menu';
// import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

// export const shop = () => {
//   return (
//     <div>
//       <Search></Search>

//       <div style={{ display: "flex", flexDirection: "row" }}>
//         <Menu />
//         <ProductDisplay />
//       </div>

//       <Popular></Popular>
      
      
//     </div>
//   )
// }
// export default shop