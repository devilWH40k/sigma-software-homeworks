// note: infinite slides!!!

const slidesEl = document.querySelector(".slider__slides");

const leftBtn = document.querySelector(".slider__left-btn");
const rightBtn = document.querySelector(".slider__right-btn");

let lastPage;
let transformPercent = -34.7;
let currPage = 0;

// defining last page index
const mediaQuery = window.matchMedia("(max-width: 1356px)");

function handleTabletChange(e) {
  if (e.matches) {
    lastPage = 5;
    transformPercent = -16.8;
    return;
  }

  lastPage = 2;
  transformPercent = -34.7;
}

mediaQuery.addListener(handleTabletChange);

handleTabletChange(mediaQuery);
//

const moveSlider = function (currPage) {
  slidesEl.style.transform = `translateX(${transformPercent * currPage}%)`;
};

rightBtn.addEventListener("click", (e) => {
  currPage++;
  if (currPage > lastPage) currPage = 0;

  moveSlider(currPage);
});

leftBtn.addEventListener("click", (e) => {
  currPage--;
  if (currPage < 0) currPage = lastPage;

  moveSlider(currPage);
});
