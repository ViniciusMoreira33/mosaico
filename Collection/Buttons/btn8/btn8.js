document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('[data-identifier="twitter-share"]').addEventListener("click", function(event) {
        event.preventDefault();

        // Fetches values from data attributes
        var shareMessage = this.getAttribute('data-share-message');
        var shareUrl = this.getAttribute('data-share-url');

        // Custom Twitter share URL
        var url = "https://twitter.com/intent/tweet?";
        url += "text=" + encodeURIComponent(shareMessage); // share text from data attribute
        url += "&url=" + encodeURIComponent(shareUrl); // URL from data attribute

        // Open new window with the Twitter sharing dialog
        window.open(url, '_blank');
    });
});
