document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-links");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hide-menu");

    if (mobileMenu.classList.contains("hide-menu")) {
      menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    } else {
      menuBtn.innerHTML = '<i class="fa-solid fa-close"></i>';
    }
  });

  /* swipper js */

  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
  });

  

  var swiper = new Swiper(".ServiceSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    
    loop: true,
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });



});