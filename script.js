"use strict";

function copyNumber() {
  var copyText = document.querySelector(".bi-telephone");
  navigator.clipboard.writeText(copyText.textContent);
  alert(`copied! ${copyText.textContent}`);
}

function copyEmail() {
  var copyText = document.querySelector(".bi-envelope");
  navigator.clipboard.writeText(copyText.textContent);
  alert(`copied! ${copyText.textContent}`);
}

let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
