
function Grid(selector) {
    const grids = document.querySelectorAll(selector);
    grids.forEach(grid => {
        grid.addEventListener('click', (e) => {
            if (e.target.closest('.grid-item')) {
                alert(`You clicked on: ${e.target.closest('.grid-item').textContent}`);
            }
        });
    });
}

