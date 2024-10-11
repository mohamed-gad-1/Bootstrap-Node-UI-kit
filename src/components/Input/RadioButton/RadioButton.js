
function RadioButton(selector) {
    const radioButtons = document.querySelectorAll(selector);
    radioButtons.forEach(radioButton => {
        radioButton.addEventListener('change', () => {
            alert(`Selected option: ${radioButton.value}`);
        });
    });
}

