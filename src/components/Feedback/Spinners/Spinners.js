
function Spinners(selector) {
    const spinners = document.querySelectorAll(selector);
    spinners.forEach(spinner => {
        spinner.addEventListener('click', (e) => {
            if (e.target.classList.contains('spinner-item')) {
                alert(`Spinner item clicked: ${e.target.textContent}`);
            }
        });
    });
}

