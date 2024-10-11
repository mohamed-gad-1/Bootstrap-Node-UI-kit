
function ProgressBar(selector) {
    const progressBars = document.querySelectorAll(selector);
    progressBars.forEach(progressBar => {
        const bar = progressBar.querySelector('.bar');
        let width = 0;
        const interval = setInterval(() => {
            if (width >= 100) {
                clearInterval(interval);
            } else {
                width++;
                bar.style.width = `${width}%`;
            }
        }, 50);
    });
}

