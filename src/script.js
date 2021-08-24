const navbarHamburger = document.querySelector(".navbar__hamburger");
const navbarMenu = document.querySelector(".navbar__menu");

navbarHamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    navbarHamburger.classList.toggle("active");
    navbarMenu.classList.toggle("active");
}

const navbarLink = document.querySelectorAll(".navbar__link");

navbarLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    navbarHamburger.classList.remove("active");
    navbarMenu.classList.remove("active");
}
