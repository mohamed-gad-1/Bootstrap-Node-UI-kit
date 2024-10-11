
function FilterControls(selector) {
    const filterControls = document.querySelectorAll(selector);
    filterControls.forEach(filterControl => {
        const input = filterControl.querySelector('input[type="text"]');

        input.addEventListener('input', () => {
            alert(`Filter value: ${input.value}`);
        });
    });
}

