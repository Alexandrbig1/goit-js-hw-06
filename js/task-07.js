const fontSizeCtrlEl = document.querySelector("#font-size-control");
fontSizeCtrlEl.value = 16;

const spanEl = document.querySelector("#text");
spanEl.style.fontSize = "16px";

fontSizeCtrlEl.addEventListener("input", () => {
  spanEl.style.fontSize = `${fontSizeCtrlEl.value}px`;
});
