function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChangeEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

buttonChangeEl.addEventListener("click", () => {
  const bkgColor = (document.body.style.backgroundColor = getRandomHexColor());
  spanEl.innerHTML = bkgColor;
});
