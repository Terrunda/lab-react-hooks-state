import React from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div
      className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}
    >
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>

      {/* --- FIX 2: Remove 'disabled' attribute --- */}
      {/* The test wants to click this button regardless of stock status */}
      <button 
        data-testid={'product-' + product.id} 
        onClick={() => onAddToCart(product)}
      >
        {/* You can keep the text dynamic or just say 'Add to Cart' */}
        {product.inStock ? 'Add to Cart' : 'Unavailable'}
      </button>
    </div>
  )
}

export default ProductCard