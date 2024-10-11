
function Tiles(selector) {
    const tiles = document.querySelectorAll(selector);
    tiles.forEach(tile => {
        tile.addEventListener('click', () => {
            alert(`You clicked on: ${tile.textContent}`);
        });
    });
}

