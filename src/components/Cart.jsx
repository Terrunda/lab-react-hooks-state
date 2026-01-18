import React from 'react'

const Cart = ({ items }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {items.length === 0 ? <p>Cart is empty</p> : (
        <ul>
          {/* TODO: Implement Add to Cart button functionality */}
            {items.map((item, index) => (
                <li key={index}>{item.name} is in your cart.</li>
            ))}
        </ul>
      )}
    </div>
  )
}

export default Cart