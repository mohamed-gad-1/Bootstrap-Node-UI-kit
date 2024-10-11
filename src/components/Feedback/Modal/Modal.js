
function Modal(selector) {
    const modals = document.querySelectorAll(selector);
    modals.forEach(modal => {
        const openBtn = modal.querySelector('.open-modal');
        const closeBtn = modal.querySelector('.close');
        const modalContent = modal.querySelector('.modal-content');

        openBtn.addEventListener('click', () => {
            modal.style.display = 'block';
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
}

