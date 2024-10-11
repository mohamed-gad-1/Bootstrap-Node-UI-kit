
function Fieldsets(selector) {
    const fieldsets = document.querySelectorAll(selector);
    fieldsets.forEach(fieldset => {
        fieldset.addEventListener('click', () => {
            alert(`You clicked on: ${fieldset.querySelector('legend').textContent}`);
        });
    });
}

