
function Dialogs(selector) {
    const dialogs = document.querySelectorAll(selector);
    dialogs.forEach(dialog => {
        const openBtn = dialog.querySelector('.open-dialog');
        const closeBtn = dialog.querySelector('.close-dialog');
        const overlay = dialog.querySelector('.dialog-overlay');

        openBtn.addEventListener('click', () => {
            dialog.classList.add('visible');
            overlay.classList.add('visible');
        });

        closeBtn.addEventListener('click', () => {
            dialog.classList.remove('visible');
            overlay.classList.remove('visible');
        });

        overlay.addEventListener('click', () => {
            dialog.classList.remove('visible');
            overlay.classList.remove('visible');
        });
    });
}

