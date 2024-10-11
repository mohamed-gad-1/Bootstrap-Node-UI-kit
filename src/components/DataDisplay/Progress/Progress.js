
function Progress(selector) {
    const progresses = document.querySelectorAll(selector);
    progresses.forEach(progress => {
        const progressBar = progress.querySelector('.progress-bar');
        let width = 0;
        const interval = setInterval(() => {
            if (width >= 100) {
                clearInterval(interval);
            } else {
                width++;
                progressBar.style.width = `${width}%`;
            }
        }, 50);
    });
}

