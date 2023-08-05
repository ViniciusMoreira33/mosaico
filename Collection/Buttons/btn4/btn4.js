let btn4 = document.querySelector('[data-identifier="text-color-sequence"]');
let btn4_text = btn4.textContent;
let btn4_color = btn4.getAttribute('data-text-color') || "black"; // default to black if attribute is not set
let btn4_hoverColor = btn4.getAttribute('data-text-hover-color') || "white"; // default to red if attribute is not set

btn4.textContent = '';

for(let i = 0; i < btn4_text.length; i++) {
    let span = document.createElement('span');
    span.textContent = btn4_text[i];
    span.style.transition = 'color 0.3s';
    span.style.transitionDelay = `${i * 0.1}s`;
    span.style.color = btn4_color;
    btn4.appendChild(span);
}

btn4.addEventListener('mouseover', function() {
    Array.from(btn4.children).forEach((span) => {
        span.style.color = btn4_hoverColor;
    });
});

btn4.addEventListener('mouseout', function() {
    Array.from(btn4.children).forEach((span) => {
        span.style.color = btn4_color;
    });
});

