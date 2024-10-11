
function Dropdowns(selector) {
    const dropdowns = document.querySelectorAll(selector);
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');

        toggle.addEventListener('click', () => {
            dropdown.classList.toggle('open');
        });

        menu.addEventListener('click', (e) => {
            if (e.target.tagName === 'LI') {
                alert(`Dropdown item clicked: ${e.target.textContent}`);
            }
        });
    });
}

