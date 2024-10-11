
function Position(selector) {
    const positions = document.querySelectorAll(selector);
    positions.forEach(position => {
        position.addEventListener('click', (e) => {
            if (e.target.classList.contains('position-item')) {
                alert(`Position item clicked: ${e.target.textContent}`);
            }
        });
    });
}

