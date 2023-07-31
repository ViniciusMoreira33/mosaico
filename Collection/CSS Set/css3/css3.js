let divs = document.querySelectorAll('[data-identifier="css-gradient-animation"]');

for (let div of divs) {
    let colors = [];
    let positions = [];
    let index = 1;
    let loop = true;
    while(loop) {
        let color = div.getAttribute(`data-gradient-color${index}`);
        let position = div.getAttribute(`data-gradient-position-color${index}`) || ((index-1)*50)+'%'; 
        if(color){
            colors.push(color);
            positions.push(position);
            index++;
        } else {
            loop = false;
        }
    }

    let duration = div.getAttribute('data-gradient-duration') || 1; 
    let degree = div.getAttribute('data-gradient-degree') || 270; 
    let type = div.getAttribute('data-gradient-type') || 'linear'; 
    let trigger = div.getAttribute('data-gradient-trigger') || 'auto';

    function setInitialGradient() {
        let gradientValues = colors.map((color, index) => `${color} ${positions[index]}`).join(', ');
        if (type === 'radial') {
            div.style.background = `${type}-gradient(circle at center, ${gradientValues})`;
            div.style.backgroundSize = '100% 100%';
            div.style.backgroundPosition = 'center';
        } else {
            div.style.background = `${type}-gradient(${degree}deg, ${gradientValues})`;
            div.style.backgroundSize = '200% 200%';
            div.style.backgroundPosition = '100% 0';
        }
    }

    setInitialGradient(); 

    function startAnimation() {
        if (type === 'radial') {
            div.style.animation = `radial ${duration}s linear infinite`;
        } else {
            div.style.animation = `slide ${duration}s linear infinite`;
        }
        div.style.animationPlayState = 'running';
    }

    switch (trigger) {
        case 'auto':
            startAnimation();
            break;
        case 'hover':
            div.addEventListener('mouseover', startAnimation);
            div.addEventListener('mouseout', () => { div.style.animationPlayState = 'paused'; }); 
            break;
        case 'click':
            div.addEventListener('click', startAnimation);
            break;
    }
}

let styleSheet = document.createElement('style');
styleSheet.innerHTML = `
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
document.head.appendChild(styleSheet);

