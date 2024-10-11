
function ParallaxScrolling(selector) {
    const parallaxScrollings = document.querySelectorAll(selector);
    parallaxScrollings.forEach(parallax => {
        parallax.addEventListener('click', () => {
            alert('You clicked on the parallax section');
        });
    });
}

