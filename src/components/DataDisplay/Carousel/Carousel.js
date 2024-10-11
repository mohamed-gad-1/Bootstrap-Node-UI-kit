
function Carousel(selector) {
    const carousels = document.querySelectorAll(selector);
    carousels.forEach(carousel => {
        const slides = carousel.querySelectorAll('.slide');
        const controls = carousel.querySelector('.controls');
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

