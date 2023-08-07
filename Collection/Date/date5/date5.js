function rotateClockHands() {
    const date5ClockElement = document.querySelector('[data-identifier="live-clock"]');
    const date5TimezoneOffset = date5ClockElement.getAttribute('data-live-clock-timezone');

    let date5Now = new Date();

    let date5Hour, date5Minute, date5Second;

    if (date5TimezoneOffset) {
        // Convert the timezone offset from string to integer and handle if it's not a number
        const date5TimezoneOffsetInt = parseInt(date5TimezoneOffset, 10);
        if (isNaN(date5TimezoneOffsetInt)) {
            console.error('Invalid data-live-clock-timezone value:', date5TimezoneOffset);
            return;
        }

        // Adjust the date to the desired timezone if an offset is specified
        const date5OffsetMillis = date5TimezoneOffsetInt * 60 * 60 * 1000;
        date5Now = new Date(date5Now.getTime() + date5OffsetMillis);

        date5Hour = date5Now.getUTCHours();
        date5Minute = date5Now.getUTCMinutes();
        date5Second = date5Now.getUTCSeconds();
    } else {
        // Get the local time when no timezone attribute is set
        date5Hour = date5Now.getHours();
        date5Minute = date5Now.getMinutes();
        date5Second = date5Now.getSeconds();
    }

    const date5HourHand = document.querySelector('[data-identifier="live-clock-hour"]');
    const date5MinuteHand = document.querySelector('[data-identifier="live-clock-minute"]');
    const date5SecondHand = document.querySelector('[data-identifier="live-clock-second"]');

    const date5HourRotation = 360 * (date5Hour % 12) / 12 + 30 * (date5Minute / 60);
    const date5MinuteRotation = 360 * date5Minute / 60;
    const date5SecondRotation = 360 * date5Second / 60;

    date5HourHand.style.transform = `rotate(${date5HourRotation}deg)`;
    date5MinuteHand.style.transform = `rotate(${date5MinuteRotation}deg)`;
    date5SecondHand.style.transform = `rotate(${date5SecondRotation}deg)`;
}

setInterval(rotateClockHands, 1000);
rotateClockHands();
