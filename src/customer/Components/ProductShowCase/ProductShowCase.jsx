import React from 'react';
import './ProductShowCase.css'; // Import your CSS file for styling

const ProductShowCase = (props) => {
  return (
    <div className="product-showcase">
      <img src={props.imageUrl} alt="Product Showcase" />
    </div>
  );
};

export default ProductShowCase;
