const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const lines = document.querySelectorAll(".hamburger .lines");

hamburger.addEventListener("click", () => {
  lines.forEach(lines => {
    lines.classList.toggle("white");
  });
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fades");
  });
});
