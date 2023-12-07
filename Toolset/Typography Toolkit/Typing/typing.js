/*
 * Copyright (c) Mosaico
 * 
 * This code is part of the Mosaico's and is subject to the terms of the Mosaico Software License Agreement.
 * Unauthorized use, copying, modification, or distribution of this code without valid permission is strictly prohibited.
 */

function makeCursorStyle(typedElement, cursorSize) {
  const sizes = cursorSize.split(',');
  const desktopSize = sizes[0];
  const tabletSize = sizes[1];
  const mobileSize = sizes[2];
  const extraSmallSize = sizes[3]; // New size for 478px and below

  const uniqueClassName = 'typedCursor-' + typedElement.dataset.identifier.replace(/\s+/g, '-').toLowerCase();
  const style = document.createElement('style');
  style.innerHTML = `
    @media (min-width: 992px) {
      .${uniqueClassName} { font-size: ${desktopSize}; vertical-align: top; }
    }
    @media (max-width: 991px) {
      .${uniqueClassName} { font-size: ${tabletSize}; vertical-align: top; }
    }
    @media (max-width: 767px) {
      .${uniqueClassName} { font-size: ${mobileSize}; vertical-align: top; }
    }
    @media (max-width: 478px) {
      .${uniqueClassName} { font-size: ${extraSmallSize}; vertical-align: top; }
    }
  `;
  document.head.appendChild(style);
  return uniqueClassName;
}

// Function to get sentences from data attributes
function getTypingSentences(typedElement) {
  let sentences = [];
  let i = 1;
  while (typedElement.hasAttribute(`data-typing-sentence${i}`)) {
    sentences.push(typedElement.getAttribute(`data-typing-sentence${i}`));
    i++;
  }
  return sentences;
}

// Main script
document.addEventListener('DOMContentLoaded', function() {
  const typedScript = document.createElement('script');
  typedScript.src = 'https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js';
  typedScript.onload = function() {
    const typedElements = document.querySelectorAll('[data-identifier="typing"]');
    typedElements.forEach(typedElement => {
      const typingSpeedValue = parseFloat(typedElement.getAttribute('data-typing-speed'));
      const cursorSize = typedElement.getAttribute('data-typing-cursor-size');
      const cursorClass = makeCursorStyle(typedElement, cursorSize);
      const loopValue = typedElement.getAttribute('data-typing-loop') === 'true';
      const typingType = typedElement.getAttribute('data-typing-type');
      const sentences = getTypingSentences(typedElement);

      new Typed(typedElement, {
        strings: sentences,
        typeSpeed: typingSpeedValue,
        cursorChar: `<span class="${cursorClass}">|</span>`,
        loop: loopValue,
        smartBackspace: typingType === 'smart'
      });
    });
  };
  document.head.appendChild(typedScript);
});

//This Mosaico element uses Typed.js (License below)

/*
The MIT License (MIT)

Copyright (c) 2023 Matt Boldt

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
