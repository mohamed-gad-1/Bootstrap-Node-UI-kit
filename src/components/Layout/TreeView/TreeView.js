
function TreeView(selector) {
    const treeViews = document.querySelectorAll(selector);
    treeViews.forEach(treeView => {
        treeView.addEventListener('click', (e) => {
            if (e.target.tagName === 'LI') {
                const li = e.target;
                if (li.classList.contains('has-children')) {
                    li.classList.toggle('open');
                }
                alert(`You clicked on: ${li.textContent}`);
            }
        });
    });
}

