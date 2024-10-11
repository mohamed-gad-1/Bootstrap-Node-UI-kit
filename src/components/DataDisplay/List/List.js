
function List(selector) {
    const lists = document.querySelectorAll(selector);
    lists.forEach(list => {
        list.addEventListener('click', (e) => {
            if (e.target.tagName === 'LI') {
                alert(`You clicked on: ${e.target.textContent}`);
            }
        });
    });
}

