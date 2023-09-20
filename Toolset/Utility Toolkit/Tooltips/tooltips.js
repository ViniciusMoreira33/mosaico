/*
 * Copyright (c) 2023 Mosaico
 * 
 * This code is part of the Mosaico's Collection and is subject to the terms of the Mosaico Software License Agreement.
 * Unauthorized use, copying, modification, or distribution of this code without valid permission is strictly prohibited.
 * 
 * For licensing information, please refer to the Mosaico Software License Agreement available at www.mosaico.site/privacy-policy-and-terms
 */

document.addEventListener('DOMContentLoaded', function() {

    // Dynamically load the Popper.js script
    var popperScript = document.createElement('script');
    popperScript.src = 'https://unpkg.com/@popperjs/core@2/dist/umd/popper.min.js';
    popperScript.onload = loadTippy; // After Popper is loaded, load Tippy
    document.head.appendChild(popperScript);

    // Load the Tippy styles
    var tippyStyles = document.createElement('link');
    tippyStyles.rel = 'stylesheet';
    tippyStyles.href = 'https://unpkg.com/tippy.js@6/themes/light.css'; // Adjust this URL based on the theme you want to use from Tippy 6
    document.head.appendChild(tippyStyles);

    function loadTippy() {
        // Dynamically load the Tippy.js script
        var tippyScript = document.createElement('script');
        tippyScript.src = 'https://unpkg.com/tippy.js@6/dist/tippy-bundle.umd.js';
        tippyScript.onload = initializeTippy;  // Initialize tippy only after its script is loaded
        document.head.appendChild(tippyScript);
    }

    function initializeTippy() {
        // Query all elements with the data-identifier "tooltip"
        const tooltipButtons = document.querySelectorAll('[data-identifier="tooltip"]');

        // For each button
        tooltipButtons.forEach(button => {
            // Retrieve the attributes
            const tooltipContent = button.getAttribute('data-tooltip-content') || '';
            const tooltipPlacement = button.getAttribute('data-tooltip-placement') || 'top';
            const tooltipArrow = button.hasAttribute('data-tooltip-arrow') ? button.getAttribute('data-tooltip-arrow') === 'true' : true;
            const tooltipAnimation = button.getAttribute('data-tooltip-animation') || 'fade';
            const tooltipDelay = parseInt(button.getAttribute('data-tooltip-delay')) || 0; // convert to integer
            const tooltipDuration = parseInt(button.getAttribute('data-tooltip-duration')) || 0; // convert to integer

            // Create the tooltip
            tippy(button, {
                content: tooltipContent,
                placement: tooltipPlacement,
                arrow: tooltipArrow,
                animation: tooltipAnimation,
                delay: tooltipDelay,
                duration: tooltipDuration
            });
        });
    }
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
