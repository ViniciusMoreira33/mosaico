<script>
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
</script>
