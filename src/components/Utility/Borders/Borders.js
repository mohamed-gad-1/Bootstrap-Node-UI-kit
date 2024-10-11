
function Borders(selector) {
    const borders = document.querySelectorAll(selector);
    borders.forEach(border => {
        border.addEventListener('click', (e) => {
            if (e.target.classList.contains('border')) {
                alert(`Border clicked: ${e.target.textContent}`);
            }
        });
    });
}

