
function QuickView(selector) {
    const quickViews = document.querySelectorAll(selector);
    quickViews.forEach(quickView => {
        const overlay = quickView.querySelector('.overlay');
        const openBtn = quickView.querySelector('.open-quick-view');
        const closeBtn = overlay.querySelector('.close');

        openBtn.addEventListener('click', () => {
            overlay.style.display = 'flex';
        });

        closeBtn.addEventListener('click', () => {
            overlay.style.display = 'none';
        });

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.style.display = 'none';
            }
        });
    });
}

