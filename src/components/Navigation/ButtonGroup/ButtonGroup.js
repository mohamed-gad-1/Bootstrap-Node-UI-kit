
function ButtonGroup(selector) {
    const buttonGroups = document.querySelectorAll(selector);
    buttonGroups.forEach(group => {
        group.addEventListener('click', (e) => {
            if (e.target.classList.contains('button')) {
                alert(`Button clicked: ${e.target.textContent}`);
            }
        });
    });
}

