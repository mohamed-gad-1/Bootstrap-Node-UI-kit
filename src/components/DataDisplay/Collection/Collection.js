
function Collection(selector) {
    const collections = document.querySelectorAll(selector);
    collections.forEach(collection => {
        collection.addEventListener('click', (e) => {
            if (e.target.classList.contains('collection-item')) {
                alert(`You clicked on: ${e.target.textContent}`);
            }
        });
    });
}

