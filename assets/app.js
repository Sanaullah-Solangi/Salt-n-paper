//!============ responsive header btns ============

//todo getting elments
var header = document.querySelector(".header");
var responsiveBtn = document.querySelector(".responsive-btns");
var anchors = document.querySelectorAll(".navbar-links a");
//todo function to toggle responsive navbar by responsive btns
responsiveBtn.addEventListener("click", function () {
  header.classList.toggle("show");
});
//todo array forEach method to hide navbar
anchors.forEach(function (value) {
  value.addEventListener("click", function () {
    header.classList.remove("show");
  });
});
//? gettin navbar-list and function below is also correct it's your choice which one you want to use to hide header
// var links = document.querySelectorAll(".navbar-links");
//todo array forEach method to hide navbar
// links.forEach(function (value) {
//  value.addEventListener("click", function () {
//    header.classList.remove("show");
//  });
// });
//!============ apni slider functionality  ============
// slides = document.querySelector(".slides");

// var counter = 0;

// function mover() {
//   slides.style.transform = `translate(${counter * -100}%)`;
//   counter++;
//   if (counter == slides.children.length) {
//     counter = 0;
//   }
// }

// setInterval(mover, 3000);
//!============ chat gpt se lya huwa code ============

slides = document.querySelector(".slides");

var counter = 0;
var direction = 1; // 1 for forward, -1 for backward

function mover() {
  slides.style.transform = `translate(${counter * -100}%)`;
  counter += direction;
  //* console.log(counter * -100);

  //* Check if the slider is at the beginning or end
  if (counter === slides.children.length - 1) {
    //* Reverse the direction
    direction = -1;
  } else if (counter === 0) {
    //* Forward the direction
    direction = 1;
  }
}

setInterval(mover, 3000);

//!============ footer responsive btns ============

var footerContent = document.querySelector(".footer-content");

var plusIcon1 = document.querySelector(".plus-icon-1");

var plusIcon2 = document.querySelector(".plus-icon-2");

plusIcon1.addEventListener("click", function () {
  footerContent.classList.toggle("show-one");
});

plusIcon2.addEventListener("click", function () {
  footerContent.classList.toggle("show-two");
});
