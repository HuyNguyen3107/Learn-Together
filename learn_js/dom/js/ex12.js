// DOM Node

// const h1 = document.querySelector("h1");

// console.log(h1);

const container = document.querySelector(".container");

// console.log(container.children);

// container.childNodes.forEach((item) => {
//   console.log(item.nodeValue);
// });

const dataList = [
  {
    name: "Huy",
    age: 21,
    address: "Ha Noi",
  },
  {
    name: "An",
    age: 25,
    address: "Bac Ninh",
  },
  {
    name: "Duy",
    age: 23,
    address: "Hai Phong",
  },
];

// Tạo được element

// let result = `<ul>`;

// dataList.forEach((data, index) => {
//   const info = `
//             <li>
//                 <span>${data.name}</span>
//                 <span>${data.age}</span>
//                 <span>${data.address}</span>
//             </li>
//     `;
//   result += info;
//   if (index === dataList.length - 1) {
//     result += `</ul>`;
//   }
// });

// let result = dataList.reduce((prev, current, index) => {
//   const info = `
//             <li>
//                 <span>${current.name}</span>
//                 <span>${current.age}</span>
//                 <span>${current.address}</span>
//             </li>
//     `;
//   if (index === dataList.length - 1) {
//     return prev + info + `</ul>`;
//   }
//   return prev + info;
// }, `<ul>`);

// container.innerHTML = result;

// const ul = document.createElement("ul");

// dataList.forEach((data, index) => {
//   const li = document.createElement("li");
//   for (const key in data) {
//     const span = document.createElement("span");
//     span.innerText = data[key];
//     li.append(" ", span);
//   }
//   ul.append(li);
// });

// container.append(ul);

// const ul = document.querySelector("ul");

// const li = document.createElement("li");
// li.innerText = 4;

// console.log(ul.children[2]);

// ul.append(li);
// ul.prepend(li);

// ul.append(li);

// insertBefore
// ul.insertBefore(li, ul.children[2]);
// container.append(li);

// const h1 = document.querySelector("h1");

// const p = document.createElement("p");

// p.innerText = "description";

// // container.insertBefore(p, h1.nextElementSibling);

// // container.replaceChild(p, h1);

// container.removeChild(h1);

// container.remove();

const span = document.createElement("span");

const textNode = document.createTextNode(0);

// span.innerText = 0;

span.append(textNode);

const increaseBtn = document.createElement("button");
const decreaseBtn = document.createElement("button");

increaseBtn.innerText = "+";
decreaseBtn.innerText = "-";

container.append(increaseBtn, " ");
container.append(span, " ");
container.append(decreaseBtn);

increaseBtn.addEventListener("click", (e) => {
  // const el = e.target.nextElementSibling;
  // el.innerText = +el.innerText + 1;
  textNode.data++;
});

decreaseBtn.addEventListener("click", (e) => {
  // const el = e.target.previousElementSibling;
  // if (+el.innerText > 0) {
  //   el.innerText = +el.innerText - 1;
  // }
  if (+textNode.data > 0) {
    textNode.data--;
  }
  // const h1 = document.createElement("h1");
  // h1.innerText = "title";
  // container.replaceChild(h1, span);

  // container.innerHTML = `<h1>OK</h1>`;
});
