import React, { useState } from "react";
import "./Menu.css";

const categories = [
  "All", 
  "Best Sellers",
  "Lip Care",
  "Hair Care",
  "Exfoliating",
  "Moisturizing",
  "Face Mask",
  "Toning",
  "Massaging Tools",
  "Bath & Body",
];

const Menu = ({ onSelectCategory }) => {
  const [selected, setSelected] = useState("All");

  const handleSelect = (category) => {
    setSelected(category);
    onSelectCategory(category); // Pass selected category to parent
  };

  return (
    <div className="menu">
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            className={selected === category ? "active" : ""}
            onClick={() => handleSelect(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;


// import React, { useState } from "react";
// import "./Menu.css";

// const categories = [
//   "Lip Care",
//   "Hair Care",
//   "Exfoliating",
//   "Moisturizing",
//   "Face Mask",
//   "Toning",
//   "Massaging Tools",
//   "Bath & Body",
// ];

// const Menu = () => {
//   const [selected, setSelected] = useState("Lip Care");

//   return (
//     <div className="menu">
//       <ul>
//         {categories.map((category) => (
//           <li
//             key={category}
//             className={selected === category ? "active" : ""}
//             onClick={() => setSelected(category)}
//           >
//             {category}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Menu;
