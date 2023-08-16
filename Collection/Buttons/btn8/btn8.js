/*
 * Copyright (c) 2023 Mosaico
 * 
 * This code is part of the Mosaico's Collection and is subject to the terms of the Mosaico Software License Agreement.
 * Unauthorized use, copying, modification, or distribution of this code without valid permission is strictly prohibited.
 * 
 * For licensing information, please refer to the Mosaico Software License Agreement available at www.mosaico.site/privacy-policy-and-terms
 */

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('[data-identifier="twitter-share"]').addEventListener("click", function(event) {
        event.preventDefault();

        // Fetches values from data attributes
        var shareMessage = this.getAttribute('data-share-message');

        // Custom Twitter share URL
        var url = "https://twitter.com/intent/tweet?";
        url += "text=" + encodeURIComponent(shareMessage); // share text from data attribute

        // Open new window with the Twitter sharing dialog
        window.open(url, '_blank');
    });
});

