
function Spinner(selector) {
    const spinners = document.querySelectorAll(selector);
    spinners.forEach(spinner => {
        spinner.addEventListener('click', () => {
            alert('You clicked on the spinner');
        });
    });
}

