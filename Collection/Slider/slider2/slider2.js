/*
 * Copyright (c) 2023 Mosaico
 * 
 * This code is part of the Mosaico's Collection and is subject to the terms of the Mosaico Software License Agreement.
 * Unauthorized use, copying, modification, or distribution of this code without valid permission is strictly prohibited.
 * 
 * For licensing information, please refer to the Mosaico Software License Agreement available at www.mosaico.site/privacy-policy-and-terms
 */

const slider2Element = document.querySelector('[data-identifier="slider-window"]');
const autoplayDelay2 = slider2Element.getAttribute('data-slider2-autoplay-delay') || 2500; // Custom attribute for delay

const slider2Swiper2 = new Swiper('[data-identifier="slider-window"]', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  effect: "fade",
  autoplay: {
       delay: autoplayDelay2, // Using the custom attribute for delay
       disableOnInteraction: false,
  },
  navigation: {
    nextEl: '[data-identifier="slider2--arrow_next"]',
    prevEl: '[data-identifier="slider2--arrow_prev"]',
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
