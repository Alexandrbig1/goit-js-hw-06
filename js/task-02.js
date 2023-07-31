const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const total = [];

ingredients.map((el) => {
  const createEl = document.createElement("li");
  createEl.textContent = el;
  createEl.classList = "item";
  total.push(createEl);
});

ingredientsEl.append(...total);
