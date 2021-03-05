const body = document.querySelector("body");
const header = document.querySelector(".header");
const hamburger = document.querySelector(".header__hamburger");

function clickHandler() {
  if(header.classList.contains("open")) {
    header.classList.remove("open");
    body.classList.remove("no-scroll");
  } else {
    header.classList.add("open");
    body.classList.add("no-scroll");
  }
}


hamburger.addEventListener("click", clickHandler);
