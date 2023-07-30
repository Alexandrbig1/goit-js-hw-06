// #1

const numOfCategEl = document.querySelector("#categories");

const itemEl = numOfCategEl.childElementCount;

console.log(`Number of categories: ${itemEl}`);

// #1 інший варіант(підкажите який краще, якщо що, дякую)

// const numOfEl = document.querySelector("#categories");

// console.log(`Number of categories: ${numOfEl.children.length}`);

// #1 інший варіант(був ще третій), не знаю який треба було...

// const menuEl = document.querySelector("#categories");

// const total = `Number of categories: ${menuEl.children.length}`;

// console.log(total);

// #2

const totalOfEl = document.querySelectorAll(".item");

const categoryOfEl = totalOfEl.forEach((e) =>
  console.log(
    `Category: ${e.firstElementChild.textContent} Elemenets: ${e.lastElementChild.children.length}`
  )
);
