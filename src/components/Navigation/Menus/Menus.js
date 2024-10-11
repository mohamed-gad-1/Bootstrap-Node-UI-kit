
function Menus(selector) {
    const menus = document.querySelectorAll(selector);
    menus.forEach(menu => {
        menu.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                alert(`You clicked on: ${e.target.textContent}`);
            }
        });
    });
}

