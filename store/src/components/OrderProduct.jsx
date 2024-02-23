import React from "react";
import "./ProductDetails.css";

const ProductDetails = ({ product }) => {
  const { imageUrl, title, author, seller, price } = product;

  return (
    <div className="product-container">
      <img src={imageUrl} alt={title} className="product-image" />
      <div className="product-details">
        <h2 className="product-title">{title}</h2>
        <p className="product-author">{author}</p>
        <div className="product-seller-price">
          <p className="product-seller">Seller: {seller}</p>
          <p className="product-price">₹{price}</p>
        </div>
        <div className="product-offer-coupon">
          <p>1 Offer & 1 Coupon Applied</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
