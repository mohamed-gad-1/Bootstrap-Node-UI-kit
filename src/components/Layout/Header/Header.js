
function Header(selector) {
    const headers = document.querySelectorAll(selector);
    headers.forEach(header => {
        header.addEventListener('click', () => {
            alert('You clicked on the header');
        });
    });
}

