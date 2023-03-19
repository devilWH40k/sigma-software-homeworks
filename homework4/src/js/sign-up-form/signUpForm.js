import { animateForm } from "./formAnimation";
import { FORM_ANIMATION_DURATION } from "../config";

const formEl = document.querySelector(".sign-up-form");

const nameField = document.querySelector('.sign-up-form__input[name="name"]'),
  surnameField = document.querySelector('.sign-up-form__input[name="surname"]'),
  emailField = document.querySelector('.sign-up-form__input[name="email"]');

const signUpBtn = formEl.querySelector(".button");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const formDataObj = new FormData(formEl);

  const name = formDataObj.get("name");
  const surname = formDataObj.get("surname");
  const email = formDataObj.get("email");

  localStorage.setItem("name", name);
  localStorage.setItem("surname", surname);
  localStorage.setItem("email", email);

  if (name === "Vovan") animateForm(FORM_ANIMATION_DURATION);
});
