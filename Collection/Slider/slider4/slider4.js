/*
 * Copyright (c) 2023 Mosaico
 * 
 * This code is part of the Mosaico's Collection and is subject to the terms of the Mosaico Software License Agreement.
 * Unauthorized use, copying, modification, or distribution of this code without valid permission is strictly prohibited.
 * 
 * For licensing information, please refer to the Mosaico Software License Agreement available at www.mosaico.site/privacy-policy-and-terms
 */

const slider4Element = document.querySelector('[data-identifier="slider-side"]');
const slidesPerViewDesktop4 = slider4Element.getAttribute('data-slider4-slides-per-view') || 3; // Default value for desktop
const slidesPerViewMobile4 = slider4Element.getAttribute('data-slider4-breakpoint-slides-mobile') || 1; // Default value for mobile
const slidesPerViewTablet4 = slider4Element.getAttribute('data-slider4-breakpoint-slides-tablet') || 2; // Default value for tablet
const spaceBetween4 = slider4Element.getAttribute('data-slider4-space-between') || 16;


const nextEl4 = slider4Element.querySelector('[data-identifier="side-next-slide"]');
const prevEl4 = slider4Element.querySelector('[data-identifier="side-prev-slide"]');

const slider4Swiper1 = new Swiper(slider4Element, {
  direction: 'horizontal',
  loop: false,
  slidesPerView: slidesPerViewDesktop4,
  spaceBetween4: spaceBetween4,
  centeredSlides: false,
  navigation: {
    nextEl4: nextEl4,
    prevEl4: prevEl4,
  },
  breakpoints: {
    0: {
      slidesPerView: slidesPerViewMobile4,
    },
    479: {
      slidesPerView: slidesPerViewTablet4,
    },
    992: {
      slidesPerView: slidesPerViewDesktop4,
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
