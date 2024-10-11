
function Timeline(selector) {
    const timelines = document.querySelectorAll(selector);
    timelines.forEach(timeline => {
        timeline.addEventListener('click', (e) => {
            if (e.target.closest('.event')) {
                alert(`You clicked on: ${e.target.closest('.event').textContent}`);
            }
        });
    });
}

