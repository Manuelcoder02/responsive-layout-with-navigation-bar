const navToggle = document.querySelector(".open-nav");
const navContent = document.querySelector(".nav");

navToggle.addEventListener("click", function () {
  navContent.classList.toggle("nav-toggle");
});
