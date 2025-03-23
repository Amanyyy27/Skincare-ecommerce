import React, { useState } from "react";
import "./Popular.css";
import data_products from "../Assets/data"; // Assuming this contains the products
import Item from "../Item/Item";

export const Popular = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4; // Number of items visible at a time

  // Filter data_products to include only products in the "Best Seller" category
  const bestSellerProducts = data_products.filter(product => 
    product.category.includes("Best Seller") // Assuming `category` is an array
  );

  const nextSlide = () => {
    if (startIndex + itemsPerPage < bestSellerProducts.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="popular">
      <h1>BEST SELLERS</h1>
      <div className="slider-container">
        <button className="prev-btn" onClick={prevSlide}>&lt;</button>
        <div className="popular-items">
          {bestSellerProducts.slice(startIndex, startIndex + itemsPerPage).map((item) => (
            <Item key={item.id} id={item.id} name={item.name} image={item.image} price={item.price} description={item.description}/>
          ))}
        </div>
        <button className="next-btn" onClick={nextSlide}>&gt;</button>
      </div>
    </div>
  );
};

export default Popular;


// import React, { useState } from "react";
// import "./Popular.css";
// import data_products from "../Assets/data";
// import Item from "../Item/Item";

// export const Popular = () => {
//   const [startIndex, setStartIndex] = useState(0);
//   const itemsPerPage = 4; // Number of items visible at a time

//   const nextSlide = () => {
//     if (startIndex + itemsPerPage < data_products.length) {
//       setStartIndex(startIndex + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (startIndex > 0) {
//       setStartIndex(startIndex - 1);
//     }
//   };

//   return (
//     <div className="popular">
//       <h1>BEST SELLERS</h1>
//       <div className="slider-container">
//         <button className="prev-btn" onClick={prevSlide}>&lt;</button>
//         <div className="popular-items">
//           {data_products.slice(startIndex, startIndex + itemsPerPage).map((item) => (
//             <Item key={item.id} id={item.id} name={item.name} image={item.image} price={item.price} />
//           ))}
//         </div>
//         <button className="next-btn" onClick={nextSlide}>&gt;</button>
//       </div>
//     </div>
//   );
// };

// export default Popular;
