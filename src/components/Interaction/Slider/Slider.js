
function Slider(selector) {
    const sliders = document.querySelectorAll(selector);
    sliders.forEach(slider => {
        const slides = slider.querySelectorAll('.slide');
        const controls = slider.querySelector('.controls');
        let currentIndex = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
        }

        controls.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                const action = e.target.dataset.action;
                if (action === 'prev') {
                    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                } else if (action === 'next') {
                    currentIndex = (currentIndex + 1) % slides.length;
                }
                showSlide(currentIndex);
            }
        });

        showSlide(currentIndex);
    });
}

