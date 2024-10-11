
function Button(selector) {
    const buttons = document.querySelectorAll(selector);
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Button clicked');
        });
    });
}

