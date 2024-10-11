
function Sidebar(selector) {
    const sidebars = document.querySelectorAll(selector);
    sidebars.forEach(sidebar => {
        const toggleBtn = sidebar.querySelector('.sidebar-toggle');

        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    });
}

