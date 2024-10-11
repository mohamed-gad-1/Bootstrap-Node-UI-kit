
function Uploader(selector) {
    const uploaders = document.querySelectorAll(selector);
    uploaders.forEach(uploader => {
        const input = uploader.querySelector('input[type="file"]');
        const label = uploader.querySelector('.custom-file-upload');

        input.addEventListener('change', () => {
            alert(`File selected: ${input.files[0].name}`);
        });

        label.addEventListener('click', () => {
            input.click();
        });
    });
}

