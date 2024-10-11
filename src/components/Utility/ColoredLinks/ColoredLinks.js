
function ColoredLinks(selector) {
    const coloredLinks = document.querySelectorAll(selector);
    coloredLinks.forEach(coloredLink => {
        coloredLink.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                alert(`Link clicked: ${e.target.textContent}`);
            }
        });
    });
}

