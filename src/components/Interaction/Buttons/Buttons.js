
function Buttons(selector) {
    const buttons = document.querySelectorAll(selector);
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn')) {
                alert(`Button clicked: ${e.target.textContent}`);
            }
        });
    });
}

