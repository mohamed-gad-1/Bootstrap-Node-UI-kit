
function Treeview(selector) {
    const treeviews = document.querySelectorAll(selector);
    treeviews.forEach(treeview => {
        treeview.addEventListener('click', (e) => {
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

