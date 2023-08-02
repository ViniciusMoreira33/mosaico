function rotateClockHands() {
    const clockElement = document.querySelector('[data-identifier="live-clock"]');
    const timezoneOffset = clockElement.getAttribute('data-live-clock-timezone');

    let now = new Date();

    let hour, minute, second;

    if (timezoneOffset) {
        // Convert the timezone offset from string to integer and handle if it's not a number
        const timezoneOffsetInt = parseInt(timezoneOffset, 10);
        if (isNaN(timezoneOffsetInt)) {
            console.error('Invalid data-live-clock-timezone value:', timezoneOffset);
            return;
        }

        // Adjust the date to the desired timezone if an offset is specified
        const offsetMillis = timezoneOffsetInt * 60 * 60 * 1000;
        now = new Date(now.getTime() + offsetMillis);

        hour = now.getUTCHours();
        minute = now.getUTCMinutes();
        second = now.getUTCSeconds();
    } else {
        // Get the local time when no timezone attribute is set
        hour = now.getHours();
        minute = now.getMinutes();
        second = now.getSeconds();
    }

    const hourHand = document.querySelector('[data-identifier="live-clock-hour"]');
    const minuteHand = document.querySelector('[data-identifier="live-clock-minute"]');
    const secondHand = document.querySelector('[data-identifier="live-clock-second"]');

    const hourRotation = 360 * (hour % 12) / 12 + 30 * (minute / 60);
    const minuteRotation = 360 * minute / 60;
    const secondRotation = 360 * second / 60;

    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
}

setInterval(rotateClockHands, 1000);
rotateClockHands();
