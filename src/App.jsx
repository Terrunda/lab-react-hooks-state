import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // Dark Mode State
  const [darkMode, setDarkMode] = useState("Dark");

  const toggleModeHandler = () => {
    setDarkMode(prev => prev === "Dark" ? "Light" : "Dark");
  };

  // Cart State
  const [cartItems, setCartItems] = useState([]);

  const updatecartItem = (item) => {
    setCartItems([...cartItems, item]) 
  }; 

  // Category Filter State
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  }

  return (
    <div className={darkMode} style={{ 
        backgroundColor: darkMode === "Dark" ? "#333" : "#FFF",
        color: darkMode === "Dark" ? "#FFF" : "#000",
        minHeight: "100vh",
        padding: "20px"
    }}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>
      
      <DarkModeToggle Mode={darkMode} ToggleMode={toggleModeHandler}/><br />

      <label>Filter by Category: </label>
      {/* 1. Attached the onChange handler here */}
      <select onChange={handleCategoryChange} value={selectedCategory}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      {/* 2. Passed the category and the add function down as props */}
      <ProductList 
        category={selectedCategory} 
        onAddToCart={updatecartItem} 
      />

      {/* 3. Passed the cartItems to Cart */}
      <Cart items={cartItems} />
    </div>
  )
}

export default App