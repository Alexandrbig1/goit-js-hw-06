let counterValue = 0;

const valueEl = document.querySelector("#value");
const containerEl = document.querySelector("#counter");
const decrementEl = containerEl.firstElementChild;
const incrementEl = containerEl.lastElementChild;

decrementEl.addEventListener("click", () => {
  counterValue -= 1;
  valueEl.innerHTML = counterValue;
});

incrementEl.addEventListener("click", () => {
  counterValue += 1;
  valueEl.innerHTML = counterValue;
});
