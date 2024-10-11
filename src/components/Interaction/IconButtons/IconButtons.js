
function IconButtons(selector) {
    const iconButtons = document.querySelectorAll(selector);
    iconButtons.forEach(iconButton => {
        iconButton.addEventListener('click', () => {
            alert(`You clicked on the icon button: ${iconButton.textContent}`);
        });
    });
}

