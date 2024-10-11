
function MasonryLayout(selector) {
    const masonryLayouts = document.querySelectorAll(selector);
    masonryLayouts.forEach(layout => {
        const items = layout.querySelectorAll('.masonry-item');
        items.forEach(item => {
            item.addEventListener('click', () => {
                alert(`You clicked on: ${item.textContent}`);
            });
        });
    });
}

