const form = document.querySelector("#contactform");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const adress = document.querySelector("#adress");
const adressError = document.querySelector("#adressError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const formSuccess = document.querySelector(".form_success");

function validateForm() {
  event.preventDefault();

  if (checkLength(fullName.value, 0)) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }

  if (checkLength(adress.value, 9)) {
    adressError.style.display = "none";
  } else {
    adressError.style.display = "block";
  }

  if (checkEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(fullName.value, 0) && checkLength(adress.value, 9) && checkEmail(email.value)) {
    window.location.href = "cartpayment.html";
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, lenght) {
  if (value.trim().length > lenght) {
    return true;
  } else {
    return false;
  }
}

function checkEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
