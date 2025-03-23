import React from "react";
import "./ProductDisplay.css";
import products from "../Assets/data"; // Import products
import Item from "../Item/Item"; // Use the Item component

const ProductDisplay = ({ searchTerm, selectedCategory }) => {
  // Filter products based on selected category and search term
  const filteredProducts = products.filter((product) => {
    // When category is "All", ignore category filtering but still apply the search filter
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    
    // Apply the search filter (ignoring case)
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearchTerm; // Only show products that match both
  });

  return (
    <div className="product-display">
      <h2>Showing {filteredProducts.length} results</h2>
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Item key={product.id} {...product} />
          ))
        ) : (
          
          <div className="no-results">
          <img src={require("../Assets/Search/no-results.png")} alt="No results" className="no-results-img" />
          <p className="grid-p">No products found within this category.</p>
        </div>
        )}
      </div>
    </div>
  );
};

export default ProductDisplay;


// import React from "react";
// import "./ProductDisplay.css";
// import products from "../Assets/data"; // Import products
// import Item from "../Item/Item"; // Use the Item component

// const ProductDisplay = ({ selectedCategory }) => {
//   // Filter products based on selected category
//   const filteredProducts = products.filter(
//     (product) => product.category === selectedCategory
//   );

//   return (
//     <div className="product-display">
//       <h2>Showing {filteredProducts.length} results</h2>
//       <div className="product-grid">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product) => (
//             <Item key={product.id} {...product} />
//           ))
//         ) : (
//           <p className="grid-p">No products found for this category.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductDisplay;
