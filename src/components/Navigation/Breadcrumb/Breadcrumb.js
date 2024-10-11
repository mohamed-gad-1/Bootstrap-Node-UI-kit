
function Breadcrumb(selector) {
    const breadcrumbs = document.querySelectorAll(selector);
    breadcrumbs.forEach(breadcrumb => {
        breadcrumb.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                alert(`You clicked on: ${e.target.textContent}`);
            }
        });
    });
}

