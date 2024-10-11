
function Zoom(selector) {
    const zooms = document.querySelectorAll(selector);
    zooms.forEach(zoom => {
        zoom.addEventListener('click', (e) => {
            if (e.target.classList.contains('zoom-item')) {
                alert(`Zoom item clicked: ${e.target.textContent}`);
            }
        });
    });
}

