
function Breadcrumbs(selector) {
    const breadcrumbs = document.querySelectorAll(selector);
    breadcrumbs.forEach(breadcrumb => {
        breadcrumb.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                alert(`Breadcrumb clicked: ${e.target.textContent}`);
            }
        });
    });
}

