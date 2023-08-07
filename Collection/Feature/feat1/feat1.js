var feat1Clipboard = new ClipboardJS('[data-clipboard-target]'); // Targeting the triggers using the data-clipboard-target attribute

feat1Clipboard.on('success', function(feat1Event) {
    var feat1OriginalText = feat1Event.trigger.innerHTML;

    feat1Event.trigger.innerHTML = "Copied!";
    feat1Event.clearSelection();

    setTimeout(function() {
        feat1Event.trigger.innerHTML = feat1OriginalText;
    }, 2000);
});

feat1Clipboard.on('error', function(feat1ErrorEvent) {
    console.error('Action:', feat1ErrorEvent.action);
    console.error('Trigger:', feat1ErrorEvent.trigger);
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
