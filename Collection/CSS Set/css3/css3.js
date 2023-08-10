let css3Divs = document.querySelectorAll('[data-identifier="gradient-animation"]');

for (let css3Div of css3Divs) {
    let css3Colors = [];
    let css3Positions = [];
    let css3Index = 1;
    let css3Loop = true;
    while (css3Loop) {
        let css3Color = css3Div.getAttribute(`data-gradient-color${css3Index}`);
        let css3Position = css3Div.getAttribute(`data-gradient-position-color${css3Index}`) || ((css3Index - 1) * 50) + '%';
        if (css3Color) {
            css3Colors.push(css3Color);
            css3Positions.push(css3Position);
            css3Index++;
        } else {
            css3Loop = false;
        }
    }

    let css3Duration = css3Div.getAttribute('data-gradient-duration') || 1;
    let css3Degree = css3Div.getAttribute('data-gradient-degree') || 270;
    let css3Type = css3Div.getAttribute('data-gradient-type') || 'linear';
    let css3Trigger = css3Div.getAttribute('data-gradient-trigger') || 'auto';

    function setInitialGradient() {
        let css3GradientValues = css3Colors.map((color, index) => `${color} ${css3Positions[index]}`).join(', ');
        if (css3Type === 'radial') {
            css3Div.style.background = `${css3Type}-gradient(circle at center, ${css3GradientValues})`;
            css3Div.style.backgroundSize = '100% 100%';
            css3Div.style.backgroundPosition = 'center';
        } else {
            css3Div.style.background = `${css3Type}-gradient(${css3Degree}deg, ${css3GradientValues})`;
            css3Div.style.backgroundSize = '200% 200%';
            css3Div.style.backgroundPosition = '50% 50%'; // Starting point adjusted
        }
    }

    setInitialGradient();

    function startAnimation() {
        if (css3Type === 'radial') {
            css3Div.style.animation = `radial ${css3Duration}s linear infinite`;
        } else {
            css3Div.style.animation = `slide ${css3Duration}s linear infinite`;
        }
        css3Div.style.animationPlayState = 'running';
    }

    switch (css3Trigger) {
        case 'auto':
            startAnimation();
            break;
        case 'hover':
            css3Div.addEventListener('mouseover', startAnimation);
            css3Div.addEventListener('mouseout', () => { css3Div.style.animationPlayState = 'paused'; });
            break;
        case 'click':
            css3Div.addEventListener('click', startAnimation);
            break;
    }
}

let css3StyleSheet = document.createElement('style');
css3StyleSheet.innerHTML = `
    @keyframes slide {
        0% { background-position: 50% 50%; }
        25% { background-position: 0% 100%; }
        75% { background-position: 100% 0; }
        100% { background-position: 50% 50%; }
    }
    @keyframes radial {
        0% { background-size: 100% 100%; }
        50% { background-size: 200% 200%; }
        100% { background-size: 100% 100%; }
    }
`;
document.head.appendChild(css3StyleSheet);
