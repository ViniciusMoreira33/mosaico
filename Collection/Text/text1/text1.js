 // function to create a unique cursor style and append to document head
  function makeCursorStyle(typedElement, cursorSize) {
    // Generate a unique class name based on the element's position in the document
    const uniqueClassName = 'typed-cursor-' + typedElement.dataset.identifier.replace(/\s+/g, '-').toLowerCase();

    // Create a style element
    const style = document.createElement('style');
    style.innerHTML = `.${uniqueClassName} { 
        font-size: ${cursorSize}; 
        vertical-align: middle;  // Adjust as needed
    }`;
    
    // Append the style element to the document head
    document.head.appendChild(style);

    return uniqueClassName;
  }

  const typedTexts1 = document.querySelectorAll('[data-identifier="basic-typing"]');
  typedTexts1.forEach(typedText => {
    const typedSpeedValue = parseFloat(typedText.getAttribute('data-typing-speed')); // Changed here
    const typedCursorSize = typedText.getAttribute('data-type-cursor-size');
    const cursorClass = makeCursorStyle(typedText, typedCursorSize);

    const typed1 = new Typed(typedText, {
      strings: ['Writing the first sentence,', 'now a second one,', 'and done.'],
      typeSpeed: typedSpeedValue,
      cursorChar: `<span class="${cursorClass}">|</span>`,
    });
  });


//this Mosaico element uses typed.js (License below)

/* The MIT License (MIT)

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
