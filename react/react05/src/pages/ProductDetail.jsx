import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const products = [
    { id: 1, name: "Laptop", price: 999.99 },
    { id: 2, name: "Smartphone", price: 499.99 },
    { id: 3, name: "Headphones", price: 199.99 },
    { id: 4, name: "Smartwatch", price: 299.99 },
    { id: 5, name: "Tablet", price: 399.99 },
  ];

  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>You are viewing details for product ID: {id}</p>
      <ul>
        {products
          .filter((product) => product.id === parseInt(id))
          .map((product) => (
            <li key={product.id}>
              <strong>{product.name}</strong> - ${product.price}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ProductDetail;
