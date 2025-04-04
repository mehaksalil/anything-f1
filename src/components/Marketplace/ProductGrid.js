import React, { useState } from 'react';
import ProductDetail from './ProductDetail';
import './ProductGrid.css';

const ProductGrid = ({ products, addToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filters, setFilters] = useState({
    team: 'All Teams',
    category: 'All Categories'
  });
  const [sortBy, setSortBy] = useState('default');


  const teams = ['All Teams', ...new Set(products.map(p => p.teamAssociation))];
  const categories = ['All Categories', ...new Set(products.map(p => p.category))];

  const handleFilterChange = (filterType, value) => {
    setFilters({
      ...filters,
      [filterType]: value
    });
  };

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  // Filter products based on selected filters
  const filteredProducts = products.filter(product => {
    const teamMatch = filters.team === 'All Teams' || product.teamAssociation === filters.team;
    const categoryMatch = filters.category === 'All Categories' || product.category === filters.category;
    return teamMatch && categoryMatch;
  });

  // Sort products based on selected sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  const openProductDetail = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="product-grid-container">
      <div className="filter-sort-bar">
        <div className="filters">
          <select 
            value={filters.team}
            onChange={(e) => handleFilterChange('team', e.target.value)}
          >
            {teams.map(team => (
              <option key={team} value={team}>{team}</option>
            ))}
          </select>
          
          <select 
            value={filters.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        
        <div className="sorting">
          <select 
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="default">Default Sort</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
          </select>
        </div>
      </div>
      
      <div className="products-grid">
        {sortedProducts.length > 0 ? (
          sortedProducts.map(product => (
            <div 
              key={product.id} 
              className="product-card"
              onClick={() => openProductDetail(product)}
            >
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <h3>{product.name}</h3>
              <p className="product-team">{product.teamAssociation}</p>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <button 
                className="quick-add-button"
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
              >
                Quick Add
              </button>
            </div>
          ))
        ) : (
          <p className="no-products-message">No products match your filters</p>
        )}
      </div>
      
      {selectedProduct && (
        <ProductDetail 
          product={selectedProduct}
          addToCart={addToCart}
          closeDetail={closeProductDetail}
        />
      )}
    </div>
  );
};

export default ProductGrid;