var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 5,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      "@1.50": {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });