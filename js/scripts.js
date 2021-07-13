const burger = document.querySelector('.header__burger');
const nav = document.querySelector(".header__nav");
const header = document.querySelector(".header");
burger.addEventListener("click", burgerToggle);

function burgerToggle() {
   if (burger.classList.contains("burger--active")) {
      burger.classList.remove("burger--active");
      nav.classList.remove("nav--active");
      header.classList.remove("header--mobile");
   } else {
      burger.classList.add("burger--active");
      nav.classList.add("nav--active");
      header.classList.add("header--mobile");
      document.body.style.overflow = "hidden";
   }
}
