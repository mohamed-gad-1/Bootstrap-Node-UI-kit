
function Offcanvas(selector) {
    const offcanvases = document.querySelectorAll(selector);
    offcanvases.forEach(offcanvas => {
        const toggle = offcanvas.querySelector('.offcanvas-toggle');
        const content = offcanvas.querySelector('.offcanvas-content');

        toggle.addEventListener('click', () => {
            content.classList.toggle('open');
        });
    });
}

