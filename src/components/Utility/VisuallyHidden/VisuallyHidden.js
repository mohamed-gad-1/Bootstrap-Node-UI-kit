
function VisuallyHidden(selector) {
    const visuallyHiddens = document.querySelectorAll(selector);
    visuallyHiddens.forEach(visuallyHidden => {
        visuallyHidden.addEventListener('click', (e) => {
            if (e.target.classList.contains('visually-hidden-item')) {
                alert(`Visually hidden item clicked: ${e.target.textContent}`);
            }
        });
    });
}

