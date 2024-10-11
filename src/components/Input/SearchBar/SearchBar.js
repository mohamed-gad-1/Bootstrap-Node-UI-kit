
function SearchBar(selector) {
    const searchBars = document.querySelectorAll(selector);
    searchBars.forEach(searchBar => {
        const input = searchBar.querySelector('input[type="text"]');
        const button = searchBar.querySelector('button');

        button.addEventListener('click', () => {
            alert(`Searching for: ${input.value}`);
        });
    });
}

