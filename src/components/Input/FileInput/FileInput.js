
function FileInput(selector) {
    const fileInputs = document.querySelectorAll(selector);
    fileInputs.forEach(fileInput => {
        const input = fileInput.querySelector('input[type="file"]');
        const label = fileInput.querySelector('label');

        input.addEventListener('change', () => {
            alert(`File selected: ${input.files[0].name}`);
        });

        label.addEventListener('click', () => {
            input.click();
        });
    });
}

