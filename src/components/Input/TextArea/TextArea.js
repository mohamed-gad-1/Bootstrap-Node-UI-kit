
function TextArea(selector) {
    const textAreas = document.querySelectorAll(selector);
    textAreas.forEach(textArea => {
        textArea.addEventListener('input', () => {
            alert(`Text area value: ${textArea.value}`);
        });
    });
}

