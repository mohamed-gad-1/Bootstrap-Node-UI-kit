
function ColorPicker(selector) {
    const colorPickers = document.querySelectorAll(selector);
    colorPickers.forEach(picker => {
        picker.addEventListener('change', (e) => {
            alert(`Color selected: ${e.target.value}`);
        });
    });
}

