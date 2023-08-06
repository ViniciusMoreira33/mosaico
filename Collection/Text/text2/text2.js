 // function to create a unique cursor style and append to document head
function makeText2CursorStyle(typedElement, cursorSize) {
  const uniqueText2ClassName = 'typedCursor-' + typedElement.dataset.identifier.replace(/\s+/g, '-').toLowerCase();
  const text2Style = document.createElement('style');
  text2Style.innerHTML = `.${uniqueText2ClassName} { 
      font-size: ${cursorSize}; 
      vertical-align: middle;
  }`;
  document.head.appendChild(text2Style);
  return uniqueText2ClassName;
}

function getText2Sentences(typedElement) {
  let text2Sentences = [];
  let i = 1;
  while(typedElement.hasAttribute(`data-smart-typing-sentence${i}`)) {
    text2Sentences.push(typedElement.getAttribute(`data-smart-typing-sentence${i}`));
    i++;
  }
  return text2Sentences;
}

const typedText2Elements = document.querySelectorAll('[data-identifier="smart-typing"]');
typedText2Elements.forEach(typedText2 => {
  const typedText2SpeedValue = parseFloat(typedText2.getAttribute('data-typing-speed'));
  const typedText2CursorSize = typedText2.getAttribute('data-type-cursor-size');
  const text2CursorClass = makeText2CursorStyle(typedText2, typedText2CursorSize);
  const text2LoopValue = typedText2.getAttribute('data-smart-typing-loop') === 'true' ? true : false; // Default value is false

  const text2Sentences = getText2Sentences(typedText2);

  const text2Typed = new Typed(typedText2, {
    strings: text2Sentences,
    typeSpeed: typedText2SpeedValue,
    cursorChar: `<span class="${text2CursorClass}">|</span>`,
    smartBackspace: true,
    loop: text2LoopValue,
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
