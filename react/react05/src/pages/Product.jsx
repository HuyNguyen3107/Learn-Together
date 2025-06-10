import React from "react";
import { Link } from "react-router-dom";

function Product() {
  const products = [
    { id: 1, name: "Laptop", price: 999.99 },
    { id: 2, name: "Smartphone", price: 499.99 },
    { id: 3, name: "Headphones", price: 199.99 },
    { id: 4, name: "Smartwatch", price: 299.99 },
    { id: 5, name: "Tablet", price: 399.99 },
  ];
  return (
    <div>
      <h1>Product Page</h1>
      <p>
        Welcome to the product page! Here are some of our featured products:
      </p>
      <ul>
        {/* click Link to navigate detail product page */}
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              {product.name} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Product;
