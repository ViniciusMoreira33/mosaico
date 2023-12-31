/*
 * Copyright (c) 2023 Mosaico
 * 
 * This code is part of the Mosaico's Collection and is subject to the terms of the Mosaico Software License Agreement.
 * Unauthorized use, copying, modification, or distribution of this code without valid permission is strictly prohibited.
 * 
 * For licensing information, please refer to the Mosaico Software License Agreement available at www.mosaico.site/privacy-policy-and-terms
 */

document.addEventListener("DOMContentLoaded", function () {
    var css2Elements = document.querySelectorAll('[data-identifier="shadow-animation"]');
    css2Elements.forEach(function (css2Element) {
        var css2Duration = parseFloat(css2Element.getAttribute("data-shadow-duration")) || 1;
        var css2Delay = parseFloat(css2Element.getAttribute("data-shadow-delay")) || 0;
        var css2EasingMap = {
            "easeIn": "ease-in",
            "easeOut": "ease-out",
            "easeInOut": "ease-in-out",
            "linear": "linear"
        };
        var css2Easing = css2EasingMap[css2Element.getAttribute("data-shadow-easing")] || "linear";

        var css2XShadow = css2Element.getAttribute("data-x-shadow") || "10px";
        var css2YShadow = css2Element.getAttribute("data-y-shadow") || "10px";
        var css2Blur = css2Element.getAttribute("data-shadow-blur") || "5px";
        var css2Spread = css2Element.getAttribute("data-shadow-spread") || "5px";
        var css2Color = css2Element.getAttribute("data-shadow-color") || "black";

        var css2InitialBoxShadow = window.getComputedStyle(css2Element).boxShadow;
        var css2EndBoxShadow = `${css2XShadow} ${css2YShadow} ${css2Blur} ${css2Spread} ${css2Color}`;

        var css2BoxShadowTransition = `box-shadow ${css2Duration}s ${css2Easing}`;

        css2Element.style.transition = css2BoxShadowTransition;

        var css2Trigger = css2Element.getAttribute("data-shadow-trigger") || "auto";

        var css2IsReversed = false; // Track the state of the box-shadow

        switch (css2Trigger.toLowerCase()) {
            case "click once":
                css2Element.addEventListener("click", function () {
                    setTimeout(function () { css2Element.style.boxShadow = css2EndBoxShadow; }, css2Delay * 1000);
                });
                break;
            case "click reverse":
                css2Element.addEventListener("click", function () {
                    setTimeout(function () {
                        if (css2IsReversed) {
                            css2Element.style.boxShadow = css2EndBoxShadow;
                        } else {
                            css2Element.style.boxShadow = css2InitialBoxShadow;
                        }
                        css2IsReversed = !css2IsReversed;
                    }, css2Delay * 1000);
                });
                break;
            case "hover":
                css2Element.addEventListener("mouseover", function () {
                    setTimeout(function () { css2Element.style.boxShadow = css2EndBoxShadow; }, css2Delay * 1000);
                });
                css2Element.addEventListener("mouseout", function () {
                    css2Element.style.boxShadow = css2InitialBoxShadow;
                });
                break;
            case "auto":
            default:
                setTimeout(function () { css2Element.style.boxShadow = css2EndBoxShadow; }, css2Delay * 1000);
                break;
        }
    });
});
