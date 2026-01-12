// frontend/src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

function App() {
  const [products, setProducts] = useState([]);

  // Fetch data when component mounts
  useEffect(() => {
    // Note: ensure the port matches your backend (5000)
    axios.get('http://localhost:5000/api/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Product Store</h1>
      
      <div className="container">
        {products.length === 0 ? (
          <p>No products found. Add some via Postman or Curl!</p>
        ) : (
          // Mapping through the data and passing props to Card
          products.map((product) => (
            <Card 
              key={product._id} // MongoDB generates unique _id
              name={product.name}
              price={product.price}
              description={product.description}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;