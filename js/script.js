// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamberger-menu di click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Click diluar side bar untuk menghilangkan navbar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Close navbar on nav menu select
const navItems = document.querySelectorAll(".navbar-nav a");

navItems.forEach((nav) => {
  nav.addEventListener("click", () => {
    navbarNav.classList.remove("active");
  });
});
