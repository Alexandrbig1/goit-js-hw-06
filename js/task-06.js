const validationInputEl = document.querySelector("#validation-input");

validationInputEl.addEventListener("blur", (e) => {
  const dataNumberEl = +e.target.dataset.length;
  const totalInputValue = validationInputEl.value.length;

  if (totalInputValue === dataNumberEl) {
    validationInputEl.classList.remove("invalid");
    validationInputEl.classList.add("valid");
  } else {
    validationInputEl.classList.remove("valid");
    validationInputEl.classList.add("invalid");
  }
});
