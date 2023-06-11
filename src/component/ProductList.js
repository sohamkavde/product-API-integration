import React, { useEffect, useState } from 'react';
import './product.css';
const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="Allproduct">
          
        {products.map((product) => (
          <div className="products">
            <img src={product.image} alt="" />
            <b>{product.title}</b>
            <p><i>Price</i>:{product.price}</p>
            <p>{product.description}</p>
          </div>
        ))}
     
    </div>
  );
};

export default ProductList;
