/*
 * Copyright (c) 2023 Mosaico
 * 
 * This code is part of the Mosaico's Collection and is subject to the terms of the Mosaico Software License Agreement.
 * Unauthorized use, copying, modification, or distribution of this code without valid permission is strictly prohibited.
 * 
 * For licensing information, please refer to the Mosaico Software License Agreement available at www.mosaico.site/privacy-policy-and-terms
 */

document.addEventListener('DOMContentLoaded', function() {
  var list2 = document.querySelector('[data-identifier="list-reorderable"]');

  var placeholderBgColor = list2.getAttribute('data-reorderable-placeholder-bg-color');
  var placeholderBorderColor = list2.getAttribute('data-reorderable-placeholder-border');
  var placeholderColor = list2.getAttribute('data-reorderable-placeholder-color');

  var placeholderStyles = `
    background-color: ${placeholderBgColor};
    border: ${placeholderBorderColor};
    color: ${placeholderColor};
  `;

  var styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerHTML = `.reorderable--placeholder { ${placeholderStyles} }`;
  document.head.appendChild(styleSheet);

  new Sortable(list2, {
    animation: parseInt(list2.getAttribute('data-reorderable-animation')),
    ghostClass: 'reorderable--placeholder',
  });
});



//This Mosaico element uses Sortable.js (License below)

/*
Copyright (c) 2019 All contributors to Sortable

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
