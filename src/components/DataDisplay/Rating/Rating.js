
function Rating(selector) {
    const ratings = document.querySelectorAll(selector);
    ratings.forEach(rating => {
        const stars = rating.querySelectorAll('.star');
        stars.forEach((star, index) => {
            star.addEventListener('click', () => {
                stars.forEach((s, i) => {
                    if (i <= index) {
                        s.classList.add('active');
                    } else {
                        s.classList.remove('active');
                    }
                });
                alert(`You rated: ${index + 1} stars`);
            });
        });
    });
}

