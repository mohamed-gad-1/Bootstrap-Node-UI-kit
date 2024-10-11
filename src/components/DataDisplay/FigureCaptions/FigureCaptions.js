
function FigureCaptions(selector) {
    const figureCaptions = document.querySelectorAll(selector);
    figureCaptions.forEach(figureCaption => {
        figureCaption.addEventListener('click', () => {
            alert(`You clicked on: ${figureCaption.textContent}`);
        });
    });
}

