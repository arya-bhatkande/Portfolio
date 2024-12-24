function toggleMenu() {
  const hamburger = document.querySelector(".hamburger-icon");
  const menu = document.querySelector(".menu-links");

  menu.classList.toggle("show");
  hamburger.classList.toggle("show");
}
