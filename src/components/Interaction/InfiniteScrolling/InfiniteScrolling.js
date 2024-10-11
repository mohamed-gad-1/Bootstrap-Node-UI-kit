
function InfiniteScrolling(selector) {
    const infiniteScroll = document.querySelector(selector);
    if (infiniteScroll) {
        let page = 1;
        const items = infiniteScroll.querySelectorAll('.item');

        infiniteScroll.addEventListener('scroll', () => {
            if (infiniteScroll.scrollTop + infiniteScroll.clientHeight >= infiniteScroll.scrollHeight) {
                page++;
                const newItem = document.createElement('div');
                newItem.classList.add('item');
                newItem.textContent = `Item ${items.length + page}`;
                infiniteScroll.appendChild(newItem);
            }
        });
    }
}

