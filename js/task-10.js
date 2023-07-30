function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsEl = document.querySelector("#controls");
const buttonsElements = controlsEl.children;
const createBtnEl = buttonsElements[1];
const destroyBtnEl = buttonsElements[2];
const inputValueEl = controlsEl.firstElementChild;
const emptyBoxEl = document.querySelector("#boxes");

let increaseBoxesEl = 1;
let margin = 0;

// Create boxes
inputValueEl.addEventListener("input", createOnInputValue);

function createOnInputValue(evt) {
  let totalEl = inputValueEl.value;
  if (totalEl >= 1 && totalEl < 100) {
    createBtnEl.addEventListener("click", () => {
      for (let i = 0; i < totalEl; i += 1) {
        increaseBoxesEl += 0.1;
        margin += 10;
        const newBoxes = document.createElement("div");
        newBoxes.style.width = "30px";
        newBoxes.style.height = "30px";
        newBoxes.style.backgroundColor = getRandomHexColor();
        newBoxes.style.scale = increaseBoxesEl;
        newBoxes.style.marginLeft = `${margin}px`;
        emptyBoxEl.append(newBoxes);
        console.log(emptyBoxEl.append(newBoxes));
      }
    });
  } else {
    createBtnEl.addEventListener("click", () => {
      inputValueEl.innerHTML = "";
    });
  }
}

// Destroy all boxes
destroyBtnEl.addEventListener("click", destroyBoxes);

function destroyBoxes(e) {
  emptyBoxEl.remove();
  inputValueEl.value = "";
}
