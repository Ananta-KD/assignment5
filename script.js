const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav__menu");
const navLinks = document.querySelectorAll(".nav__link");
// console.log(navLinks);

nav.addEventListener("click", function (e) {
  //   console.log(e.currentTarget, e.target);

  if (e.target === navToggle) {
    navMenu.classList.toggle("open");
  }

  navLinks.forEach(function (navLink) {
    if (e.target === navLink) {
      navMenu.classList.toggle("open");
    }
  });
});
