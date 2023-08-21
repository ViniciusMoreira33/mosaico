/*
 * Copyright (c) 2023 Mosaico
 * 
 * This code is part of the Mosaico's Collection and is subject to the terms of the Mosaico Software License Agreement.
 * Unauthorized use, copying, modification, or distribution of this code without valid permission is strictly prohibited.
 * 
 * For licensing information, please refer to the Mosaico Software License Agreement available at www.mosaico.site/privacy-policy-and-terms
 */

// Wait for the page to load completely
document.addEventListener('DOMContentLoaded', function() {
    // Handle checkboxes
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            var buttonElement = checkbox.closest('[data-identifier="checkbox-button"]');
            var bgColor = buttonElement.getAttribute('data-checkbox-active-bg');
            var textColor = buttonElement.getAttribute('data-checkbox-active-text');
            
            if (checkbox.checked) {
                if (bgColor) buttonElement.style.backgroundColor = bgColor;
                if (textColor) buttonElement.style.color = textColor;
            } else {
                buttonElement.style.backgroundColor = '';
                buttonElement.style.color = '';
            }
        });
    });

    // Handle radio buttons
    var radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(function(radioButton) {
        radioButton.addEventListener('change', function() {
            // Reset styles for all radio buttons in the same group
            var sameGroup = document.querySelectorAll('input[type="radio"][name="' + radioButton.name + '"]');
            sameGroup.forEach(function(radio) {
                var buttonElement = radio.closest('[data-identifier="radio-button"]');
                buttonElement.style.backgroundColor = '';
                buttonElement.style.color = '';
            });
            
            // Apply styles to the selected radio button
            var buttonElement = radioButton.closest('[data-identifier="radio-button"]');
            var bgColor = buttonElement.getAttribute('data-radio-active-bg');
            var textColor = buttonElement.getAttribute('data-radio-active-text');
            if (bgColor) buttonElement.style.backgroundColor = bgColor;
            if (textColor) buttonElement.style.color = textColor;
        });
    });
});
