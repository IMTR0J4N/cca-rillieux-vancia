const view_image = document.querySelector(".view_image");
const image = document.querySelector(".view_image img");

document.querySelectorAll(".actualite").forEach((actualite) => {
  actualite.addEventListener("click", () => {
    image.src = "/assets/images/actualites/" + actualite.dataset.image;
    image.alt = actualite.dataset.image;
    view_image.style.display = "flex";
  });
});

view_image.addEventListener("click", () => {
  view_image.style.display = "none";
});
