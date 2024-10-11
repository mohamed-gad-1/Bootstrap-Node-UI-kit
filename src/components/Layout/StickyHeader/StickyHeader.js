
function StickyHeader(selector) {
    const stickyHeaders = document.querySelectorAll(selector);
    stickyHeaders.forEach(header => {
        header.addEventListener('click', () => {
            alert('You clicked on the sticky header');
        });
    });
}

