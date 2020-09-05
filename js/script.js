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

//SMOOTH SCROLL
$(".menu-content a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800
    );
  }
});

$("#discover a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800
    );
  }
});

//SCROLL SPY
