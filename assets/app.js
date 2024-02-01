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

// let webSlides = document.querySelector(".web-slides");

// var counter = 0;
// var direction = 1; // 1 for forward, -1 for backward

// function webMover() {
//   webSlides.style.transform = `translate(${counter * -100}%)`;
//   counter += direction;
//   //* console.log(counter * -100);

//   //* Check if the slider is at the beginning or end
//   if (counter === webSlides.children.length - 1) {
//     //* Reverse the direction
//     direction = -1;
//   } else if (counter === 0) {
//     //* Forward the direction
//     direction = 1;
//   }
// }
// setInterval(webMover, 3000);

// let mobSlides = document.querySelector(".mob-slides");

// var counter = 0;
// var direction = 1; // 1 for forward, -1 for backward

// function mobMover() {
//   mobSlides.style.transform = `translate(${counter * -100}%)`;
//   counter += direction;
//   //* console.log(counter * -100);

//   //* Check if the slider is at the beginning or end
//   if (counter === mobSlides.children.length - 1) {
//     //* Reverse the direction
//     direction = -1;
//   } else if (counter === 0) {
//     //* Forward the direction
//     direction = 1;
//   }
// }
// setInterval(mobMover, 3000);

var swiper = new Swiper(".mySwiper-1", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper-2", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

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
