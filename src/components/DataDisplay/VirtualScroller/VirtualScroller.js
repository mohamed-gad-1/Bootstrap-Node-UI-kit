
function VirtualScroller(selector) {
    const virtualScrollers = document.querySelectorAll(selector);
    virtualScrollers.forEach(scroller => {
        const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
        const itemHeight = 40;
        const containerHeight = scroller.clientHeight;
        const visibleItemCount = Math.ceil(containerHeight / itemHeight);
        let startIndex = 0;

        function renderItems() {
            const fragment = document.createDocumentFragment();
            for (let i = startIndex; i < startIndex + visibleItemCount; i++) {
                const item = document.createElement('div');
                item.classList.add('item');
                item.textContent = items[i];
                fragment.appendChild(item);
            }
            scroller.innerHTML = '';
            scroller.appendChild(fragment);
        }

        scroller.addEventListener('scroll', () => {
            const scrollTop = scroller.scrollTop;
            startIndex = Math.floor(scrollTop / itemHeight);
            renderItems();
        });

        renderItems();
    });
}

