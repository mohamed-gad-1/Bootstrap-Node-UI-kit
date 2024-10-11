
function Table(selector) {
    const tables = document.querySelectorAll(selector);
    tables.forEach(table => {
        table.addEventListener('click', (e) => {
            if (e.target.tagName === 'TD') {
                alert(`You clicked on: ${e.target.textContent}`);
            }
        });
    });
}

