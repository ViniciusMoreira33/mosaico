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



//This Mosaico element uses Swiper.js (License below)
/*
The MIT License (MIT)

Copyright (c) 2019 Vladimir Kharlampidi

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
