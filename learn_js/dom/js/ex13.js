const checkAll = document.querySelector(".check-all");
const checkItemList = document.querySelectorAll(".check-item");

const button = document.createElement("button");

button.disabled = true;
button.innerText = "Xóa đã chọn (";
const number = document.createTextNode(0);
button.append(number, ")");

document.body.append(button);

checkAll.addEventListener("change", function (e) {
  const status = this.checked;

  if (status) {
    number.data = checkItemList.length;
    button.disabled = false;
  } else {
    number.data = 0;
    button.disabled = true;
  }
  checkItemList.forEach((item) => {
    item.checked = status;
  });
});

checkItemList.forEach(function (item, index) {
  item.addEventListener("change", function () {
    const isCheckAll = Array.from(checkItemList).every((item) => item.checked);

    checkAll.checked = isCheckAll;

    const isDisabled = Array.from(checkItemList).some((item) => item.checked);

    const num = Array.from(checkItemList).filter((item) => item.checked);

    number.data = num.length;

    button.disabled = !isDisabled;
  });
});

// button.addEventListener("click", (e) => {
//   console.log(e);

//   button.disabled = true;
//   //   console.log(button.innerText);
// });

const p = document.querySelector("p");

p.addEventListener("click", (e) => {
  //   console.log(e.target);
});
