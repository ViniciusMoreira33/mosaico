/*
 * Copyright (c) 2023 Mosaico
 * 
 * This code is part of the Mosaico's Collection and is subject to the terms of the Mosaico Software License Agreement.
 * Unauthorized use, copying, modification, or distribution of this code without valid permission is strictly prohibited.
 * 
 * For licensing information, please refer to the Mosaico Software License Agreement available at www.mosaico.site/privacy-policy-and-terms
 */

document.addEventListener('DOMContentLoaded', function() {
    // Handle checkboxes
    var form4Checkboxes = document.querySelectorAll('input[type="checkbox"]');
    form4Checkboxes.forEach(function(form4Checkbox) {
        form4Checkbox.addEventListener('change', function() {
            var form4ButtonElement = form4Checkbox.closest('[data-identifier="checkbox-button"]');
            var form4BgColor = form4ButtonElement.getAttribute('data-checkbox-active-bg');
            var form4TextColor = form4ButtonElement.getAttribute('data-checkbox-active-text');
            
            if (form4Checkbox.checked) {
                if (form4BgColor) form4ButtonElement.style.backgroundColor = form4BgColor;
                if (form4TextColor) form4ButtonElement.style.color = form4TextColor;
            } else {
                form4ButtonElement.style.backgroundColor = '';
                form4ButtonElement.style.color = '';
            }
        });
    });

    // Handle radio buttons
    var form4RadioButtons = document.querySelectorAll('input[type="radio"]');
    form4RadioButtons.forEach(function(form4RadioButton) {
        form4RadioButton.addEventListener('change', function() {
            // Reset styles for all radio buttons in the same group
            var form4SameGroup = document.querySelectorAll('input[type="radio"][name="' + form4RadioButton.name + '"]');
            form4SameGroup.forEach(function(form4Radio) {
                var form4ButtonElement = form4Radio.closest('[data-identifier="radio-button"]');
                form4ButtonElement.style.backgroundColor = '';
                form4ButtonElement.style.color = '';
            });
            
            // Apply styles to the selected radio button
            var form4ButtonElement = form4RadioButton.closest('[data-identifier="radio-button"]');
            var form4BgColor = form4ButtonElement.getAttribute('data-radio-active-bg');
            var form4TextColor = form4ButtonElement.getAttribute('data-radio-active-text');
            if (form4BgColor) form4ButtonElement.style.backgroundColor = form4BgColor;
            if (form4TextColor) form4ButtonElement.style.color = form4TextColor;
        });
    });
});
