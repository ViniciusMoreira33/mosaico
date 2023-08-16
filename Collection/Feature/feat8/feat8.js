/*
 * Copyright (c) 2023 Mosaico
 * 
 * This code is part of the Mosaico's Collection and is subject to the terms of the Mosaico Software License Agreement.
 * Unauthorized use, copying, modification, or distribution of this code without valid permission is strictly prohibited.
 * 
 * For licensing information, please refer to the Mosaico Software License Agreement available at www.mosaico.site/privacy-policy-and-terms
 */

const slider = document.querySelector('[data-identifier="comparison-handle"]');
const beforeSide = document.querySelector('[data-identifier="before-side"]');
const afterSide = document.querySelector('[data-identifier="after-side"]');
let isDragging = false;

let orientation = slider.parentNode.getAttribute('data-comparison-orientation') || "horizontal";

if (orientation === "horizontal") {
  slider.style.left = "50%";
  beforeSide.style.clipPath = `inset(0 50% 0 0)`;
  afterSide.style.clipPath = `inset(0 0 0 50%)`;
} else {
  slider.style.top = "50%";
  beforeSide.style.clipPath = `inset(50% 0 0 0)`;
  afterSide.style.clipPath = `inset(0 0 50% 0)`;
}

slider.addEventListener('mousedown', (e) => {
  e.preventDefault();
  isDragging = true;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    mousemove(e);
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

function mousemove(e) {
  let rect = slider.parentNode.getBoundingClientRect();
  let percentage;
  let pos;

  let sliderDimension = (orientation === "horizontal") ? slider.offsetWidth : slider.offsetHeight;
  let dimensionPercentage = (sliderDimension / (orientation === "horizontal" ? rect.width : rect.height)) * 50;

  if (orientation === "horizontal") {
    pos = e.clientX - rect.left;
    percentage = Math.min(Math.max((pos / rect.width) * 100, dimensionPercentage), 100 - dimensionPercentage);
    slider.style.left = `${percentage}%`;
    beforeSide.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    afterSide.style.clipPath = `inset(0 0 0 ${percentage}%)`;
  } else {
    pos = e.clientY - rect.top;
    percentage = Math.min(Math.max((pos / rect.height) * 100 - dimensionPercentage, 0), 100 - dimensionPercentage);
    slider.style.top = `${percentage}%`;
    beforeSide.style.clipPath = `inset(${percentage}% 0 0 0)`;
    afterSide.style.clipPath = `inset(0 0 ${100 - percentage}% 0)`;
  }
}
