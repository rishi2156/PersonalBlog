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

//Scroll reveal

//home
ScrollReveal().reveal("#name");
ScrollReveal().reveal("#location", { delay: 500 });
ScrollReveal().reveal("#discover", { delay: 1500 });

//education
ScrollReveal().reveal("#eduheading");
ScrollReveal().reveal("#icse", { delay: 500 });
ScrollReveal().reveal("#isc", { delay: 1000 });
ScrollReveal().reveal("#college", { delay: 1500 });

//skills
ScrollReveal().reveal("#skillheading");
ScrollReveal().reveal("#java", { delay: 300 });
ScrollReveal().reveal("#javascript", { delay: 600 });
ScrollReveal().reveal("#react", { delay: 900 });
ScrollReveal().reveal("#ps", { delay: 1200 });
ScrollReveal().reveal("#ai", { delay: 1500 });

//gallery
ScrollReveal().reveal("#galleryheading");

//Connect
ScrollReveal().reveal("#connectheading");
ScrollReveal().reveal(".fa-facebook", { delay: 400 });
ScrollReveal().reveal(".fa-instagram", { delay: 800 });
ScrollReveal().reveal(".fa-github", { delay: 1200 });
