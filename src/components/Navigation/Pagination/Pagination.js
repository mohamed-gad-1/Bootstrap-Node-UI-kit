
function Pagination(selector) {
    const paginations = document.querySelectorAll(selector);
    paginations.forEach(pagination => {
        pagination.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                const active = pagination.querySelector('.active');
                if (active) {
                    active.classList.remove('active');
                }
                e.target.classList.add('active');
                alert(`You clicked on page: ${e.target.textContent}`);
            }
        });
    });
}

