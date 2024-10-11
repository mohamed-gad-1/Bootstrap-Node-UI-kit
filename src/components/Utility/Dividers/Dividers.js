
function Dividers(selector) {
    const dividers = document.querySelectorAll(selector);
    dividers.forEach(divider => {
        divider.addEventListener('click', () => {
            alert('You clicked on a divider');
        });
    });
}

