document.addEventListener("DOMContentLoaded", function() {
    const date2Element = document.querySelector("[data-identifier='countdown']");
    const date2EndElement = document.querySelector("[data-identifier='countdown-end']");

    const date2FutureDateValue = date2Element.getAttribute("data-countdown-date");
    const date2TimeValue = date2Element.getAttribute("data-countdown-time");
    const timezoneOffset = parseInt(date2Element.getAttribute("data-countdown-timezone"), 10) || 0;  // Default to 0 if not provided

    const date2DateParts = date2FutureDateValue.split("/").map(part => parseInt(part.trim(), 10));
    const date2TimeParts = date2TimeValue.split("h").join(":").split(":").map(part => parseInt(part.trim(), 10));

    // Convert to the desired timezone
    const date2FutureDate = new Date(Date.UTC(date2DateParts[2], date2DateParts[1] - 1, date2DateParts[0], date2TimeParts[0] - timezoneOffset, date2TimeParts[1]));

    requestAnimationFrame(date2UpdateCountdown);

    function date2UpdateCountdown() {
        const currentDate = new Date();
        if (currentDate >= date2FutureDate) {
            date2Element.style.display = "none";
            date2EndElement.style.display = "block";
            return;
        }

        // Calculate each unit
        let timeUnits = {
            year: date2FutureDate.getFullYear() - currentDate.getFullYear(),
            month: date2FutureDate.getMonth() - currentDate.getMonth(),
            day: date2FutureDate.getDate() - currentDate.getDate(),
            hour: date2FutureDate.getHours() - currentDate.getHours(),
            minute: date2FutureDate.getMinutes() - currentDate.getMinutes(),
            second: date2FutureDate.getSeconds() - currentDate.getSeconds()
        };

        // Adjust the units
        if (timeUnits.second < 0) {
            timeUnits.minute -= 1;
            timeUnits.second += 60;
        }
        if (timeUnits.minute < 0) {
            timeUnits.hour -= 1;
            timeUnits.minute += 60;
        }
        if (timeUnits.hour < 0) {
            timeUnits.day -= 1;
            timeUnits.hour += 24;
        }
        if (timeUnits.day < 0) {
            timeUnits.month -= 1;
            const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
            timeUnits.day += daysInMonth;
        }
        if (timeUnits.month < 0) {
            timeUnits.year -= 1;
            timeUnits.month += 12;
        }

        // Weeks (derived from days)
        timeUnits.week = Math.floor(timeUnits.day / 7);
        timeUnits.day %= 7;

        // Update the DOM
        const countdownUnits = document.querySelectorAll("[data-countdown-unit]");
        countdownUnits.forEach(element => {
            const unit = element.getAttribute("data-countdown-unit");
            if (unit in timeUnits) {
                element.textContent = (unit === "second") ? timeUnits[unit].toString().padStart(2, '0') : timeUnits[unit];
            }
        });

        requestAnimationFrame(date2UpdateCountdown);
    }
});
