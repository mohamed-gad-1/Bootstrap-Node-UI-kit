
function Captions(selector) {
    const captions = document.querySelectorAll(selector);
    captions.forEach(caption => {
        caption.addEventListener('click', () => {
            alert(`You clicked on: ${caption.textContent}`);
        });
    });
}

