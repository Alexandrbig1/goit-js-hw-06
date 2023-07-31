const validationInputEl = document.querySelector("#validation-input");

validationInputEl.addEventListener("blur", (e) => {
  const totalInputValue = validationInputEl.value.length;
  if (totalInputValue < 6) {
    validationInputEl.classList.add("invalid");
  } else {
    validationInputEl.classList.remove("invalid");
    validationInputEl.classList.add("valid");
  }
});
