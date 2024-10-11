
function Badges(selector) {
    const badges = document.querySelectorAll(selector);
    badges.forEach(badge => {
        badge.addEventListener('click', (e) => {
            if (e.target.classList.contains('badge')) {
                alert(`Badge clicked: ${e.target.textContent}`);
            }
        });
    });
}

