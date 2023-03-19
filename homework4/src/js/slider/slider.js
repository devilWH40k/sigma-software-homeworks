// note: infinite slides!!!

const slidesEl = document.querySelector(".slider__slides");

const leftBtn = document.querySelector(".slider__left-btn");
const rightBtn = document.querySelector(".slider__right-btn");

let currPage = 0;

const moveSlider = function (currPage) {
  slidesEl.style.transform = `translateX(${-34.7 * currPage}%)`;
};

rightBtn.addEventListener("click", (e) => {
  currPage++;
  if (currPage > 2) currPage = 0;

  moveSlider(currPage);
});

leftBtn.addEventListener("click", (e) => {
  currPage--;
  if (currPage < 0) currPage = 2;

  moveSlider(currPage);
});
