
function Shadows(selector) {
    const shadows = document.querySelectorAll(selector);
    shadows.forEach(shadow => {
        shadow.addEventListener('click', (e) => {
            if (e.target.classList.contains('shadow-item')) {
                alert(`Shadow item clicked: ${e.target.textContent}`);
            }
        });
    });
}

