
function ContextMenu(selector) {
    const contextMenu = document.querySelector(selector);
    if (contextMenu) {
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            contextMenu.style.left = `${e.pageX}px`;
            contextMenu.style.top = `${e.pageY}px`;
            contextMenu.classList.add('visible');
        });

        document.addEventListener('click', () => {
            contextMenu.classList.remove('visible');
        });

        contextMenu.addEventListener('click', (e) => {
            if (e.target.classList.contains('context-menu-item')) {
                alert(`You clicked on: ${e.target.textContent}`);
            }
        });
    }
}

