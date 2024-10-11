
function MultiLevelDropdown(selector) {
    const multiLevelDropdowns = document.querySelectorAll(selector);
    multiLevelDropdowns.forEach(dropdown => {
        const content = dropdown.querySelector('.multi-level-dropdown-content');

        dropdown.addEventListener('click', () => {
            content.classList.toggle('visible');
        });

        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                content.classList.remove('visible');
            }
        });
    });
}

