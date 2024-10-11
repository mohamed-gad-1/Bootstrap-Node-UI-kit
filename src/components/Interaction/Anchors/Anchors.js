
function Anchors(selector) {
    const anchors = document.querySelectorAll(selector);
    anchors.forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            alert(`You clicked on: ${anchor.textContent}`);
        });
    });
}

