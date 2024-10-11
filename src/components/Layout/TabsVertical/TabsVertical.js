
function TabsVertical(selector) {
    const tabsVertical = document.querySelectorAll(selector);
    tabsVertical.forEach(tab => {
        const tabList = tab.querySelector('.tab-list');
        const tabContents = tab.querySelectorAll('.tab-content > div');

        tabList.addEventListener('click', (e) => {
            if (e.target.classList.contains('tab')) {
                const target = e.target.dataset.target;
                tabList.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                e.target.classList.add('active');
                tabContents.forEach(content => {
                    content.style.display = content.id === target ? 'block' : 'none';
                });
            }
        });
    });
}

