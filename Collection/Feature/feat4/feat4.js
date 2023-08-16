/*
 * Copyright (c) 2023 Mosaico
 * 
 * This code is part of the Mosaico's Collection and is subject to the terms of the Mosaico Software License Agreement.
 * Unauthorized use, copying, modification, or distribution of this code without valid permission is strictly prohibited.
 * 
 * For licensing information, please refer to the Mosaico Software License Agreement available at www.mosaico.site/privacy-policy-and-terms
 */

var feat4Date = new Date();
var feat4UTCOffset = feat4Date.getTimezoneOffset() * 60 * 1000; // Convert the offset from minutes to milliseconds
var feat4LocalDate = new Date(feat4Date.getTime() + feat4UTCOffset); // Adjust the date object by the UTC offset

var feat4CurrentYear = feat4LocalDate.getUTCFullYear(); 
var feat4CurrentYearSpan = document.querySelector('[data-identifier="copyright-year"]');
feat4CurrentYearSpan.textContent = feat4CurrentYear;
