let date3Original = new Date();

// Assume this div contains both attributes: data-identifier="current-date" and data-current-timezone="X"
let date3Div = document.querySelector('[data-identifier="current-date"]');
let date3Timezone = parseInt(date3Div.getAttribute("data-current-timezone")) || 0;

// Adjust the date based on the timezone offset
date3Original.setHours(date3Original.getHours() + date3Timezone);

let date3Day = date3Original.getDate().toString().padStart(2, '0');  // Ensure day is two digits
let date3Month = (date3Original.getMonth() + 1).toString().padStart(2, '0');  // Ensure month is two digits
let date3Year = date3Original.getFullYear();

document.querySelector('[data-identifier="current-day"]').textContent = `${date3Day}/`;
document.querySelector('[data-identifier="current-month"]').textContent = `${date3Month}/`;
document.querySelector('[data-identifier="current-year"]').textContent = `${date3Year}`;

