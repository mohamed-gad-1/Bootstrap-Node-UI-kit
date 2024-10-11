
function Icon(selector) {
    const icons = document.querySelectorAll(selector);
    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            alert('You clicked on the icon');
        });
    });
}

