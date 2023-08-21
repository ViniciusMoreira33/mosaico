/*
 * Copyright (c) 2023 Mosaico
 * 
 * This code is part of the Mosaico's Collection and is subject to the terms of the Mosaico Software License Agreement.
 * Unauthorized use, copying, modification, or distribution of this code without valid permission is strictly prohibited.
 * 
 * For licensing information, please refer to the Mosaico Software License Agreement available at www.mosaico.site/privacy-policy-and-terms
 */

$(function() {
    // Default date format
    var form3DefaultDateFormat = "mm/dd/yy";

    var container = $('[data-identifier="datepicker-container"]');

    var form3From = $('#from').attr('autocomplete', 'off').datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 3,
        dateFormat: $('#from').attr('data-datepicker-format') || form3DefaultDateFormat,
        minDate: $('[data-identifier="datepicker-button-from"]').attr('data-datepicker-past-date') === "false" ? 0 : null,
        showAnim: $('[data-identifier="datepicker-from"]').attr('data-datepicker-animation') || "show",
        onClose: function(selectedDate) {
            if (selectedDate) {
                form3To.datepicker("option", "minDate", selectedDate);
            }
        },
        beforeShow: function() {
            styleDatePicker();
        }
    });

    var form3To = $('#to').attr('autocomplete', 'off').datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 3,
        dateFormat: $('#to').attr('data-datepicker-format') || form3DefaultDateFormat,
        minDate: $('[data-identifier="datepicker-button-to"]').attr('data-datepicker-past-date') === "false" ? 0 : null,
        showAnim: $('[data-identifier="datepicker-to"]').attr('data-datepicker-animation') || "show",
        onClose: function(selectedDate) {
            if (selectedDate) {
                form3From.datepicker("option", "maxDate", selectedDate);
            }
        },
        beforeShow: function() {
            styleDatePicker();
        }
    });

    function styleDatePicker() {
        // Set font-family from the container's CSS
        $('.ui-datepicker').css('font-family', container.css('font-family'));

        // Set color from custom data attribute
        $('.ui-datepicker').css('color', container.attr('data-datepicker-color'));

        // Set background color from custom data attribute
        $('.ui-datepicker').css('background', container.attr('data-datepicker-bg-color'));
    }

    $('[data-identifier="datepicker-button-from"]').click(function() {
        form3From.datepicker('show');
    });

    $('[data-identifier="datepicker-button-to"]').click(function() {
        form3To.datepicker('show');
    });
});
