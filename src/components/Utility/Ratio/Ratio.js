
function Ratio(selector) {
    const ratios = document.querySelectorAll(selector);
    ratios.forEach(ratio => {
        ratio.addEventListener('click', (e) => {
            if (e.target.classList.contains('ratio-content')) {
                alert(`Ratio item clicked: ${e.target.textContent}`);
            }
        });
    });
}

