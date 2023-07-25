 const swiperElement = document.querySelector('[data-identifier="slider-side"]');
  const nextEl = swiperElement.querySelector('[data-identifier="side-next-slide"]');
  const prevEl = swiperElement.querySelector('[data-identifier="side-prev-slide"]');
  
  const swiper1 = new Swiper(swiperElement, {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 16,
    centeredSlides: false,

    // Navigation arrows
    navigation: {
      nextEl: nextEl,
      prevEl: prevEl,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      568: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
    },
  });
