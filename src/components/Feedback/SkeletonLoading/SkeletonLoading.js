
function SkeletonLoading(selector) {
    const skeletonLoadings = document.querySelectorAll(selector);
    skeletonLoadings.forEach(loading => {
        loading.addEventListener('click', () => {
            alert('Skeleton Loading clicked');
        });
    });
}

