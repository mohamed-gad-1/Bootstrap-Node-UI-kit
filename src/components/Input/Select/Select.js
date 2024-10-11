
function Select(selector) {
    const selects = document.querySelectorAll(selector);
    selects.forEach(select => {
        select.addEventListener('change', () => {
            alert(`Selected option: ${select.value}`);
        });
    });
}

