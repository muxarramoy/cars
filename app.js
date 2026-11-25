const mainImage = document.getElementById("mainImage");
const carTitle = document.getElementById("carTitle");
const thumbnails = document.querySelectorAll(".thumb");

thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    mainImage.src = thumb.src;
    mainImage.alt = thumb.alt;
    carTitle.textContent = thumb.alt;

    thumbnails.forEach((item) => item.classList.remove("active"));
    thumb.classList.add("active");
  });
});
