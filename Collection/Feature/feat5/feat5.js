/*
 * Copyright (c) 2023 Mosaico
 * 
 * This code is part of the Mosaico's Collection and is subject to the terms of the Mosaico Software License Agreement.
 * Unauthorized use, copying, modification, or distribution of this code without valid permission is strictly prohibited.
 * 
 * For licensing information, please refer to the Mosaico Software License Agreement available at www.mosaico.site/privacy-policy-and-terms
 */

var qrcode;

    function createQR() {
        var qrcodeDivs = document.querySelectorAll('[data-identifier="feature-qr-code"]');
        
        qrcodeDivs.forEach(function(qrcodeDiv) {
            var url = qrcodeDiv.getAttribute('data-qr-code');
            
            // Get color attributes from the div
            var colorLight = qrcodeDiv.getAttribute('data-qr-color-light') || "#ffffff";
            var colorDark = qrcodeDiv.getAttribute('data-qr-color-dark') || "#000000";

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


//This Mosaico element uses qrcode.js (License below)

/*The MIT License (MIT)
---------------------
Copyright (c) 2012 davidshimjs

Permission is hereby granted, free of charge,
to any person obtaining a copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*/
