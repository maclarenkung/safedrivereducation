const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const lines = document.querySelectorAll(".hamburger .lines");

const logo = document.querySelectorAll(".logo-top");
const ham = document.querySelectorAll(".ham");

hamburger.addEventListener("click", () => {
  lines.forEach(lines => {
    lines.classList.toggle("white");
  });
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fades");
  });
  logo.forEach(logo => {
    logo.classList.toggle("logonone");
  });
  ham.forEach(ham => {
    ham.classList.toggle("ham-top");
  });
});
