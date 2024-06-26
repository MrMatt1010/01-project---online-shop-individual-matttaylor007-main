import { React, useEffect, useState } from "react";
import "./App.css";
import Products from "./Components/Products";

// The function that makes the fetch request to the Products API
import { getProducts } from "./services/getProducts";

function App() {
  // use the products variable to read all of your products
  // and display them on your page
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const products = await getProducts();
      setProducts(products);
    };

    loadData();
  }, []);

  return (
    <>
      <div className="container">
        <h1>Matt's Mechanical Keyboards</h1>

        <Products products={products} />
      </div>
    </>
  );
}

export default App;
