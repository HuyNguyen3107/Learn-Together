// lắng nghe sự kiện scroll (Kéo thanh cuộn trình duyệt)
const btn = document.querySelector("button");
window.addEventListener("scroll", function () {
  //   //   const x = window.scrollX;
  const y = window.scrollY;

  if (y > 100) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});

btn.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
