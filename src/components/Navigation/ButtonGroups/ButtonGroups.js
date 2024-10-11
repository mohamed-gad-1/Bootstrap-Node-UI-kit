
function ButtonGroups(selector) {
    const buttonGroups = document.querySelectorAll(selector);
    buttonGroups.forEach(buttonGroup => {
        buttonGroup.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn')) {
                alert(`Button clicked: ${e.target.textContent}`);
            }
        });
    });
}

