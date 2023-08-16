/*
 * Copyright (c) 2023 Mosaico
 * 
 * This code is part of the Mosaico's Collection and is subject to the terms of the Mosaico Software License Agreement.
 * Unauthorized use, copying, modification, or distribution of this code without valid permission is strictly prohibited.
 * 
 * For licensing information, please refer to the Mosaico Software License Agreement available at www.mosaico.site/privacy-policy-and-terms
 */

let date4Element = document.querySelector('[data-identifier="current-time"]');
let date4FormatAttr = date4Element.getAttribute('data-time-format') || "24";
let date4TimezoneAttr = date4Element.getAttribute('data-timezone') || (-new Date().getTimezoneOffset() / 60).toString();

let date4HourElement = document.querySelector('[data-identifier="current-hour"]');
let date4MinuteElement = document.querySelector('[data-identifier="current-minute"]');
let date4SecondElement = document.querySelector('[data-identifier="current-second"]');

function date4UpdateTime() {
    // Check for changes in the data attributes and update them if necessary
    let newDate4FormatAttr = date4Element.getAttribute('data-time-format') || "24";
    let newDate4TimezoneAttr = date4Element.getAttribute('data-timezone') || (-new Date().getTimezoneOffset() / 60).toString();

    if (date4FormatAttr !== newDate4FormatAttr || date4TimezoneAttr !== newDate4TimezoneAttr) {
        date4FormatAttr = newDate4FormatAttr;
        date4TimezoneAttr = newDate4TimezoneAttr;
    }

    // Determine if 12-hour format should be used
    let date4Is12HourFormat = date4FormatAttr === "12" ? true : false;

    // Fetch and format the current date/time, adjusting by the UTC offset
    let date = new Date();
    let dateInUTC = date.getTime() + (date.getTimezoneOffset() * 60000);
    let date4TimeInDesiredTimezone = new Date(dateInUTC + (parseInt(date4TimezoneAttr) * 3600000));

    let date4Hours = date4TimeInDesiredTimezone.getHours();
    let date4Minutes = date4TimeInDesiredTimezone.getMinutes();
    let date4Seconds = date4TimeInDesiredTimezone.getSeconds();

    // If 12-hour format is desired, convert hours from 24-hour format to 12-hour format
    let date4Period = '';
    if (date4Is12HourFormat) {
        date4Period = date4Hours >= 12 ? 'PM' : 'AM';
        date4Hours = date4Hours % 12;
        date4Hours = date4Hours ? date4Hours : 12; // the hour '0' should be '12'
    }

    // Set the text content of the elements, using padStart() to ensure minutes and seconds are always two digits
    date4HourElement.textContent = `${String(date4Hours).padStart(2, '0')}${date4Period}`;
    date4MinuteElement.textContent = `${String(date4Minutes).padStart(2, '0')}`;
    date4SecondElement.textContent = `${String(date4Seconds).padStart(2, '0')}`;
}

// Call the date4UpdateTime function once at the start to initialize the time immediately
date4UpdateTime();

// Set an interval to update the time every second (1000 milliseconds)
setInterval(date4UpdateTime, 1000);

