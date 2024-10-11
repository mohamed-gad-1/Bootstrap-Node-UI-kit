
function FileManager(selector) {
    const fileManagers = document.querySelectorAll(selector);
    fileManagers.forEach(fileManager => {
        const list = fileManager.querySelector('ul');

        list.addEventListener('click', (e) => {
            if (e.target.tagName === 'LI') {
                alert(`You clicked on: ${e.target.textContent}`);
            }
        });
    });
}

