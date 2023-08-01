function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");
const inputValueEl = document.querySelector('input[type="number"');
const emptyBoxEl = document.querySelector("#boxes");

createBtnEl.addEventListener("click", onCreateBtnClick);
destroyBtnEl.addEventListener("click", destroyBoxes);

// Create boxes
function onCreateBtnClick() {
  let totalEl = inputValueEl.value;

  createBoxes(totalEl);
}

function createBoxes(amount) {
  let boxSize = 30;

  const boxes = [];
  if (amount >= 1 && amount <= 100) {
    for (let i = 0; i < amount; i += 1) {
      const newBoxes = document.createElement("div");
      newBoxes.style.width = `${boxSize}px`;
      newBoxes.style.height = `${boxSize}px`;
      newBoxes.style.backgroundColor = getRandomHexColor();
      boxes.push(newBoxes);
      boxSize += 10;
    }
    emptyBoxEl.append(...boxes);
  }
}

// Delete boxes
function destroyBoxes(e) {
  emptyBoxEl.innerHTML = "";
  inputValueEl.value = "";
}
