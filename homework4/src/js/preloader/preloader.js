import { PRELOADING_MIN_TIME } from "../config";

const preloaderOverlayEl = document.querySelector(".preloader-overlay");
document.body.style.overflow = "hidden";

const promisifyLoad = function () {
  return new Promise((resolve, reject) => {
    window.addEventListener("load", () => {
      resolve();
    });
  });
};

const pausePromise = function (time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

// If loading takes less than 5s it waits for the end of pause
Promise.all([promisifyLoad(), pausePromise(PRELOADING_MIN_TIME)]).then(() => {
  preloaderOverlayEl.style.opacity = "0";
  document.body.style.overflow = "visible";
});
// , pausePromise(PRELOADING_MIN_TIME)

// removing preloader from the DOM after fade out transition
preloaderOverlayEl.addEventListener("transitionend", () => {
  preloaderOverlayEl.remove();
});
