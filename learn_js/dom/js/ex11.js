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

const handleAutoplay = () => {
  nextBtn.click();
};

let idAutoPlay;

idAutoPlay = setInterval(() => {
  handleAutoplay();
}, 5000);

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

prevBtn.addEventListener("click", (e) => {
  if (Math.abs(position) > 0) {
    position += itemWidth;
    carouselInner.style.transform = `translateX(${position}px)`;
    handleChangeDot("prev");
  }
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

nextBtn.addEventListener("mousedown", () => {
  clearInterval(idAutoPlay);
});

nextBtn.addEventListener("mouseup", () => {
  idAutoPlay = setInterval(() => {
    handleAutoplay();
  }, 5000);
});

prevBtn.addEventListener("mousedown", () => {
  clearInterval(idAutoPlay);
});

prevBtn.addEventListener("mouseup", () => {
  idAutoPlay = setInterval(() => {
    handleAutoplay();
  }, 5000);
});

dotItems.forEach(function (dot, index) {
  dot.addEventListener("mousedown", () => {
    clearInterval(idAutoPlay);
  });

  dot.addEventListener("mouseup", () => {
    idAutoPlay = setInterval(() => {
      handleAutoplay();
    }, 5000);
  });
});

let initialOffsetX;
let isDrag = false;

const rateChange = (10 * itemWidth) / 100;

carouselInner.addEventListener("mousedown", (e) => {
  e.preventDefault();
  initialOffsetX = e.offsetX;
  isDrag = true;
  clearInterval(idAutoPlay);
});

carouselInner.addEventListener("mousemove", (e) => {
  e.preventDefault();
  if (isDrag) {
    const currentOffsetX = e.offsetX;
    const moveWidth = currentOffsetX - initialOffsetX;
    if (moveWidth < 0) {
      if (Math.abs(moveWidth) > rateChange) {
        carouselInner.style.transition = null;
        // nextBtn.click();
      } else {
        carouselInner.style.transition = "none";
        // carouselInner.style.translate = `${position + moveWidth}px`;
        carouselInner.style.transform = `translateX(${position + moveWidth}px)`;
      }
    }
  }
});

carouselInner.addEventListener("mouseup", (e) => {
  isDrag = false;
  idAutoPlay = setInterval(() => {
    handleAutoplay();
  }, 5000);
});
