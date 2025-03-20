const carousel = document.querySelector(".carousel");
const carouselInner = document.querySelector(".carousel-inner");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const itemWidth = carouselInner.clientWidth;

const items = carouselInner.children;

const totalWidth = items.length * itemWidth;

carouselInner.style.width = `${totalWidth}px`;

let position = 0;

nextBtn.addEventListener("click", (e) => {
  if (Math.abs(position) < totalWidth - itemWidth) {
    position -= itemWidth;
    carouselInner.style.transform = `translateX(${position}px)`;
  } else {
    carouselInner.style.transform = `translateX(0px)`;
    // nextBtn.style.cursor = "";
    position = 0;
  }
});

// nextBtn.addEventListener("mousemove", () => {
//   if (Math.abs(position) === totalWidth - itemWidth) {
//     nextBtn.style.cursor = "not-allowed";
//   }
// });

// prevBtn.addEventListener("mousemove", () => {
//   if (Math.abs(position) === 0) {
//     prevBtn.style.cursor = "not-allowed";
//   }
// });

prevBtn.addEventListener("click", (e) => {
  if (Math.abs(position) > 0) {
    position += itemWidth;
    carouselInner.style.transform = `translateX(${position}px)`;
  }
});
