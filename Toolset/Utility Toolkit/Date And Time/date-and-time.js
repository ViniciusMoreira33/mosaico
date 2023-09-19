/*
 * Copyright (c) 2023 Mosaico
 * 
 * This code is part of the Mosaico's Toolset and is subject to the terms of the Mosaico Software License Agreement.
 * Unauthorized use, copying, modification, or distribution of this code without valid permission is strictly prohibited.
 * 
 * For licensing information, please refer to the Mosaico Software License Agreement available at www.mosaico.site/privacy-policy-and-terms
 */
document.addEventListener("DOMContentLoaded", function() {

    function formatDate(dateObj, format) {
        let day = dateObj.getDate();
        let month = dateObj.getMonth() + 1;
        let year = dateObj.getFullYear();
        return format
            .replace("DD", String(day).padStart(2, '0'))
            .replace("MM", String(month).padStart(2, '0'))
            .replace("YYYY", String(year));
    }

function formatTime(dateObj, format) {
    let hours = dateObj.getHours();
    let minutes = dateObj.getMinutes();
    let seconds = dateObj.getSeconds();
    let period = hours >= 12 ? 'PM' : 'AM';

    if (format.includes("hh")) {
        hours = hours % 12 || 12;
    }
    
    return format
        .replace("HH", String(hours).padStart(2, '0'))
        .replace("hh", String(hours).padStart(2, '0'))
        .replace("mm", String(minutes).padStart(2, '0'))
        .replace("ss", String(seconds).padStart(2, '0'))
        .replace(" AM/PM", " " + period);
}

    function updateDateTime() {
        const elements = document.querySelectorAll('[data-identifier="date-and-time"]');
        elements.forEach(mainElement => {
            let timeFormatAttr = mainElement.getAttribute('data-time-format') || "HH:mm:ss";
            let dateFormatAttr = mainElement.getAttribute('data-date-format') || "DD/MM/YYYY";
            let timezoneAttr = mainElement.getAttribute('data-timezone') || (-new Date().getTimezoneOffset() / 60).toString();

            let date = new Date();
            let dateInUTC = date.getTime() + (date.getTimezoneOffset() * 60000);
            let timeInDesiredTimezone = new Date(dateInUTC + (parseInt(timezoneAttr) * 3600000));

            // Handle Date
            if (mainElement.getAttribute('data-date-type')) {
                switch (mainElement.getAttribute('data-date-type')) {
                    case "full":
                        mainElement.textContent = formatDate(timeInDesiredTimezone, dateFormatAttr);
                        break;
                    case "day":
                        mainElement.textContent = String(timeInDesiredTimezone.getDate()).padStart(2, '0');
                        break;
                    case "month":
                        mainElement.textContent = String(timeInDesiredTimezone.getMonth() + 1).padStart(2, '0');
                        break;
                    case "year":
                        mainElement.textContent = String(timeInDesiredTimezone.getFullYear());
                        break;
                }
            }

            // Handle Time
            if (mainElement.getAttribute('data-time-type')) {
                switch (mainElement.getAttribute('data-time-type')) {
                    case "full":
                        mainElement.textContent = formatTime(timeInDesiredTimezone, timeFormatAttr);
                        break;
                    case "hour":
                        let hourOnlyFormat = timeFormatAttr.includes("hh") ? "hh AM/PM" : "HH";
                        mainElement.textContent = formatTime(timeInDesiredTimezone, hourOnlyFormat);
                        break;
                    case "minute":
                        mainElement.textContent = String(timeInDesiredTimezone.getMinutes()).padStart(2, '0');
                        break;
                    case "second":
                        mainElement.textContent = String(timeInDesiredTimezone.getSeconds()).padStart(2, '0');
                        break;
                }
            }
        });
    }

    // Initialize the date and time immediately
    updateDateTime();
    
    // Update the date and time every second
    setInterval(updateDateTime, 1000);

});
