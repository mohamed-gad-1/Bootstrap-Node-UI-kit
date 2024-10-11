
function ImageCropper(selector) {
    const imageCroppers = document.querySelectorAll(selector);
    imageCroppers.forEach(cropper => {
        const img = cropper.querySelector('img');
        img.addEventListener('load', () => {
            const widthRatio = cropper.offsetWidth / img.naturalWidth;
            const heightRatio = cropper.offsetHeight / img.naturalHeight;
            const scale = Math.max(widthRatio, heightRatio);
            img.style.transform = `translate(-50%, -50%) scale(${scale})`;
        });
    });
}

