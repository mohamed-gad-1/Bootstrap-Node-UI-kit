
function Ribbon(selector) {
    const ribbons = document.querySelectorAll(selector);
    ribbons.forEach(ribbon => {
        ribbon.addEventListener('click', () => {
            alert('You clicked on the ribbon');
        });
    });
}

