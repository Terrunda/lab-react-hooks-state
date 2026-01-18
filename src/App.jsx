import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // TODO: Implement state for dark mode toggle
  const [darkMode, darkModeToggle] = useState("Dark");
  
  const toggleModeHandler = () => {
    if (darkMode == "Dark") {
      darkModeToggle("Light")
    } else if (darkMode == "Light") {
      darkModeToggle("Dark")
    };
  };
  
  // TODO: Implement state for cart management
  const [cartItems, setCartItems] = useState([]);

  const updatecartItem = (item) => {
    setCartItems([...cartItems, item]) 
  };

  // TODO: Implement state for category filtering
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
      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle Mode={darkMode} ToggleMode={toggleModeHandler}/><br />
      
      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select onChange={handleCategoryChange} value={selectedCategory}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList 
        category={selectedCategory} 
        onAddToCart={updatecartItem} 
      />

      {/* TODO: Implement and render Cart component */}
      <Cart items={cartItems} />
    </div>
  )
}

export default App