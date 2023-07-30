const validationInputEl = document.querySelector("#validation-input");

validationInputEl.addEventListener("blur", (e) => {
  if (validationInputEl.value.length < 7) {
    validationInputEl.classList.add("valid");
  } else {
    validationInputEl.classList.add("invalid");
  }
});
