const hamburger = document.querySelector(".navbar__hamburger");
const navMenu = document.querySelector(".navbar__menu");
const navLink = document.querySelectorAll(".navbar__link");

const swapIcons = () => {
  hamburger.classList.toggle("icon-hamburgur");
  hamburger.classList.toggle("icon-cross");
};

const mobileMenu = () => {
  navMenu.classList.toggle("show-nav");
  swapIcons();
};

const closeMenu = () => {
  navMenu.classList.remove("show-nav");
  swapIcons();
};

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));

(function () {
  const displayWindowSize = () => {
    let myWidth = window.innerWidth;
    if (navMenu.classList.contains("show-nav") && myWidth > 1024) {
      navMenu.classList.remove("show-nav");
      swapIcons();
    }
  };
  window.onresize = displayWindowSize;
  window.onload = displayWindowSize;
})();
