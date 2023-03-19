const formAnimationOverlay = document.querySelector(".form-animation-overlay");
const formAnimationContent = document.querySelector(".form-animation-content");
// prettier-ignore
const formAnimationTextEl = document.querySelector(".form-animation-content__text");

export const animateForm = function (duration) {
  const time = new Date();
  const fullDate = `${time.getDate()}.${time.getMonth()}.${time.getFullYear()}`;
  formAnimationTextEl.innerText = `Only on ${fullDate} Users named Vovan get 120% discount on our product`;
  formAnimationOverlay.style.display = "block";
  formAnimationContent.style.transform = "translate(-50%, -50%)";

  setTimeout(() => {
    formAnimationOverlay.style.display = "none";
    formAnimationContent.style.transform = "translate(-50%, -450%)";
  }, duration);
};
