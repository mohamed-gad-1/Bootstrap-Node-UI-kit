
function Toolbars(selector) {
    const toolbars = document.querySelectorAll(selector);
    toolbars.forEach(toolbar => {
        toolbar.addEventListener('click', (e) => {
            if (e.target.classList.contains('toolbar-item')) {
                alert(`You clicked on: ${e.target.textContent}`);
            }
        });
    });
}

