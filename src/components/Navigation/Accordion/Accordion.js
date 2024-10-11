
function Accordion(selector) {
    const accordions = document.querySelectorAll(selector);
    accordions.forEach(accordion => {
        const items = accordion.querySelectorAll('.accordion-item');
        items.forEach(item => {
            const header = item.querySelector('.accordion-header');
            const content = item.querySelector('.accordion-content');

            header.addEventListener('click', () => {
                items.forEach(i => i.classList.remove('open'));
                item.classList.toggle('open');
            });
        });
    });
}

