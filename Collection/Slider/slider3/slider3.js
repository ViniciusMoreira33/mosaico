/*
 * Copyright (c) 2023 Mosaico
 * 
 * This code is part of the Mosaico's Collection and is subject to the terms of the Mosaico Software License Agreement.
 * Unauthorized use, copying, modification, or distribution of this code without valid permission is strictly prohibited.
 * 
 * For licensing information, please refer to the Mosaico Software License Agreement available at www.mosaico.site/privacy-policy-and-terms
 */

const slider3Element = document.querySelector('[data-identifier="slider3-slider"]');
const slidesPerViewDesktop = slider3Element.getAttribute('data-slider3-slides-per-view') || 4;
const slidesPerViewMobile = slider3Element.getAttribute('data-slider3-breakpoint-slides-mobile') || 1;
const slidesPerViewTablet = slider3Element.getAttribute('data-slider3-breakpoint-slides-tablet') || 2;
const spaceBetween = slider3Element.getAttribute('data-slider3-space-between') || 16;

const swiper3 = new Swiper('[data-identifier="slider3-slider"]', {
  loop: false,
  slidesPerView: slidesPerViewDesktop,
  spaceBetween: spaceBetween,
  freeMode: true,
  watchSlidesProgress: true,
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

const swiperThumb3 = new Swiper('[data-identifier="slider3-thumbs"]', {
  loop: false,
  spaceBetween: 32,
  navigation: {
    nextEl: '.slider3--arrow_next',
    prevEl: '.slider3--arrow_prev',
  },
  thumbs: {
    swiper: swiper3,
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
