
function EmptyStates(selector) {
    const emptyStates = document.querySelectorAll(selector);
    emptyStates.forEach(emptyState => {
        emptyState.addEventListener('click', () => {
            alert('You clicked on an empty state');
        });
    });
}

