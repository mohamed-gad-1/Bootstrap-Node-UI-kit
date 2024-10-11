
function Nav(selector) {
    const navs = document.querySelectorAll(selector);
    navs.forEach(nav => {
        nav.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                alert(`You clicked on: ${e.target.textContent}`);
            }
        });
    });
}

