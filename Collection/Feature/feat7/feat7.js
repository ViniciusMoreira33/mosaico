// Wait for the document to load
document.addEventListener("DOMContentLoaded", function() {
  // Query all elements with the data-identifier "feature-tooltip"
  const feat7Buttons = document.querySelectorAll('[data-identifier="feature-tooltip"]');

  // For each button
  feat7Buttons.forEach(button => {
    // Retrieve the attributes
    const feat7Content = button.getAttribute('data-tooltip-content') || '';
    const feat7Placement = button.getAttribute('data-tooltip-placement') || 'top';
    const feat7Arrow = button.getAttribute('data-tooltip-arrow') === 'true'; // convert to boolean
    const feat7Animation = button.getAttribute('data-tooltip-animation') || 'fade';
    const feat7Delay = parseInt(button.getAttribute('data-tooltip-delay')) || 0; // convert to integer
    const feat7Duration = parseInt(button.getAttribute('data-tooltip-duration')) || 0; // convert to integer
  
    // Create the tooltip
    tippy(button, {
      content: feat7Content,
      placement: feat7Placement,
      arrow: feat7Arrow,
      animation: feat7Animation,
      delay: feat7Delay,
      duration: feat7Duration
    });
  });
});


//This Mosaico element uses tippy.js (License below)

/*
MIT License

Copyright (c) 2017-present atomiks

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
