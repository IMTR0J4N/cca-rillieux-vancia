const content_article = document.querySelector(".content_article");
const view_image = document.querySelector(".view_image");

content_article.addEventListener("click", () => {
  view_image.style.display = "flex";
});

view_image.addEventListener("click", () => {
  view_image.style.display = "none";
});