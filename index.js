let mode = document.getElementById("mode");
let mode_icon = document.getElementById("mode_icon");

let theme = localStorage.getItem("theme");
if (!theme) {
  localStorage.setItem("theme", "light");
}
if (theme === "dark") {
  document.body.classList.add("dark");
  mode_icon.src =
    "https://static-00.iconduck.com/assets.00/sun-icon-2048x2048-ylj2peao.png";
}

mode.addEventListener("click", () => {
  let theme = localStorage.getItem("theme");
  if (theme === "light") {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
    mode_icon.src =
      "https://static-00.iconduck.com/assets.00/sun-icon-2048x2048-ylj2peao.png";
  }
  if (theme === "dark") {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
    mode_icon.src =
      "https://cdn2.iconfinder.com/data/icons/canoopi-mobile-contact-apps/32/Dark_Theme-512.png";
  }
});

// ---------------------------------------BURGER MENU---------------------------------------

let burger_menu = document.getElementById("burger_menu");
let burger_btn = document.getElementById("burger");
let mode2 = document.getElementById("mode2");
let mode_icon2 = document.getElementById("mode_icon2");

burger_btn.addEventListener("click", () => {
  burger_menu.classList.toggle("-translate-x-[1100px]");
});

mode2.addEventListener("click", () => {
  let theme = localStorage.getItem("theme");
  if (theme === "light") {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
    mode_icon2.src =
      "https://static-00.iconduck.com/assets.00/sun-icon-2048x2048-ylj2peao.png";
  }
  if (theme === "dark") {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
    mode_icon2.src =
      "https://cdn2.iconfinder.com/data/icons/canoopi-mobile-contact-apps/32/Dark_Theme-512.png";
  }
});

// ---------------------------------------ACCORDION---------------------------------------

let sum = document.getElementById("sum");
let arrow = document.getElementById("arrow");

sum.addEventListener("click", () => {
  arrow.classList.toggle("rotate-[180deg]");
});

let sum2 = document.getElementById("sum2");
let arrow2 = document.getElementById("arrow2");

sum2.addEventListener("click", () => {
  arrow2.classList.toggle("rotate-[180deg]");
});

let sum3 = document.getElementById("sum3");
let arrow3 = document.getElementById("arrow3");

sum3.addEventListener("click", () => {
  arrow3.classList.toggle("rotate-[180deg]");
});

let sum4 = document.getElementById("sum4");
let arrow4 = document.getElementById("arrow4");

sum4.addEventListener("click", () => {
  arrow4.classList.toggle("rotate-[180deg]");
});

let sum5 = document.getElementById("sum5");
let arrow5 = document.getElementById("arrow5");

sum5.addEventListener("click", () => {
  arrow5.classList.toggle("rotate-[180deg]");
});

let sum6 = document.getElementById("sum6");
let arrow6 = document.getElementById("arrow6");

sum6.addEventListener("click", () => {
  arrow6.classList.toggle("rotate-[180deg]");
});

// ---------------------------------------LOADER---------------------------------------

let loader = document.getElementById("loader");
let body = document.getElementById("body");
let body2 = document.getElementById("body2");
let body3 = document.getElementById("body3");

loader.style.display = "flex";
body.style.display = "none";
body2.style.display = "none";
body3.style.display = "none";

document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    loader.style.display = "none";
    body.style.display = "flex";
    body2.style.display = "flex";
    body2.style.flexDirection = "column";
    body3.style.display = "flex";
  }, 3000);
});

// ---------------------------------------MODAL---------------------------------------

let modal = document.getElementById("modal");
let xmark = document.getElementById("xmark");
let body1 = document.getElementById("body1");

// modal.style.top = "-2000px";

setTimeout(() => {
  //   modal.style.display = "flex";
  modal.style.top = "0px";

  body.classList.add("blur-md");
  body2.classList.add("blur-md");
  body3.classList.add("blur-md");
  body1.classList.add("overflow-hidden");
}, 10000);

xmark.addEventListener("click", (e) => {
  //   modal.style.display = "none";
  modal.style.top = "-2000px";
  body.classList.toggle("blur-md");
  body2.classList.toggle("blur-md");
  body3.classList.toggle("blur-md");
  body1.classList.toggle("overflow-hidden");
});

// ---------------------------------------USER---------------------------------------

let user = document.getElementById("user");

user.addEventListener("click", () => {
  window.location.href = "index.html";
});
