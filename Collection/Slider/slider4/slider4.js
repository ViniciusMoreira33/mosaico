const slider4Element = document.querySelector('[data-identifier="slider-side"]');
const slidesPerViewDesktop = slider4Element.getAttribute('data-slider4-slides-per-view') || 3; // Default value for desktop
const slidesPerViewMobile = slider4Element.getAttribute('data-slider4-breakpoint-slides-mobile') || 1; // Default value for mobile
const slidesPerViewTablet = slider4Element.getAttribute('data-slider4-breakpoint-slides-tablet') || 2; // Default value for tablet
const spaceBetween = slider4Element.getAttribute('data-slider4-space-between') || 16;


const nextEl = slider4Element.querySelector('[data-identifier="side-next-slide"]');
const prevEl = slider4Element.querySelector('[data-identifier="side-prev-slide"]');

const slider4Swiper1 = new Swiper(slider4Element, {
  direction: 'horizontal',
  loop: false,
  slidesPerView: slidesPerViewDesktop,
  spaceBetween: spaceBetween,
  centeredSlides: false,
  navigation: {
    nextEl: nextEl,
    prevEl: prevEl,
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
