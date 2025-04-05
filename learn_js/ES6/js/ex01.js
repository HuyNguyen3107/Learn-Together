// let, const

// const a = 10;
// let b;
// var c;

// var c = 10;

// async await

// arrow function

// Lưu ý khi sử dụng arrow function

// - Arrow function không dùng để thay thế function truyền thống
// - Arrow function không binding được this
// - Arrow function không binding được arguments
// - Arrow function không nên được sử dụng làm method của object
// - Arrow function không có hoisting
// - Arrow function không được sử dụng để xây dựng hàm tạo (constructor)
// - Arrow function không có thuộc tính prototype

// const sum = () => {
//   console.log(arguments);
// };

// sum(1, 2, 3, 4, 5, 6);

// Destructuring: Phá vỡ cấu trúc của một Array, Object để truy cập vào các phần tử và gán thành các biến riêng biệt

// const user = {
//   user1: {
//     name: "Huy",
//     age: 21,
//     email: "huy@gmail.com",
//     "shipping-address": "Hanoi",
//   },
//   user2: {},
// };

// // const name = user.name;

// const { user2: user3, user1: user4 } = user;

// console.log(user3);
// console.log(user4);

// const users = [
//   {
//     name: "user1",
//     age: 18,
//   },
//   {
//     name: "user2",
//     age: 18,
//   },
//   {
//     name: "user3",
//     age: 18,
//   },
// ];

// const [user1, , user3] = users;
// console.log(user1);
// console.log(user3);

// console.log(name);

// console.log(user);

// Rest: Phần còn lại

// const users = [
//   {
//     name: "user1",
//     age: 18,
//   },
//   {
//     name: "user2",
//     age: 18,
//   },
//   {
//     name: "user3",
//     age: 18,
//   },
// ];

// const [user1, ...rest] = users;
// console.log(user1);
// console.log(rest);

// const user = {
//   user1: {
//     name: "Huy",
//     age: 21,
//     email: "huy@gmail.com",
//     "shipping-address": "Hanoi",
//   },
//   user2: {},
//   user3: {},
// };

// const { user2: user3, ...rest } = user;
// // console.log(rest);

// const getValue = (key) => {
//   const { [key]: value } = user;
//   return value;
// };

// console.log(getValue("user2"));

// let a = 10;
// let b = 20;

// a = a + b;
// b = a - b;
// a = a - b;

// console.log(a, b);

// [a, b] = [b, a];

// const arr = [b, a];

// [a, b] = arr;
// console.log(a);
// console.log(b);

// console.log(a, b);

// Spread Operator => Trải các phần tử array, object ra ngoài
// ...

// const oldObj = {
//   name: "Huy",
//   email: "huy@gmail.com",
// };

// const newObj = {
//   address: "Ha Noi",
//   ...oldObj,
// };

// const obj = {
//   ...newObj,
//   email: "duy@gmail.com",
// };
// console.log(obj);

// console.log(newObj);

// const sum = (a, b, c) => a + b + c;

// const arr = [1, 2, 3];

// console.log(sum(...arr));

// Enhance Object literal

// const username = "huy";
// const email = "huy@gmail.com";
// const age = 20;
// const address = "hanoi";
// const sum = (a, b, c) => a + b + c;

// const user = {
//   username,
//   email,
//   age,
//   address,
//   sum,
//   getName: () => {},
//   getAge() {},
// };

// console.log(user);
