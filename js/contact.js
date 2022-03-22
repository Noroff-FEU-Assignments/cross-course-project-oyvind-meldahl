const form = document.querySelector("#contactform");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const formSuccess = document.querySelector(".form_success");
const hideForm = document.querySelector("#contactform");

function validateForm() {
  event.preventDefault();

  if (checkLength(fullName.value, 0)) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }

  if (checkLength(subject.value, 9)) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (checkEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(message.value, 24)) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }

  if (checkLength(fullName.value, 0) && checkLength(subject.value, 9) && checkEmail(email.value) && checkLength(message.value, 24)) {
    formSuccess.innerHTML = "<p>Your inquiry has been passed along, thank you.</p>";
    hideForm.innerHTML = "";
    form.reset();
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
