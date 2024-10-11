
function Collapse(selector) {
    const collapses = document.querySelectorAll(selector);
    collapses.forEach(collapse => {
        const items = collapse.querySelectorAll('.collapse-item');
        items.forEach(item => {
            const header = item.querySelector('.collapse-header');
            const content = item.querySelector('.collapse-content');

            header.addEventListener('click', () => {
                items.forEach(i => i.classList.remove('open'));
                item.classList.toggle('open');
            });
        });
    });
}

