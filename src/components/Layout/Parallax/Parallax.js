
function Parallax(selector) {
    const parallax = document.querySelector(selector);
    if (parallax) {
        parallax.addEventListener('click', () => {
            alert('You clicked on the parallax section');
        });
    }
}

