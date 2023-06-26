const navButton = document.querySelector(".nav__button");
const navLinks = document.querySelector(".nav__links");

navButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
