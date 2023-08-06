 // function to create a unique cursor style and append to document head
function makeText1CursorStyle(typedElement, cursorSize) {
  const uniqueText1ClassName = 'typedCursor-' + typedElement.dataset.identifier.replace(/\s+/g, '-').toLowerCase();
  const text1Style = document.createElement('style');
  text1Style.innerHTML = `.${uniqueText1ClassName} { 
      font-size: ${cursorSize}; 
      vertical-align: middle;
  }`;
  document.head.appendChild(text1Style);
  return uniqueText1ClassName;
}

function getText1Sentences(typedElement) {
  let text1Sentences = [];
  let i = 1;
  while(typedElement.hasAttribute(`data-basic-typing-sentence${i}`)) {
    text1Sentences.push(typedElement.getAttribute(`data-basic-typing-sentence${i}`));
    i++;
  }
  return text1Sentences;
}

const typedText1Elements = document.querySelectorAll('[data-identifier="basic-typing"]');
typedText1Elements.forEach(typedText1 => {
  const typedText1SpeedValue = parseFloat(typedText1.getAttribute('data-typing-speed'));
  const typedText1CursorSize = typedText1.getAttribute('data-type-cursor-size');
  const text1CursorClass = makeText1CursorStyle(typedText1, typedText1CursorSize);
  const text1LoopValue = typedText1.getAttribute('data-basic-typing-loop') === 'true' ? true : false; // Added line

  const text1Sentences = getText1Sentences(typedText1);

  const text1Typed = new Typed(typedText1, {
    strings: text1Sentences,
    typeSpeed: typedText1SpeedValue,
    cursorChar: `<span class="${text1CursorClass}">|</span>`,
    loop: text1LoopValue, // Used the value of the new attribute
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
