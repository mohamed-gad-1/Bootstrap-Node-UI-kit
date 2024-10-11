
function LazyLoading(selector) {
    const lazyLoads = document.querySelectorAll(selector);
    lazyLoads.forEach(lazyLoad => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    lazyLoad.textContent = 'Content Loaded';
                    lazyLoad.style.backgroundColor = '#007bff';
                    lazyLoad.style.color = 'white';
                    observer.unobserve(lazyLoad);
                }
            });
        });
        observer.observe(lazyLoad);
    });
}

