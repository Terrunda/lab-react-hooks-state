import React from 'react'
import ProductCard from './ProductCard'

// Sample data
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = ({ category, onAddToCart }) => {
  // Filter logic
  const filteredProducts = sampleProducts.filter((product) => {
    if (category === "all") return true;
    return product.category === category;
  });

  // --- FIX 1: Handle Empty State ---
  // The test explicitly looks for this text when the filter finds nothing
  if (filteredProducts.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div>
      <h2>Available Products</h2>
      {filteredProducts.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onAddToCart={onAddToCart} 
        />
      ))}
    </div>
  )
}

export default ProductList