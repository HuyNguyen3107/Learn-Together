const carousel = document.querySelector(".carousel");
const carouselInner = document.querySelector(".carousel-inner");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const dotList = document.querySelector(".dot-list");
const itemWidth = carouselInner.clientWidth;

const items = carouselInner.children;

const totalWidth = items.length * itemWidth;

carouselInner.style.width = `${totalWidth}px`;

let position = 0;

let result = "";
for (let i = 0; i < items.length; i++) {
  let span = "";
  if (i === 0) {
    span += `<span class="dot-item active"></span>`;
  } else {
    span += `<span class="dot-item"></span>`;
  }
  result += span;
}
dotList.innerHTML = result;

// const handleChangeDot = (index) => {
//   Array.from(dotList.children).forEach(function (dot, indexDot) {
//     if (index === indexDot) {
//       dot.classList.add("active");
//     }
//     Array.from(dotList.children).forEach(function (dotItem, indexItem) {
//       if (index !== indexItem) {
//         dotItem.classList.remove("active");
//       }
//     });
//   });
// };

// let id;
// let indexAutoPlay = 0;

// let isSecondLoop = false;

// const handleAutoPlay = () => {
//   nextBtn.click();
//   if (!isSecondLoop) {
//     if (indexAutoPlay === items.length - 2) {
//       indexAutoPlay++;
//       handleChangeDot(indexAutoPlay);
//       indexAutoPlay = 0;
//       isSecondLoop = true;
//     } else {
//       indexAutoPlay++;
//       handleChangeDot(indexAutoPlay);
//     }
//   } else {
//     if (indexAutoPlay === items.length - 1) {
//       handleChangeDot(indexAutoPlay);
//       indexAutoPlay = 0;
//     } else {
//       handleChangeDot(indexAutoPlay);
//       indexAutoPlay++;
//     }
//   }
// };

// id = setInterval(handleAutoPlay, 3000);

let indexAutoPlay = 0;

const handleChangeDot = (control) => {
  let flag = true;
  Array.from(dotList.children).forEach(function (dot, index) {
    if (dot.classList.contains("active") && flag) {
      dot.classList.remove("active");
      if (control === "next") {
        dot.nextElementSibling.classList.add("active");
      } else if (control === "prev") {
        dot.previousElementSibling.classList.add("active");
      }
      flag = false;
    }
  });
};

nextBtn.addEventListener("click", (e) => {
  if (Math.abs(position) < totalWidth - itemWidth) {
    position -= itemWidth;
    carouselInner.style.transform = `translateX(${position}px)`;
    handleChangeDot("next");
  } else {
    carouselInner.style.transform = `translateX(0px)`;
    position = 0;
    Array.from(dotList.children).forEach(function (dot, index) {
      if (index === 0) {
        dot.classList.add("active");
      } else {
        if (dot.classList.contains("active")) {
          dot.classList.remove("active");
        }
      }
    });
  }
});

// nextBtn.addEventListener("mousedown", (e) => {
//   indexAutoPlay++;
//   if (indexAutoPlay > items.length - 1) {
//     indexAutoPlay = 0;
//   }
//   clearInterval(id);
// });

// nextBtn.addEventListener("mouseup", (e) => {
//   id = setInterval(handleAutoPlay, 3000);
// });

prevBtn.addEventListener("click", (e) => {
  if (Math.abs(position) > 0) {
    position += itemWidth;
    carouselInner.style.transform = `translateX(${position}px)`;
    handleChangeDot("prev");
  }
});

// prevBtn.addEventListener("mousedown", (e) => {
//   indexAutoPlay--;
//   if (indexAutoPlay < 0) {
//     indexAutoPlay = items.length - 1;
//   }
//   clearInterval(id);
// });

// prevBtn.addEventListener("mouseup", (e) => {
//   id = setInterval(handleAutoPlay, 3000);
// });

const dotItems = document.querySelectorAll(".dot-item");

dotItems.forEach(function (item, index) {
  item.addEventListener("click", function (e) {
    let prevIndex;
    let currentIndex = index;
    this.classList.add("active");

    dotItems.forEach(function (itemDot, index) {
      if (itemDot.classList.contains("active") && item !== itemDot) {
        itemDot.classList.remove("active");
        prevIndex = index;
      }
    });

    if (currentIndex > prevIndex) {
      let step = currentIndex - prevIndex;
      position -= step * itemWidth;
      carouselInner.style.transform = `translateX(${position}px)`;
    } else {
      let step = prevIndex - currentIndex;
      position += step * itemWidth;
      carouselInner.style.transform = `translateX(${position}px)`;
    }
  });
});

// dotItems.forEach(function (item, index) {
//   item.addEventListener("mousedown", () => {
//     if (!isSecondLoop) {
//       if (index === items.length - 1) {
//         indexAutoPlay = 0;
//       }
//     } else {
//       indexAutoPlay = index;
//     }
//     clearInterval(id);
//   });

//   item.addEventListener("mouseup", () => {
//     id = setInterval(handleAutoPlay, 3000);
//   });
// });
