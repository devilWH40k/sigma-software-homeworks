import { MAX_UNACTIVE_TIME, WAITING_RESPONSE_CLOSE_TIME } from "./config";

const popupEl = document.querySelector(".popup"),
  popupBtnYes = popupEl.querySelector(".popup__yes"),
  popupBtnNo = popupEl.querySelector(".popup__no");

const showPopup = function () {
  popupEl.style.transform = "translate(-50%, 0)";
};

const hidePopup = function () {
  popupEl.style.transform = "translate(-50%, -150%)";
};

const createClosingTimer = function () {
  return setTimeout(() => {
    window.close();
  }, WAITING_RESPONSE_CLOSE_TIME);
};

const createTimer = function () {
  return setTimeout(() => {
    showPopup();
    closingTimer = createClosingTimer();
  }, MAX_UNACTIVE_TIME);
};

let closingTimer;
let timer = createTimer();

const resetTimers = function () {
  clearTimeout(timer);
  clearTimeout(closingTimer);
  timer = createTimer();
};

const YesCallback = function () {
  hidePopup();
  resetTimers();
};

popupBtnYes.addEventListener("click", YesCallback);
popupBtnNo.addEventListener("click", () => window.close());

document.addEventListener("mousemove", resetTimers);
document.addEventListener("keypress", resetTimers);
document.addEventListener("click", resetTimers);
document.addEventListener("scroll", resetTimers);
