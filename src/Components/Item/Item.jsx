import React, { useState } from "react";
import "./Item.css";

export const Item = (props) => {
  const [showModal, setShowModal] = useState(false);

  // Open the modal when the item is clicked
  const handleClick = () => {
    setShowModal(true);
  };

  // Close the modal when the close button is clicked
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [quantity, setQuantity] = useState(1); // Starting quantity is 1

  // Function to increase quantity
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Function to decrease quantity (min 1)
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      {/* Item Box */}
      <div className="item-box" onClick={handleClick}>
        <div className="item-image">
          <img src={props.image} alt={props.name} />
        </div>
        <div className="item-details">
          <p className="item-name">{props.name}</p>
          <p className="item-price">{props.price}</p>
          <button className="add-to-cart">ADD TO CART</button>
        </div>
      </div>

      {/* Modal for item details */}
{/* Modal for item details */}
{showModal && (
  <div className="modal-overlay" onClick={handleCloseModal}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-btn" onClick={handleCloseModal}>
        X
      </button>

      <div className="modal-upper">
        <div className="modal-left">
          <hr />
          <h2>{props.name}</h2>
          <p>{props.price}</p>

          <div className="control-buttons">
            <div className="quantity-control">
              <button className="quantity-btn" onClick={decreaseQuantity}>
                -
              </button>
              <span className="quantity">{quantity}</span>
              <button className="quantity-btn" onClick={increaseQuantity}>
                +
              </button>
            </div>
            <button className="add-to-cart">ADD TO CART</button>
          </div>

          <hr />
        </div>

        <div className="modal-right">
          <img
            src={props.image}
            alt={props.name}
            className="modal-image"
          />
        </div>
      </div>

      {/* Move product description below the modal content */}
      <div className="modal-description">
        <p className="modal-des">{props.description}</p>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Item;

// import React from 'react';
// import './Item.css';

// export const Item = (props) => {
//   return (
//     <div className='item-box'>
//       <div className='item-image'>
//         <img src={props.image} alt={props.name} />
//       </div>
//       <div className='item-details'>
//         <p className='item-name'>{props.name}</p>
//         <p className='item-price'>{props.price}</p>
//         <button className='add-to-cart'>ADD TO CART</button>
//       </div>
//     </div>
//   );
// }

// export default Item;
