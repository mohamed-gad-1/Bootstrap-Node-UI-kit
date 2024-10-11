
function HiddenFields(selector) {
    const hiddenFields = document.querySelectorAll(selector);
    hiddenFields.forEach(hiddenField => {
        hiddenField.addEventListener('change', () => {
            alert(`Hidden field value changed: ${hiddenField.value}`);
        });
    });
}

