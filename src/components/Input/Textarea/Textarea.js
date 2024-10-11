
function Textarea(selector) {
    const textareas = document.querySelectorAll(selector);
    textareas.forEach(textarea => {
        textarea.addEventListener('input', () => {
            alert(`Textarea value: ${textarea.value}`);
        });
    });
}

