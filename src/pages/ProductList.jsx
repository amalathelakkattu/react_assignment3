import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from Fake Store API
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul style={{ listStyle: 'none' }}>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: '20px' }}>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <Link to={`/product/${product.id}`}>
              <button>View</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
