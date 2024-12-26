import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams(); // Retrieve the product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details using the ID
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error('Error fetching product details:', error));
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>Product Details</h1>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ width: '200px' }} />
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <Link to="/">
        <button>Back to Products</button>
      </Link>
    </div>
  );
};

export default ProductDetail;
