
function Text(selector) {
    const texts = document.querySelectorAll(selector);
    texts.forEach(text => {
        text.addEventListener('click', (e) => {
            if (e.target.classList.contains('text-item')) {
                alert(`Text item clicked: ${e.target.textContent}`);
            }
        });
    });
}

