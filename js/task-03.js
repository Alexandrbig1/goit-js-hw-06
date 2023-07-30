const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEl = document.querySelector(".gallery");

galleryEl.style.listStyle = "none";
galleryEl.style.display = "flex";
galleryEl.style.gap = "20px";

function imageElements(img) {
  return img
    .map(
      ({ url, alt }) =>
        `
<li><img src="${url}" alt="${alt}" width="300"></li>

  `
    )
    .join(" ");
}

galleryEl.insertAdjacentHTML("afterbegin", imageElements(images));
