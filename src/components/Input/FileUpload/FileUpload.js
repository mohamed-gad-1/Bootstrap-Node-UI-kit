
function FileUpload(selector) {
    const fileUploads = document.querySelectorAll(selector);
    fileUploads.forEach(fileUpload => {
        const input = fileUpload.querySelector('input[type="file"]');
        const label = fileUpload.querySelector('label');

        input.addEventListener('change', () => {
            alert(`File selected: ${input.files[0].name}`);
        });
    });
}

