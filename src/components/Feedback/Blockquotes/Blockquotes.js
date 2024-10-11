
function Blockquotes(selector) {
    const blockquotes = document.querySelectorAll(selector);
    blockquotes.forEach(blockquote => {
        blockquote.addEventListener('click', () => {
            alert(`You clicked on: ${blockquote.textContent}`);
        });
    });
}

