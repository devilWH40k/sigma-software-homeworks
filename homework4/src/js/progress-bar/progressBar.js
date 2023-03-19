// note: pageHeight should be calculated dynamically!!! (for static page ok)

import { PROGRES_BAR_DEBOUNCE_TIME } from "../config";

const progressBarLineEl = document.querySelector(".progress-bar-line");

const body = document.body;
const html = document.documentElement;

// Calculating percantage of user path (substracting viewport height from entire height)
const performProgresCalculations = function () {
  // calculating max Y height from all 5 possible values
  // Browsers calculate it differently
  const pageHeight = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
  const posY = window.scrollY;
  const viewportHeight = window.innerHeight;
  const progressPercentage =
    Math.ceil((posY / (pageHeight - viewportHeight)) * 100) + "%";
  progressBarLineEl.style.width = progressPercentage;
};

// prevent enourmous calculations by using debounce
let debounceTimeout;
const debounce = function (callback, time) {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(callback, time);
};

window.addEventListener("scroll", (e) =>
  debounce(performProgresCalculations, PROGRES_BAR_DEBOUNCE_TIME)
);

// if page reloads
performProgresCalculations();
