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
