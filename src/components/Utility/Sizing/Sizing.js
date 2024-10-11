
function Sizing(selector) {
    const sizings = document.querySelectorAll(selector);
    sizings.forEach(sizing => {
        sizing.addEventListener('click', (e) => {
            if (e.target.classList.contains('sizing-item')) {
                alert(`Sizing item clicked: ${e.target.textContent}`);
            }
        });
    });
}

