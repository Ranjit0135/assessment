function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

// document.addEventListener("DOMContentLoaded", () => {
//   const swiper = new Swiper(".swiper-container", {
//     // Optional parameters
//     direction: "horizontal",
//     loop: true,
//     slidesPerView: 2, // Change to 3 as needed
//     spaceBetween: 5,
//     autoplay: {
//       delay: 1000,
//     },

//     // If we need pagination
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },

//     // Navigation arrows
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },

//     // And if we need scrollbar
//     scrollbar: {
//       el: ".swiper-scrollbar",
//     },
//   });
// });

var container = document.getElementById("container");
var slider = document.getElementById("slider");
var slides = document.getElementsByClassName("slide").length;
var buttons = document.getElementsByClassName("btn");

var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth;

window.addEventListener("resize", checkWidth);

function checkWidth() {
  containerWidth = container.offsetWidth;
  setParams(containerWidth);
}

function setParams(w) {
  if (w < 551) {
    slidesPerPage = 1;
  } else if (w < 901) {
    slidesPerPage = 2;
  } else if (w < 1101) {
    slidesPerPage = 3;
  } else {
    slidesPerPage = 4;
  }
  slidesCount = slides - slidesPerPage;
  currentMargin = -currentPosition * (100 / slidesPerPage);
  slider.style.marginLeft = currentMargin + "%";
}

setParams(containerWidth);

function slideRight() {
  currentPosition--;
  if (currentPosition < 0) {
    currentPosition = slidesCount;
    currentMargin = -currentPosition * (100 / slidesPerPage);
    slider.style.marginLeft = currentMargin + "%";
  } else {
    currentMargin += 100 / slidesPerPage;
    slider.style.marginLeft = currentMargin + "%";
  }
}

function slideLeft() {
  currentPosition++;
  if (currentPosition > slidesCount) {
    currentPosition = 0;
    currentMargin = 0;
    slider.style.marginLeft = currentMargin + "%";
  } else {
    currentMargin -= 100 / slidesPerPage;
    slider.style.marginLeft = currentMargin + "%";
  }
}

buttons[0].addEventListener("click", slideRight);
buttons[1].addEventListener("click", slideLeft);
