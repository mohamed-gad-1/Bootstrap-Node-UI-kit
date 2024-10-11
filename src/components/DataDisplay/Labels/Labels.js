
function Labels(selector) {
    const labels = document.querySelectorAll(selector);
    labels.forEach(label => {
        label.addEventListener('click', () => {
            alert(`You clicked on: ${label.textContent}`);
        });
    });
}

