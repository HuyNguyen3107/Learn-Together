// DOM CSS

const p = document.querySelector("p");

// p.style.color = "red";
// p.style.fontSize = "24px";
// p.style.backgroundColor = "green";

const css = {
  color: "red",
  fontSize: "24px",
  backgroundImage: `url("https://picsum.photos/200/300")`,
  height: "100px",
  width: "100px",
  overflow: "auto",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

// console.log(p.style.color);
// console.log(p.style);

// const style = {
//   color: "",
//   fontSize: "",
//   background: "",
// };

// Object.assign(style, css);

// console.log(style);

Object.assign(p.style, css);

// 100px,
