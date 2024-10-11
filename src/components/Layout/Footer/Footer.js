
function Footer(selector) {
    const footers = document.querySelectorAll(selector);
    footers.forEach(footer => {
        footer.addEventListener('click', () => {
            alert('You clicked on the footer');
        });
    });
}

