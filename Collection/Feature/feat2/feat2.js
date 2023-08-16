/*
 * Copyright (c) 2023 Mosaico
 * 
 * This code is part of the Mosaico's Collection and is subject to the terms of the Mosaico Software License Agreement.
 * Unauthorized use, copying, modification, or distribution of this code without valid permission is strictly prohibited.
 * 
 * For licensing information, please refer to the Mosaico Software License Agreement available at www.mosaico.site/privacy-policy-and-terms
 */

var feat2Clipboard = new ClipboardJS('[data-clipboard-target]');

feat2Clipboard.on('success', function(feat2Event) {
    var feat2OriginalText = feat2Event.trigger.innerHTML;

    feat2Event.trigger.innerHTML = "Cut text!";
    feat2Event.clearSelection();

    setTimeout(function() {
        feat2Event.trigger.innerHTML = feat2OriginalText;
    }, 2000);
});

// If you also want to handle errors similar to the first code:
feat2Clipboard.on('error', function(feat2ErrorEvent) {
    console.error('Action:', feat2ErrorEvent.action);
    console.error('Trigger:', feat2ErrorEvent.trigger);
});


//This Mosaico element uses Clipboard.js (License below) 

/*
MIT License

Copyright (c) Zeno Rocha

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
