
function Pills(selector) {
    const pills = document.querySelectorAll(selector);
    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            alert(`You clicked on: ${pill.textContent}`);
        });
    });
}

