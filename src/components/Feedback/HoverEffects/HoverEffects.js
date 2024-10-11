
function HoverEffects(selector) {
    const hoverEffects = document.querySelectorAll(selector);
    hoverEffects.forEach(hoverEffect => {
        hoverEffect.addEventListener('mouseover', () => {
            alert('You hovered over the element');
        });
    });
}

