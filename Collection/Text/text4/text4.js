/*
 * Copyright (c) 2023 Mosaico
 * 
 * This code is part of the Mosaico's Collection and is subject to the terms of the Mosaico Software License Agreement.
 * Unauthorized use, copying, modification, or distribution of this code without valid permission is strictly prohibited.
 * 
 * For licensing information, please refer to the Mosaico Software License Agreement available at www.mosaico.site/privacy-policy-and-terms
 */

document.addEventListener("DOMContentLoaded", function () {
    // Add the CSS styles
    const text4Style = document.createElement('style');
    text4Style.textContent = `
        [data-identifier="scrambling-effect"] {
            cursor: pointer;
            transition: all 1s ease;
        }
    `;
    document.head.appendChild(text4Style);

    const text4Elements = Array.from(document.querySelectorAll('[data-identifier="scrambling-effect"]'));
    const text4Letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-[]{}|;:,.<>/?`~';

    function text4GenerateSpanLetters(text) {
        return [...text].map(letter => `<span>${letter}</span>`).join('');
    }

    function text4ScrambleLetter(letter, shuffleMethod, originalText) {
        if (shuffleMethod === 'word') {
            return originalText[Math.floor(Math.random() * originalText.length)];
        } else {
            return letter === ' ' ? ' ' : text4GetRandomLetter();
        }
    }

    function text4GetRandomLetter() {
        return text4Letters[Math.floor(Math.random() * text4Letters.length)];
    }

    text4Elements.forEach(el => {
        let text4IsScrambling = false;
        let text4AnimationInterval = null;
        let text4OriginalText = el.textContent;
        let text4Duration = el.getAttribute('data-scrambling-duration') * 1000 || 0;
        let text4Trigger = el.getAttribute('data-scrambling-trigger') || 'hover';
        let text4Ease = el.getAttribute('data-scrambling-ease') || 'linear';
        let text4ShuffleMethod = el.getAttribute('data-scrambling-shuffle') || 'random';
        el.innerHTML = text4GenerateSpanLetters(text4OriginalText);

        let text4StartScrambling = () => {
            if (text4IsScrambling) return;

            text4IsScrambling = true;
            let text4Spans = Array.from(el.querySelectorAll('span'));

            text4Spans.forEach(span => span.style.transition = `all ${text4Duration}ms ${text4Ease}`);

            text4AnimationInterval = setInterval(() => {
                text4Spans.forEach(span => {
                    span.textContent = text4ScrambleLetter(span.textContent, text4ShuffleMethod, text4OriginalText);
                });
            }, 100);

            setTimeout(() => {
                text4StopScrambling();
            }, text4Duration);
        };

        let text4StopScrambling = () => {
            if (!text4IsScrambling) return;
            clearInterval(text4AnimationInterval);
            let text4Spans = Array.from(el.querySelectorAll('span'));
            text4Spans.forEach((span, index) => {
                span.textContent = text4OriginalText[index];
            });
            text4IsScrambling = false;
        };

        switch (text4Trigger) {
            case 'hover':
                el.addEventListener('mouseenter', text4StartScrambling);
                el.addEventListener('mouseleave', text4StopScrambling);
                break;
            case 'hover-in-out':
                el.addEventListener('mouseenter', text4StartScrambling);
                el.addEventListener('mouseleave', text4StartScrambling);
                break;
            case 'click':
                el.addEventListener('click', text4StartScrambling);
                break;
            case 'auto':
                text4StartScrambling();
                break;
        }
    });
});
