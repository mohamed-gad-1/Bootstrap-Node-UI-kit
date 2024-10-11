
function PullToRefresh(selector) {
    const pullToRefresh = document.querySelector(selector);
    if (pullToRefresh) {
        const content = pullToRefresh.querySelector('.content');
        const loader = pullToRefresh.querySelector('.loader');
        let startY = 0;
        let currentY = 0;

        pullToRefresh.addEventListener('touchstart', (e) => {
            startY = e.touches[0].clientY;
        });

        pullToRefresh.addEventListener('touchmove', (e) => {
            currentY = e.touches[0].clientY;
            const diff = currentY - startY;
            if (diff > 0) {
                loader.style.transform = `translateY(${diff}px)`;
            }
        });

        pullToRefresh.addEventListener('touchend', () => {
            if (currentY - startY > 50) {
                loader.classList.add('visible');
                setTimeout(() => {
                    loader.classList.remove('visible');
                    content.textContent = 'Content refreshed';
                }, 1000);
            } else {
                loader.style.transform = 'translateY(-50px)';
            }
        });
    }
}

