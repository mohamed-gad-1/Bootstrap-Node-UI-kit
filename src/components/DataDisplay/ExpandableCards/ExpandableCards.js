
function ExpandableCards(selector) {
    const expandableCards = document.querySelectorAll(selector);
    expandableCards.forEach(card => {
        const header = card.querySelector('.expandable-card-header');
        const content = card.querySelector('.expandable-card-content');

        header.addEventListener('click', () => {
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
}

