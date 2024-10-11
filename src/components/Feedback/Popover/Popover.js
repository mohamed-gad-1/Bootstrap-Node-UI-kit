
function Popover(selector) {
    const popovers = document.querySelectorAll(selector);
    popovers.forEach(popover => {
        const content = popover.querySelector('.popover-content');

        popover.addEventListener('click', () => {
            content.classList.toggle('visible');
        });

        document.addEventListener('click', (e) => {
            if (!popover.contains(e.target)) {
                content.classList.remove('visible');
            }
        });
    });
}

