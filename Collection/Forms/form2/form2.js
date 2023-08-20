/*
 * Copyright (c) 2023 Mosaico
 * 
 * This code is part of the Mosaico's Collection and is subject to the terms of the Mosaico Software License Agreement.
 * Unauthorized use, copying, modification, or distribution of this code without valid permission is strictly prohibited.
 * 
 * For licensing information, please refer to the Mosaico Software License Agreement available at www.mosaico.site/privacy-policy-and-terms
 */

window.onload = function() {
    var form2PasswordInput = document.querySelector('input[data-identifier="password-input"]');
    var form2ToggleButton = document.querySelector('[data-identifier="password-toggle"]');
    var form2ShowIcon = document.querySelector('[data-identifier="password-show-icon"]');
    var form2HideIcon = document.querySelector('[data-identifier="password-hide-icon"]');
    var form2ConditionsList = document.querySelector('[data-identifier="password-conditions"]');
    var form2Form = form2PasswordInput.form;

    var form2ConditionChecks = {
        "data-password-max-characters": function(password, conditionElement) {
            var max = conditionElement.getAttribute('data-password-max-characters');
            return password.length <= parseInt(max);
        },
        "data-password-min-characters": function(password, conditionElement) {
            var min = conditionElement.getAttribute('data-password-min-characters');
            return password.length >= parseInt(min);
        },
        "data-required-capital-letter": function(password) {
            return /[A-Z]/.test(password);
        },
        "data-required-number": function(password) {
            return /\d/.test(password);
        },
        "data-required-symbol": function(password, conditionElement) {
            var symbols = conditionElement.getAttribute('data-required-symbol').split("");
            var form2SymbolFound = false;
            for(var i = 0; i < symbols.length; i++){
                if(password.includes(symbols[i])){
                    if(form2SymbolFound){ // if we have found a symbol before, return false
                        return false;
                    }
                    form2SymbolFound = true;
                }
            }
            return form2SymbolFound;
        }
    };

    function updateConditionColors() {
        var password = form2PasswordInput.value;
        var form2ConditionElements = form2ConditionsList.querySelectorAll('[data-required-capital-letter], [data-required-number], [data-required-symbol], [data-password-max-characters], [data-password-min-characters]');
        var form2ConditionsMet = 0;

        form2ConditionElements.forEach(function(conditionElement) {
            Object.keys(form2ConditionChecks).forEach(function(checkKey) {
                var conditionCheck = form2ConditionChecks[checkKey];
                if(conditionElement.hasAttribute(checkKey)) {
                    var isConditionMet = conditionCheck(password, conditionElement);
                    var conditionText = conditionElement.querySelector('[data-identifier="password-conditions-text"]');
                    if(conditionText) {
                        conditionText.style.color = isConditionMet ? 'green' : 'red';
                    }
                    if (isConditionMet) {
                        form2ConditionsMet++;
                    }
                }
            });
        });

        // Store the form2ConditionsMet count in a data attribute on the password input for easy access later
        form2PasswordInput.setAttribute('data-conditions-met', form2ConditionsMet === form2ConditionElements.length);
    }

    function togglePasswordVisibility() {
        if (form2PasswordInput.type === 'text') {
            form2PasswordInput.type = 'password';
            form2HideIcon.style.display = 'inline-block';
            form2ShowIcon.style.display = 'none';
        } else {
            form2PasswordInput.type = 'text';
            form2HideIcon.style.display = 'none';
            form2ShowIcon.style.display = 'inline-block';
        }
    }

    function formSubmitHandler(e) {
        var form2ConditionElements = form2ConditionsList.querySelectorAll('[data-required-capital-letter], [data-required-number], [data-required-symbol], [data-password-max-characters], [data-password-min-characters]');
        if(form2ConditionElements.length > 0) { // only prevent submission if there are conditions
            var form2ConditionsMet = form2PasswordInput.getAttribute('data-conditions-met') === 'true';
            if (!form2ConditionsMet) {
                e.preventDefault();
                alert("All password conditions must be met");
            }
        }
    }

    // Event listeners
    form2PasswordInput.addEventListener('input', updateConditionColors);
    form2PasswordInput.addEventListener('keydown', function(e) {
        if(e.key === 'Enter') {
            var form2ConditionElements = form2ConditionsList.querySelectorAll('[data-required-capital-letter], [data-required-number], [data-required-symbol], [data-password-max-characters], [data-password-min-characters]');
            if(form2ConditionElements.length > 0) { // only prevent submission if there are conditions
                var form2ConditionsMet = form2PasswordInput.getAttribute('data-conditions-met') === 'true';
                if (!form2ConditionsMet) {
                    e.preventDefault();
                    alert("All password conditions must be met");
                }
            }
        }
    });

    form2ToggleButton.addEventListener('click', function(e) {
        e.preventDefault();
        togglePasswordVisibility();
    });

    form2Form.addEventListener('submit', formSubmitHandler);

    // Initial state
    form2PasswordInput.type = 'password';
    form2HideIcon.style.display = 'inline-block';
    form2ShowIcon.style.display = 'none';
};
