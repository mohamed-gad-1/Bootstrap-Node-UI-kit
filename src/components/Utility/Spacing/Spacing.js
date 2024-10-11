
function Spacing(selector) {
    const spacings = document.querySelectorAll(selector);
    spacings.forEach(spacing => {
        spacing.addEventListener('click', (e) => {
            if (e.target.classList.contains('spacing-item')) {
                alert(`Spacing item clicked: ${e.target.textContent}`);
            }
        });
    });
}

