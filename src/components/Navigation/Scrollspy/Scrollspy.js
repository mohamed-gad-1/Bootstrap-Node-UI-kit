
function Scrollspy(selector) {
    const scrollspy = document.querySelector(selector);
    if (scrollspy) {
        const nav = scrollspy.querySelector('.nav');
        const sections = scrollspy.querySelectorAll('.content h2');

        scrollspy.addEventListener('scroll', () => {
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top >= 0 && rect.top <= 100) {
                    const id = section.id;
                    const activeLink = nav.querySelector(`a[href="#${id}"]`);
                    if (activeLink) {
                        nav.querySelectorAll('a').forEach(link => link.classList.remove('active'));
                        activeLink.classList.add('active');
                    }
                }
            });
        });
    }
}

