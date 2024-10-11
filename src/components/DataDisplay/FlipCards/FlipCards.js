
function FlipCards(selector) {
    const flipCards = document.querySelectorAll(selector);
    flipCards.forEach(flipCard => {
        flipCard.addEventListener('click', () => {
            flipCard.querySelector('.flip-card-inner').style.transform = 'rotateY(180deg)';
        });
    });
}

