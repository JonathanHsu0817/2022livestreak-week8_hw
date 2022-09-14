const indexSwiper = new Swiper(".index-swiper", {
  loop: true,
  speed: 500,
  autoplay: {
    delay: 3000,
  },
  centeredSlides: true,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2.3
    },
    1200: {
      slidesPerView: 2.88
    },
    1400: {
      slidesPerView: 2.9
    }
  },
  spaceBetween: 24,
  effect: 'slide',
  pagination: {
  el: ".swiper-pagination",
  clickable: true,
  },
});

const introSwiper = new Swiper(".intro-swiper", {
  loop: true,
  speed: 500,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  slidesPerView: 2,
  breakpoints: {
    768: {
      slidesPerView: 4
    },
  },
  spaceBetween: 24,
  effect: 'slide',
  pagination: {
  el: ".swiper-pagination",
  clickable: true,
  },
});