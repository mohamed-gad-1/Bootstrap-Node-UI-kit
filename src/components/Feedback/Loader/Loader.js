
function Loader(selector) {
    const loaders = document.querySelectorAll(selector);
    loaders.forEach(loader => {
        loader.addEventListener('click', () => {
            alert('You clicked on the loader');
        });
    });
}

