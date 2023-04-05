"use strict";

const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

let hours = 4;
let minutes = 24;
let seconds = 60;

function Timer() {
  seconds--;

  second.textContent = seconds;
  if (seconds === 0) {
    seconds = 59;
    minutes--;
    minute.textContent = minutes;
  }

  if (minutes === 0) {
    minutes = 59;
    hours--;
    hour.textContent = hours;
  }

  setTimeout(Timer, 1000);
}

Timer();

// SELECTING ELEMENTS //

const burger = document.querySelector(".burger");
const burgerSpan1 = document.querySelector(".burger1");
const burgerSpan2 = document.querySelector(".burger2");
const burgerSpan3 = document.querySelector(".burger3");

// NAVBAR MENU //

const navBar = document.querySelector(".navbar");
const closingIcon = document.querySelector(".fa-x");
const categoriesDropdown = document.querySelector(".categories-dropdown p");
const categoriesDropdownUl = document.querySelector(
  ".categories-dropdown-list"
);
const purchaseDropdownP = document.querySelector(".purchase-nav-toggle p");
const purchaseDropdownList = document.querySelector(
  ".purchase-nav-toggle-list"
);

// EVENTLISTENERS //

burger.addEventListener("click", () => {
  navBar.style.display = "flex";
  navBar.style.right = "0px";
});

closingIcon.addEventListener("click", () => {
  navBar.style.right = "-450px";
});

// CLOSING NAVBA ON ESCAPE  //

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    navBar.style.right = "-450px";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1073) {
    navBar.style.display = "none";
    navBar.style.right = "-450px";
  } else {
    navBar.style.display = "flex";
  }
});

categoriesDropdown.addEventListener("click", () => {
  categoriesDropdownUl.classList.toggle("categories-active");
});

purchaseDropdownP.addEventListener("click", () => {
  purchaseDropdownList.classList.toggle("purchase-nav-toggle-list-active");
});
