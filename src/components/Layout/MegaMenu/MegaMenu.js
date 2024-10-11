
function MegaMenu(selector) {
    const megaMenus = document.querySelectorAll(selector);
    megaMenus.forEach(megaMenu => {
        const content = megaMenu.querySelector('.mega-menu-content');

        megaMenu.addEventListener('click', () => {
            content.classList.toggle('visible');
        });

        document.addEventListener('click', (e) => {
            if (!megaMenu.contains(e.target)) {
                content.classList.remove('visible');
            }
        });
    });
}

