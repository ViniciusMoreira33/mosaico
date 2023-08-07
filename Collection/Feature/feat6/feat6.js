function feat6DownloadFile(e) {
  e.preventDefault();
  var feat6Url = e.currentTarget.getAttribute('href').trim();

  // Check if the href attribute is empty
  if (!feat6Url || feat6Url === "#") {
    alert('No file attached to download.');
    return;
  }
  
  var feat6FileName = feat6Url.split('/').pop();
  fetch(feat6Url)
    .then(response => response.blob())
    .then(blob => {
      const feat6BlobUrl = URL.createObjectURL(blob);
      const feat6TempLink = document.createElement('a');
      feat6TempLink.href = feat6BlobUrl;
      feat6TempLink.download = feat6FileName;
      feat6TempLink.click();
      URL.revokeObjectURL(feat6BlobUrl);  // Free up memory
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
      window.location.href = feat6Url; // If the download fails, redirect to the file
    });
}

// Get the buttons by their data-identifiers
var feat6PdfButton = document.querySelector('[data-identifier="download-pdf"]');
var feat6ImageButton = document.querySelector('[data-identifier="download-image"]');

// Attach event listeners to the buttons
feat6PdfButton.addEventListener('click', feat6DownloadFile);
feat6ImageButton.addEventListener('click', feat6DownloadFile);
