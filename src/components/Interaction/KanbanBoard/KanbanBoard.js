
function KanbanBoard(selector) {
    const kanbanBoard = document.querySelector(selector);
    if (kanbanBoard) {
        const columns = kanbanBoard.querySelectorAll('.kanban-column');
        columns.forEach(column => {
            const items = column.querySelectorAll('.kanban-item');
            items.forEach(item => {
                item.addEventListener('click', () => {
                    alert(`You clicked on: ${item.textContent}`);
                });
            });
        });
    }
}

