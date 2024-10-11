
function Checkbox(selector) {
    const checkboxes = document.querySelectorAll(selector);
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            alert(`Checkbox is ${checkbox.checked ? 'checked' : 'unchecked'}`);
        });
    });
}

