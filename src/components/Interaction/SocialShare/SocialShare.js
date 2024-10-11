
function SocialShare(selector) {
    const socialShares = document.querySelectorAll(selector);
    socialShares.forEach(socialShare => {
        socialShare.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                const url = encodeURIComponent(window.location.href);
                const platform = e.target.dataset.platform;
                let shareUrl;
                switch (platform) {
                    case 'facebook':
                        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                        break;
                    case 'twitter':
                        shareUrl = `https://twitter.com/intent/tweet?url=${url}`;
                        break;
                    case 'linkedin':
                        shareUrl = `https://www.linkedin.com/shareArticle?url=${url}`;
                        break;
                }
                window.open(shareUrl, '_blank');
            }
        });
    });
}

