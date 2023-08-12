const slider1Element = document.querySelector('[data-identifier="slider-full-width"]');
const slidesPerViewDesktop = slider1Element.getAttribute('data-slider1-slides-per-view') || 2;
const slidesPerViewMobile = slider1Element.getAttribute('data-slider1-breakpoint-slides-mobile') || 1;
const slidesPerViewTablet = slider1Element.getAttribute('data-slider1-breakpoint-slides-tablet') || 1;
const spaceBetween = slider1Element.getAttribute('data-slider1-space-between') || 32;
const centeredSlides = slider1Element.getAttribute('data-slider1-centered-slides') === "true";

const slider1Swiper1 = new Swiper('[data-identifier="slider-full-width"]', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: slidesPerViewDesktop,
  spaceBetween: spaceBetween,
  centeredSlides: centeredSlides,
  pagination: {
    el: '[data-identifier="slider1--pagination"]',
    dynamicBullets: true,
    renderBullet: function (index, className) {
      const slider1PaginationElement = document.querySelector('[data-identifier="slider1--pagination"]');
      const slider1BulletColor = slider1PaginationElement.getAttribute('data-slider1-pagination-bullet-color');
      const slider1BulletWidth = slider1PaginationElement.getAttribute('data-slider1-pagination-bullet-width');
      const slider1BulletHeight = slider1PaginationElement.getAttribute('data-slider1-pagination-bullet-height');
      return `<span class="${className}" style="background-color: ${slider1BulletColor}; width: ${slider1BulletWidth}; height: ${slider1BulletHeight};"></span>`;
    },
  },
  navigation: {
    nextEl: '[data-identifier="slider1--arrow_next"]',
    prevEl: '[data-identifier="slider1--arrow_prev"]',
  },
  breakpoints: {
    0: {
      slidesPerView: slidesPerViewMobile,
    },
    479: {
      slidesPerView: slidesPerViewTablet,
    },
    992: {
      slidesPerView: slidesPerViewDesktop,
    },
  },
});
