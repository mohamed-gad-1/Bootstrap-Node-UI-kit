
function Typography(selector) {
    const typographies = document.querySelectorAll(selector);
    typographies.forEach(typography => {
        typography.addEventListener('click', (e) => {
            if (e.target.tagName === 'H1' || e.target.tagName === 'H2' || e.target.tagName === 'H3' || e.target.tagName === 'H4' || e.target.tagName === 'H5' || e.target.tagName === 'H6' || e.target.tagName === 'P') {
                alert(`You clicked on: ${e.target.textContent}`);
            }
        });
    });
}

