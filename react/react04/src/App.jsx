import React from "react";
import { useState } from "react";
import ProductList from "./components/ProductList";
import MoneyTransfer from "./components/MoneyTransfer";
import Counter from "./components/Counter";
// const products = [
//   { id: 1, name: "Product A", price: 100, description: "Description A" },
//   { id: 2, name: "Product B", price: 200, description: "Description B" },
//   { id: 3, name: "Product C", price: 300, description: "Description C" },
// ];
function App() {
  // const [count, setCount] = useState(0);
  // const [products, setProducts] = useState([
  //   { id: 1, name: "Product A", price: 100, description: "Description A" },
  //   { id: 2, name: "Product B", price: 200, description: "Description B" },
  //   { id: 3, name: "Product C", price: 300, description: "Description C" },
  // ]);
  // const addProduct = () => {
  //   const newProduct = {
  //     id: products.length + 1,
  //     name: `Product ${String.fromCharCode(65 + products.length)}`,
  //     price: (products.length + 1) * 100,
  //     description: `Description ${String.fromCharCode(65 + products.length)}`,
  //   };
  //   setProducts([...products, newProduct]);
  // };
  return (
    <div>
      {/* <h1>Danh sách sản phẩm</h1>
      <button onClick={addProduct}>Thêm sản phẩm mới</button>
      <button onClick={() => setCount(count + 1)}>Tăng đếm: {count}</button>
      <ProductList products={products} /> */}
      {/* <h1>Chuyển tiền</h1>
      <MoneyTransfer /> */}
      <Counter />
    </div>
  );
}

export default App;
