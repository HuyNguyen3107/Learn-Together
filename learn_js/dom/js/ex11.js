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

const handleChangeDot = (index) => {
  Array.from(dotList.children).forEach(function (dot, indexDot) {
    if (index === indexDot) {
      dot.classList.add("active");
    }
    Array.from(dotList.children).forEach(function (dotItem, indexItem) {
      if (index !== indexItem) {
        dotItem.classList.remove("active");
      }
    });
  });
};

let id;
let index = 0;

let isSecondLoop = false;

id = setInterval(() => {
  nextBtn.click();
  if (!isSecondLoop) {
    if (index === items.length - 2) {
      index++;
      handleChangeDot(index);
      index = 0;
      isSecondLoop = true;
    } else {
      index++;
      handleChangeDot(index);
    }
  } else {
    if (index === items.length - 1) {
      handleChangeDot(index);
      index = 0;
    } else {
      handleChangeDot(index);
      index++;
    }
  }
}, 3000);

nextBtn.addEventListener("click", (e) => {
  if (Math.abs(position) < totalWidth - itemWidth) {
    position -= itemWidth;
    carouselInner.style.transform = `translateX(${position}px)`;
  } else {
    carouselInner.style.transform = `translateX(0px)`;
    position = 0;
  }
});

nextBtn.addEventListener("mousedown", (e) => {
  clearInterval(id);
});

nextBtn.addEventListener("mouseup", (e) => {
  id = setInterval(() => {
    nextBtn.click();
  }, 3000);
});

prevBtn.addEventListener("click", (e) => {
  if (Math.abs(position) > 0) {
    position += itemWidth;
    carouselInner.style.transform = `translateX(${position}px)`;
  }
});

prevBtn.addEventListener("mousedown", (e) => {
  clearInterval(id);
});

prevBtn.addEventListener("mouseup", (e) => {
  id = setInterval(() => {
    nextBtn.click();
  }, 3000);
});

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
