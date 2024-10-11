
function TextTruncation(selector) {
    const textTruncations = document.querySelectorAll(selector);
    textTruncations.forEach(textTruncation => {
        textTruncation.addEventListener('click', (e) => {
            if (e.target.classList.contains('text-truncate')) {
                alert(`Text truncation item clicked: ${e.target.textContent}`);
            }
        });
    });
}

