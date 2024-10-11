
function Overflow(selector) {
    const overflows = document.querySelectorAll(selector);
    overflows.forEach(overflow => {
        overflow.addEventListener('click', (e) => {
            if (e.target.classList.contains('overflow-item')) {
                alert(`Overflow item clicked: ${e.target.textContent}`);
            }
        });
    });
}

