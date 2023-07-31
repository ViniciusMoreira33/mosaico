    var qrcode;

    function createQR() {
        var qrcodeDivs = document.querySelectorAll('[data-identifier="feature-qr-code"]');
        
        qrcodeDivs.forEach(function(qrcodeDiv) {
            var url = qrcodeDiv.getAttribute('data-qr-code');
            
            // Get color attributes from the div
            var colorLight = qrcodeDiv.getAttribute('data-color-light') || "#ffffff";
            var colorDark = qrcodeDiv.getAttribute('data-color-dark') || "#000000";

            // Clear any existing QR codes in the container
            qrcodeDiv.innerHTML = "";
            
            // Create a new QR code
            qrcode = new QRCode(qrcodeDiv, {
                text: url,
                colorLight: colorLight,
                colorDark: colorDark,
            });
        });
    }

    window.onload = function() {
        createQR();
    }
