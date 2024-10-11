
function SortableList(selector) {
    const sortableLists = document.querySelectorAll(selector);
    sortableLists.forEach(list => {
        new Sortable(list, {
            animation: 150,
            ghostClass: 'sortable-ghost'
        });
    });
}

