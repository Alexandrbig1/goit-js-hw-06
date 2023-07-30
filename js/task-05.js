const nameEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

nameEl.addEventListener("input", onInputChange);

function onInputChange() {
  spanEl.textContent = nameEl.value;
  if (nameEl.value === "") {
    spanEl.textContent = "Anonymous";
  }
  nameEl.value;
}
