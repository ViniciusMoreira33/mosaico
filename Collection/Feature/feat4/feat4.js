var feat4Date = new Date();
var feat4UTCOffset = feat4Date.getTimezoneOffset() * 60 * 1000; // Convert the offset from minutes to milliseconds
var feat4LocalDate = new Date(feat4Date.getTime() + feat4UTCOffset); // Adjust the date object by the UTC offset

var feat4CurrentYear = feat4LocalDate.getUTCFullYear(); 
var feat4CurrentYearSpan = document.querySelector('[data-identifier="copyright-year"]');
feat4CurrentYearSpan.textContent = feat4CurrentYear;
