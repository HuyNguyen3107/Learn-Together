// Làm Javascript chạy được

// JavaScript Engine (V8)
// JavaScript Runtime: Môi trường chạy Js

// - Browser API (Web APIs) --> Trình duyệt (Xây dựng sẵn các hàm: setTimeout, setInterval, fetch)
// - Node

// Cụ thể
// - Nếu Js chạy trên trình duyệt thì sẽ là Web APIs bọc V8
// - Nếu mà chạy trên server thì NodeJS bọc V8 (NodeJs được xây dựng từ C++)

// JS là single-thread (đơn luồng): Tại một thời điểm chỉ chạy được một tác vụ

// Cấu tạo của JS engine
//  - HEAP: Bộ nhớ
//  - Call Stack: nơi chứa các tác vụ cần gọi (tại 1 thời điểm chỉ có 1 tác vụ)

// console.log(1);
// alert("hi");
// console.log(2);

// Bất đồng bộ (asynchronous): Các hàm được xây dựng sẵn bởi JS runtime
// - setTimeout
// - setInterval
// - fetch
// - Event: click, mouseup, ...

// Đặc điểm chung: đều có callback

setTimeout(() => {
  console.log("ok");
}, 0);

console.log("hi");
console.log(4);
console.log(4);
console.log(4);
console.log(4);
console.log(4);
