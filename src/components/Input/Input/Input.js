
function Input(selector) {
    const inputs = document.querySelectorAll(selector);
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            alert(`Input value: ${input.value}`);
        });
    });
}

