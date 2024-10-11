
function Clearfix(selector) {
    const clearfixes = document.querySelectorAll(selector);
    clearfixes.forEach(clearfix => {
        clearfix.addEventListener('click', (e) => {
            if (e.target.classList.contains('float-left') || e.target.classList.contains('float-right')) {
                alert(`Element clicked: ${e.target.textContent}`);
            }
        });
    });
}

