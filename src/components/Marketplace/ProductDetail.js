import React, { useState } from 'react';
import './ProductDetail.css';

const ProductDetail = ({ product, addToCart, closeDetail }) => {
  const [quantity, setQuantity] = useState(1);
  
  if (!product) return null;
  
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    closeDetail();
  };
  
  return (
    <div className="product-detail-overlay">
      <div className="product-detail-container">
        <button className="close-button" onClick={closeDetail}>×</button>
        
        <div className="product-detail-content">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>
          
          <div className="product-detail-info">
            <h2>{product.name}</h2>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <p className="product-team">Team: {product.teamAssociation}</p>
            <p className="product-category">Category: {product.category}</p>
            <p className="product-description">{product.description}</p>
            
            <div className="quantity-selector">
              <button onClick={handleDecrement}>-</button>
              <span>{quantity}</span>
              <button onClick={handleIncrement}>+</button>
            </div>
            
            <button 
              className="add-to-cart-button"
              onClick={handleAddToCart}
            >
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;