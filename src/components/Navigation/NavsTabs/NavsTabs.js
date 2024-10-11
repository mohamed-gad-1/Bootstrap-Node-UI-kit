
function NavsTabs(selector) {
    const navsTabs = document.querySelectorAll(selector);
    navsTabs.forEach(navsTab => {
        navsTab.addEventListener('click', (e) => {
            if (e.target.classList.contains('nav-link')) {
                const links = navsTab.querySelectorAll('.nav-link');
                links.forEach(link => link.classList.remove('active'));
                e.target.classList.add('active');
                alert(`Nav link clicked: ${e.target.textContent}`);
            }
        });
    });
}

