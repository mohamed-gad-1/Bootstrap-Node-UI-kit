
function Float(selector) {
    const floats = document.querySelectorAll(selector);
    floats.forEach(float => {
        float.addEventListener('click', (e) => {
            if (e.target.classList.contains('float-left') || e.target.classList.contains('float-right')) {
                alert(`Float item clicked: ${e.target.textContent}`);
            }
        });
    });
}

