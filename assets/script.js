"use strict";
document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector(".hamburger").classList.toggle("change");
  document.querySelector(".col-nav").classList.toggle("hidden");
  document.querySelector(".col-nav").classList.add("flex");
});
