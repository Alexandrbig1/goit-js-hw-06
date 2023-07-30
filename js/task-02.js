const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

ingredients.map((el) => {
  const createEl = document.createElement("li");
  createEl.textContent = el;
  createEl.classList = "item";
  ingredientsEl.append(createEl);
});
