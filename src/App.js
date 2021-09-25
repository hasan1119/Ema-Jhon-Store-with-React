import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header.js";
import Shop from "./components/shop/Shop.js";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => {
        setFilteredProduct(data)
        setProducts(data)
      });
  }, []);
  const handleFilter = (e) => {
    let query = e.target.value;
    let filtered = products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()))
    setFilteredProduct(filtered);
  };
  const handleAddToCart = (key) => {
    const selected = filteredProduct.find(product => product.key === key)
    const newSelected = [...selectedProduct, selected];
    setSelectedProduct(newSelected);
  }
  return (
    <div>
      <Header
        quantity={selectedProduct.length}
        eventHandler={handleFilter}
      ></Header>
      <Shop
        eventHandlerFunc={handleAddToCart}
        products={filteredProduct}
        selected={selectedProduct}
      ></Shop>
    </div>
  );
}

export default App;
