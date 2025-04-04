import React, { useState, useEffect } from 'react';
import ProductGrid from './ProductGrid';
import Cart from './Cart';
import './Marketplace.css';

const Marketplace = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchProducts = () => {
      setLoading(true);
      setTimeout(() => {
        setProducts(sampleProducts);
        setLoading(false);
      }, 800);
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    

    setIsCartOpen(true);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    
    setCart(cart.map(item => 
      item.id === productId 
        ? { ...item, quantity: newQuantity } 
        : item
    ));
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  if (loading) {
    return <div className="loading">Loading merchandise...</div>;
  }

  return (
    <div className="marketplace-container">
      <div className="marketplace-header">
        <h1>Anything F1 Merchandise</h1>
        <div className="cart-icon" onClick={toggleCart}>
          <span>🛒</span>
          {cart.length > 0 && <span className="cart-count">{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>}
        </div>
      </div>
      
      <div className="marketplace-content">
        <ProductGrid 
          products={products} 
          addToCart={addToCart}
        />
        
        {isCartOpen && (
          <Cart 
            items={cart}
            total={calculateTotal()}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
            closeCart={() => setIsCartOpen(false)}
          />
        )}
      </div>
    </div>
  );
};


const sampleProducts = [
  {
    id: 1,
    name: "Red Bull Racing 2025 Team Cap",
    price: 39.99,
    image: "redbullcap.jpeg",
    teamAssociation: "Red Bull Racing",
    category: "Apparel",
    description: "Official Red Bull Racing team cap for the 2025 season. Features team logo and sponsor branding."
  },
  {
    id: 2,
    name: "Ferrari Team T-Shirt",
    price: 49.99,
    image: "ferrarishirt.jpeg",
    teamAssociation: "Ferrari",
    category: "Apparel",
    description: "Official Ferrari team t-shirt with breathable fabric and team logo on front and back."
  },
  {
    id: 3,
    name: "Mercedes AMG Petronas Jacket",
    price: 129.99,
    image: "mercedesjacket.png",
    teamAssociation: "Mercedes",
    category: "Apparel",
    description: "Premium Mercedes AMG Petronas team jacket. Water-resistant and features embroidered logos."
  },
  
];

export default Marketplace;