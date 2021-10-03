const hamburger = document.querySelector(".navbar__hamburger");
const navMenu = document.querySelector(".navbar__menu");
const navLink = document.querySelectorAll(".navbar__link");
const body = document.querySelector("body");

const swapIcons = () => {
  hamburger.classList.toggle("icon-hamburgur");
  hamburger.classList.toggle("icon-cross");
};

const mobileMenu = () => {
  navMenu.classList.toggle("show-nav");
  body.classList.toggle("disable-scroll");
  swapIcons();
};

const closeMenu = () => {
  navMenu.classList.remove("show-nav");
  body.classList.remove("disable-scroll");
  swapIcons();
};

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));

(function () {
  const displayWindowSize = () => {
    let myWidth = window.innerWidth;
    if (navMenu.classList.contains("show-nav") && myWidth > 1024) {
      navMenu.classList.remove("show-nav");
      body.classList.remove("disable-scroll");
      swapIcons();
    }
  };
  window.onresize = displayWindowSize;
  window.onload = displayWindowSize;
})();
