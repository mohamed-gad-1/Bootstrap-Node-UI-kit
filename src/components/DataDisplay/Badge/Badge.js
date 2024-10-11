
function Badge(selector) {
    const badges = document.querySelectorAll(selector);
    badges.forEach(badge => {
        badge.addEventListener('click', () => {
            alert(`You clicked on: ${badge.textContent}`);
        });
    });
}

