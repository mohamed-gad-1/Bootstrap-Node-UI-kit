
function VerticalAlign(selector) {
    const verticalAligns = document.querySelectorAll(selector);
    verticalAligns.forEach(verticalAlign => {
        verticalAlign.addEventListener('click', (e) => {
            if (e.target.classList.contains('align-item')) {
                alert(`Vertical align item clicked: ${e.target.textContent}`);
            }
        });
    });
}

