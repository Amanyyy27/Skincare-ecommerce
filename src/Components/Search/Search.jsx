import React from "react";
import "./Search.css";
import Icon from "../Assets/Search/search-icon.png";

const Search = ({ onSearch }) => {
  // Handle search input change
  const handleSearchChange = (e) => {
    onSearch(e.target.value); // Pass search term back to the parent
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for products"
        onChange={handleSearchChange}
        className="search-input"
      />
      <img src={Icon} alt="search icon" className="search-icon" />
    </div>
  );
};

export default Search;



// import React from "react";
// import "./Search.css";
// import Icon from "../Assets/Search/search-icon.png";

// const Search = () => {
//   return (
//     <div className="search-container">
//       <input type="text" placeholder="Search" className="search-input" />

//       <img src={Icon} alt="" className="search-icon"></img>
//     </div>
//   );
// };

// export default Search;
