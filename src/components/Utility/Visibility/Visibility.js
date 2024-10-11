
function Visibility(selector) {
    const visibilities = document.querySelectorAll(selector);
    visibilities.forEach(visibility => {
        visibility.addEventListener('click', (e) => {
            if (e.target.classList.contains('visibility-item')) {
                alert(`Visibility item clicked: ${e.target.textContent}`);
            }
        });
    });
}

