// JS là ngôn ngữ lập trình bất đồng bộ
// console.log(1);
// console.log(2);
// setTimeout(() => {
//   console.log(3);
// }, 1000);
// console.log(4);
// console.log(5);

// Callback (trước khi  có ES6)
// Promise (sau khi có ES6)
// async await (ES7)

// const getA = (callback) => {
//   setTimeout(() => {
//     console.log("A");
//     callback();
//   }, 1000);
// };

// const getB = (callback) => {
//   setTimeout(() => {
//     console.log("B");
//     callback();
//   }, 3000);
// };

// const getC = () => {
//   setTimeout(() => {
//     console.log("C");
//   }, 2000);
// };

// const getD = () => {
//   setTimeout(() => {
//     console.log("D");
//   }, 1500);
// };

// const temp = () => {
//   getB(() => {
//     getC(getD);
//   });
// };

// getA(temp);
