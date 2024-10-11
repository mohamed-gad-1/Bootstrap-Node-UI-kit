
function Colors(selector) {
    const colors = document.querySelectorAll(selector);
    colors.forEach(color => {
        color.addEventListener('click', (e) => {
            if (e.target.classList.contains('color-box')) {
                alert(`Color clicked: ${e.target.classList[1]}`);
            }
        });
    });
}

