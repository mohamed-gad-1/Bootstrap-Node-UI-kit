
function Navbar(selector) {
    const navbars = document.querySelectorAll(selector);
    navbars.forEach(navbar => {
        navbar.addEventListener('click', (e) => {
            if (e.target.tagName === 'LI') {
                alert(`You clicked on: ${e.target.textContent}`);
            }
        });
    });
}

