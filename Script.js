// Author : Priyadarshi Abhishek

burger = document.querySelector(".burger");
navbar = document.querySelector(".nav-bar");
navlist = document.querySelector(".nav-list");
search = document.querySelector(".search-div");
logo = document.querySelector(".logo");

burger.addEventListener("click", () => {
  navbar.classList.toggle("nav-res");
  navlist.classList.toggle("invisible-res");
  search.classList.toggle("invisible-res");
  logo.classList.toggle("invisible-res");
});
