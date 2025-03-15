// Event Object

// -> Object để mô tả thông tin của một sự kiện
// -> Mỗi nhóm sự kiện sẽ có thông tin mô tả khác nhau

// const btn = document.querySelector("button");
// const input = document.querySelector("input");
// btn.addEventListener("click", (e) => {
//   console.log(e);
// });

// btn.addEventListener("mousedown", (a) => {
//   console.log(a);
// });

// input.addEventListener("input", (e) => {
//   console.log(e);
// });

// let offsetX = 0;
// let offsetY = 0;

// const handleDrag = (e) => {
//   const clientX = e.clientX;
//   const clientY = e.clientY;
//   Object.assign(btn.style, {
//     position: "absolute",
//     left: `${clientX - offsetX}px`,
//     top: `${clientY - offsetY}px`,
//   });
// };

// btn.addEventListener("mousedown", (e) => {
//   offsetX = e.offsetX;
//   offsetY = e.offsetY;
//   document.addEventListener("mousemove", handleDrag);
// });

// document.addEventListener("mouseup", () => {
//   document.removeEventListener("mousemove", handleDrag);
// });

// const btn = document.querySelector("button");
// const input = document.querySelector("input");
// const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
// });

const parent = document.querySelector(".parent");
const children = document.querySelector(".child");

parent.addEventListener("click", (e) => {
  console.log("ok");
});

children.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("ok2");
});
