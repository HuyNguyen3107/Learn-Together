const products = [
  { id: 1, name: "Galaxy 20", price: 200, brand: "Samsung" },
  { id: 1, name: "Galaxy 21", price: 200, brand: "Samsung" },
  { id: 1, name: "Galaxy A", price: 200, brand: "Samsung" },
  { id: 1, name: "Galaxy Note 20", price: 200, brand: "Samsung" },
  { id: 1, name: "Apple Watch 4", price: 200, brand: "Apple" },
];

// localStorage.setItem("products", "999");
// localStorage.setItem("product", JSON.stringify(products));

// console.log(localStorage.getItem("products"));

// const temp = JSON.parse(localStorage.getItem("product"));
// console.log(temp);

// localStorage.removeItem("products");

// localStorage.clear();

// Cookie

// document.cookie = `username=huy;expires=${new Date(
//   "2026-01-01 09:00:00"
// ).toUTCString()}`;

// document.cookie = `email=huy@gmail.com;expires=${new Date(
//   "2026-01-01 09:00:00"
// ).toUTCString()}`;

// const temp = document.cookie;
// console.log(temp);

document.cookie = `email=;expires=${new Date().toUTCString()}`;
