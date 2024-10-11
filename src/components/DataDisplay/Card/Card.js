
function Card(selector) {
    const cards = document.querySelectorAll(selector);
    cards.forEach(card => {
        card.addEventListener('click', () => {
            alert(`You clicked on: ${card.querySelector('.card-header').textContent}`);
        });
    });
}

