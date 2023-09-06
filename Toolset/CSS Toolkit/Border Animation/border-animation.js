/*
 * Copyright (c) 2023 Mosaico
 * 
 * This code is part of the Mosaico's Toolset and is subject to the terms of the Mosaico Software License Agreement.
 * Unauthorized use, copying, modification, or distribution of this code without valid permission is strictly prohibited.
 * 
 * For licensing information, please refer to the Mosaico Software License Agreement available at www.mosaico.site/privacy-policy-and-terms
 */

document.addEventListener("DOMContentLoaded", function () {
    var css1Elements = document.querySelectorAll('[data-identifier="border-animation"]');
    css1Elements.forEach(function (css1Element) {
        var css1Duration = parseFloat(css1Element.getAttribute("data-border-duration")) || 1;
        var css1Delay = parseFloat(css1Element.getAttribute("data-border-delay")) || 0;
        var css1EndBorderColor = css1Element.getAttribute("data-border-color") || "black";
        var css1EasingMap = {
            "easeIn": "ease-in",
            "easeOut": "ease-out",
            "easeInOut": "ease-in-out",
            "linear": "linear"
        };
        var css1Easing = css1EasingMap[css1Element.getAttribute("data-border-easing")] || "linear";
        var css1Trigger = css1Element.getAttribute("data-border-trigger") || "auto";
        var css1BorderSide = css1Element.getAttribute("data-border-side") || "all";
        var css1BorderRadius = css1Element.getAttribute("data-border-radius") || "0%";
        var css1EndBorderWidth = css1Element.getAttribute("data-border-width") || "1px";

        var initialState = {
            borderWidth: css1Element.style.borderWidth,
            borderColor: css1Element.style.borderColor,
            borderRadius: css1Element.style.borderRadius,
        };

        var css1Properties = {
            borderTopWidth: "0",
            borderBottomWidth: "0",
            borderLeftWidth: "0",
            borderRightWidth: "0",
            borderRadius: css1BorderRadius,
            borderColor: css1EndBorderColor,
        };

        switch (css1BorderSide.toLowerCase()) {
    case "top":
        css1Properties.borderTopWidth = css1EndBorderWidth;
        css1Properties.borderTopColor = css1EndBorderColor;
        break;
    case "bottom":
        css1Properties.borderBottomWidth = css1EndBorderWidth;
        css1Properties.borderBottomColor = css1EndBorderColor;
        break;
    case "right":
        css1Properties.borderRightWidth = css1EndBorderWidth;
        css1Properties.borderRightColor = css1EndBorderColor;
        break;
    case "left":
        css1Properties.borderLeftWidth = css1EndBorderWidth;
        css1Properties.borderLeftColor = css1EndBorderColor;
        break;
            case "top-right":
                css1Properties.borderRightWidth = css1Properties.borderTopWidth = css1EndBorderWidth;
                css1Properties.borderRightColor = css1Properties.borderTopColor = css1EndBorderColor;
                break;
            case "top-left":
                css1Properties.borderLeftWidth = css1Properties.borderTopWidth = css1EndBorderWidth;
                css1Properties.borderLeftColor = css1Properties.borderTopColor = css1EndBorderColor;
                break;
            case "bottom-right":
                css1Properties.borderRightWidth = css1Properties.borderBottomWidth = css1EndBorderWidth;
                css1Properties.borderRightColor = css1Properties.borderBottomColor = css1EndBorderColor;
                break;
            case "bottom-left":
                css1Properties.borderLeftWidth = css1Properties.borderBottomWidth = css1EndBorderWidth;
                css1Properties.borderLeftColor = css1Properties.borderBottomColor = css1EndBorderColor;
                break;
            case "vertical":
                css1Properties.borderTopWidth = css1Properties.borderBottomWidth = css1EndBorderWidth;
                css1Properties.borderTopColor = css1Properties.borderBottomColor = css1EndBorderColor;
                break;              
            case "horizontal":
                css1Properties.borderLeftWidth = css1Properties.borderRightWidth = css1EndBorderWidth;
                css1Properties.borderLeftColor = css1Properties.borderRightColor = css1EndBorderColor;
                break;               
            case "vertical-right":
                css1Properties.borderRightWidth = css1EndBorderWidth;
                css1Properties.borderRightColor = css1EndBorderColor;
                css1Properties.borderTopWidth = css1Properties.borderBottomWidth = css1EndBorderWidth;
                css1Properties.borderTopColor = css1Properties.borderBottomColor = css1EndBorderColor;
                break;
            case "vertical-left":
                css1Properties.borderLeftWidth = css1EndBorderWidth;
                css1Properties.borderLeftColor = css1EndBorderColor;
                css1Properties.borderTopWidth = css1Properties.borderBottomWidth = css1EndBorderWidth;
                css1Properties.borderTopColor = css1Properties.borderBottomColor = css1EndBorderColor;
                break;
            case "horizontal-bottom":
                css1Properties.borderBottomWidth = css1EndBorderWidth;
                css1Properties.borderBottomColor = css1EndBorderColor;
                css1Properties.borderLeftWidth = css1Properties.borderRightWidth = css1EndBorderWidth;
                css1Properties.borderLeftColor = css1Properties.borderRightColor = css1EndBorderColor;
                break;
            case "horizontal-top":
                css1Properties.borderTopWidth = css1EndBorderWidth;
                css1Properties.borderTopColor = css1EndBorderColor;
                css1Properties.borderLeftWidth = css1Properties.borderRightWidth = css1EndBorderWidth;
                css1Properties.borderLeftColor = css1Properties.borderRightColor = css1EndBorderColor;
                break;
            default:
                css1Properties.borderWidth = css1EndBorderWidth;
                css1Properties.borderColor = css1EndBorderColor;
                break;
        }

        var borderTransition = `border-color ${css1Duration}s ${css1Easing}, border-width ${css1Duration}s ${css1Easing}, border-radius ${css1Duration}s ${css1Easing}`;

        var animateBorder = function () {
            Object.assign(css1Element.style, css1Properties);
            css1Element.setAttribute("data-border-state", "end");
        };

        var reverseBorder = function () {
            Object.assign(css1Element.style, initialState);
            css1Element.setAttribute("data-border-state", "start");
        };

        css1Element.style.transition = borderTransition;

        switch (css1Trigger.toLowerCase()) {
            case "click once":
                css1Element.addEventListener("click", function () {
                    setTimeout(animateBorder, css1Delay * 1000);
                });
                break;
            case "click reverse":
                css1Element.addEventListener("click", function () {
                    setTimeout(function () {
                        if (css1Element.getAttribute("data-border-state") === "end") {
                            reverseBorder();
                        } else {
                            animateBorder();
                        }
                    }, css1Delay * 1000);
                });
                break;
            case "hover":
                css1Element.addEventListener("mouseover", function () {
                    setTimeout(animateBorder, css1Delay * 1000);
                });
                css1Element.addEventListener("mouseout", function () {
                    setTimeout(reverseBorder, css1Delay * 1000);
                });
                break;
            case "auto":
            default:
                setTimeout(animateBorder, css1Delay * 1000);
                break;
        }
    });
});
