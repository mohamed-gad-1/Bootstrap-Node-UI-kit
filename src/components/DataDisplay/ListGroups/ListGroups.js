
function ListGroups(selector) {
    const listGroups = document.querySelectorAll(selector);
    listGroups.forEach(listGroup => {
        listGroup.addEventListener('click', (e) => {
            if (e.target.classList.contains('list-group-item')) {
                const items = listGroup.querySelectorAll('.list-group-item');
                items.forEach(item => item.classList.remove('active'));
                e.target.classList.add('active');
                alert(`List group item clicked: ${e.target.textContent}`);
            }
        });
    });
}

