
function ListGroup(selector) {
    const listGroups = document.querySelectorAll(selector);
    listGroups.forEach(listGroup => {
        listGroup.addEventListener('click', (e) => {
            if (e.target.classList.contains('list-group-item')) {
                alert(`You clicked on: ${e.target.textContent}`);
            }
        });
    });
}

