
function Image(selector) {
    const images = document.querySelectorAll(selector);
    images.forEach(image => {
        image.addEventListener('click', () => {
            alert('You clicked on the image');
        });
    });
}

