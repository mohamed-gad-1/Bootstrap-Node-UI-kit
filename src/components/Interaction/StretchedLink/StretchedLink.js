
function StretchedLink(selector) {
    const stretchedLinks = document.querySelectorAll(selector);
    stretchedLinks.forEach(stretchedLink => {
        stretchedLink.addEventListener('click', (e) => {
            if (e.target.classList.contains('stretched-link')) {
                alert(`Stretched link clicked: ${e.target.textContent}`);
            }
        });
    });
}

