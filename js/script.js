const closebtn = document.querySelector(".closebtn");
const burger = document.querySelector(".burger");
const nav = document.querySelector(".menu-container");
const navLinks = document.querySelectorAll(".menu-content a");

closebtn.addEventListener("click", () => {
  nav.style.display = "none";
});
burger.addEventListener("click", () => {
  nav.style.display = "block";
});

navLinks.forEach((item) => {
  item.addEventListener("click", () => {
    nav.style.display = "none";
  });
});
