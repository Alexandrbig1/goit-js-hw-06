const fontSizeCtrlEl = document.querySelector("#font-size-control");

const spanEl = document.querySelector("#text");

fontSizeCtrlEl.addEventListener("input", () => {
  console.log(fontSizeCtrlEl.value);
  spanEl.style.fontSize = `${fontSizeCtrlEl.value}px`;
});
