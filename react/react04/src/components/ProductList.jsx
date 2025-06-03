import React from "react";
import { memo } from "react";

const ProductList = memo(function ProductList({ products }) {
  console.log("ProductList rendered");
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
        </li>
      ))}
    </ul>
  );
});

export default ProductList;
