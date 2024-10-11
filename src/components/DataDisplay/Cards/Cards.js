
function Cards(selector) {
    const cards = document.querySelectorAll(selector);
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('.card')) {
                alert(`Card clicked: ${e.target.closest('.card').querySelector('.card-header').textContent}`);
            }
        });
    });
}

