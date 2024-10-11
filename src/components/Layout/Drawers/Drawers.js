
function Drawers(selector) {
    const drawers = document.querySelectorAll(selector);
    drawers.forEach(drawer => {
        const toggleBtn = drawer.querySelector('.drawer-toggle');

        toggleBtn.addEventListener('click', () => {
            drawer.classList.toggle('open');
        });
    });
}

