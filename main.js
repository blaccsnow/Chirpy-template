let sideNav = document.getElementById("aside");
let menuBtn = document.getElementById("menu-btn");
let closeMenu = document.getElementById("close-menu");

menuBtn.addEventListener('click', () => {
 sideNav.style.width = "60%";
 sideNav.style.boxShadow = "0 0 0 10000px rgba(0,0,0,.50)"
 sideNav.style.display = "block";
});

closeMenu.addEventListener('click', () => {
  sideNav.style.boxShadow = "none";
  sideNav.style.width = "0";
  sideNav.style.display = "none"
});