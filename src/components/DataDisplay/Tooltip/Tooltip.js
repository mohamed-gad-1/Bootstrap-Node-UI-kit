
function Tooltip(selector) {
    const tooltips = document.querySelectorAll(selector);
    tooltips.forEach(tooltip => {
        tooltip.addEventListener('click', () => {
            alert('You clicked on the tooltip');
        });
    });
}

