import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar2.css";
import logo from "../Assets/logo/earth.png";
import fav from "../Assets/Navbar/favourite.png";
import user from "../Assets/Navbar/user.png";
import cart from "../Assets/Navbar/shopping-cart.png";

export const Navbar2 = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="nav2">
      <div className="left">
        <img src={logo} alt="earth. logo" id="logo" />

        <nav className="nav-links">
          <Link
            to="/"
            className={menu === "home" ? "active button" : "button"}
            onClick={() => setMenu("home")}
          >
            HOME
          </Link>
          <Link
            to="/shop"
            className={menu === "shop" ? "active button" : "button"}
            onClick={() => setMenu("shop")}
          >
            SHOP
          </Link>
          <Link
            to="/about"
            className={menu === "about" ? "active button" : "button"}
            onClick={() => setMenu("about")}
          >
            ABOUT
          </Link>
        </nav>
      </div>

      <div className="right">
        {/* Replace a tag with Link to Cart page */}
        <Link to="/cart" rel="noopener noreferrer">
          <img src={cart} alt="Cart" />
        </Link>

        {/* Replace a tag with Link to Favourites page */}
        <Link to="/favourites" rel="noopener noreferrer">
          <img src={fav} alt="Favourites" />
        </Link>

        {/* User icon can stay as it is or you can add a link if needed */}
        <a href="" rel="noopener noreferrer">
          <img src={user} alt="User" />
        </a>
      </div>
    </div>
  );
};


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar2.css";
// import logo from "../Assets/logo/earth.png";
// import fav from "../Assets/Navbar/favourite.png";
// import user from "../Assets/Navbar/user.png";
// import cart from "../Assets/Navbar/shopping-cart.png";

// export const Navbar2 = () => {
//   const [menu, setMenu] = useState("home");

//   return (
//     <div className="nav2">
//       <div className="left">
//         <img src={logo} alt="earth. logo" id="logo" />

//         <nav className="nav-links">
//           <Link
//             to="/"
//             className={menu === "home" ? "active button" : "button"}
//             onClick={() => setMenu("home")}
//           >
//             HOME
//           </Link>
//           <Link
//             to="/shop"
//             className={menu === "shop" ? "active button" : "button"}
//             onClick={() => setMenu("shop")}
//           >
//             SHOP
//           </Link>
//           <Link
//             to="/about"
//             className={menu === "about" ? "active button" : "button"}
//             onClick={() => setMenu("about")}
//           >
//             ABOUT
//           </Link>
//         </nav>
//       </div>

//       <div className="right">
//         <a href="/" rel="noopener noreferrer">
//           <img src={cart} alt="Cart" />
//         </a>
//         <a href="" rel="noopener noreferrer">
//           <img src={fav} alt="Favourites" />
//         </a>
//         <a href="" rel="noopener noreferrer">
//           <img src={user} alt="User" />
//         </a>
//       </div>
//     </div>
//   );
// };
