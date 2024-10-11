
function GridLayout(selector) {
    const gridLayouts = document.querySelectorAll(selector);
    gridLayouts.forEach(gridLayout => {
        gridLayout.addEventListener('click', (e) => {
            if (e.target.classList.contains('grid-item')) {
                alert(`You clicked on: ${e.target.textContent}`);
            }
        });
    });
}

