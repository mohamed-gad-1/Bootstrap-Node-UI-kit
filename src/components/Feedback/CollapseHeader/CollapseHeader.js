
function CollapseHeader(selector) {
    const collapseHeaders = document.querySelectorAll(selector);
    collapseHeaders.forEach(header => {
        header.addEventListener('click', () => {
            alert(`You clicked on: ${header.textContent}`);
        });
    });
}

