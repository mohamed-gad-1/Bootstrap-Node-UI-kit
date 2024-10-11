
function Popovers(selector) {
    const popovers = document.querySelectorAll(selector);
    popovers.forEach(popover => {
        popover.addEventListener('click', (e) => {
            if (e.target.classList.contains('popover')) {
                alert(`Popover clicked: ${e.target.textContent}`);
            }
        });
    });
}

