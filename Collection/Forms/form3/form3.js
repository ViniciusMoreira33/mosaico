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
    var defaultDateFormat = "mm/dd/yy";

    var from = $('#from').attr('autocomplete', 'off').datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 3,
        dateFormat: $('#from').attr('data-datepicker-format') || defaultDateFormat,
        onClose: function(selectedDate) {
            if (selectedDate) {
                to.datepicker("option", "minDate", selectedDate);
            }
        }
    });

    var to = $('#to').attr('autocomplete', 'off').datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 3,
        dateFormat: $('#to').attr('data-datepicker-format') || defaultDateFormat,
        onClose: function(selectedDate) {
            if (selectedDate) {
                from.datepicker("option", "maxDate", selectedDate);
            }
        }
    });

    $('[data-identifier="datepicker-button-from"]').click(function() {
        from.datepicker('show');
    });

    $('[data-identifier="datepicker-button-to"]').click(function() {
        to.datepicker('show');
    });
});
