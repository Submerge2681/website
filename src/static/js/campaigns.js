document.addEventListener("DOMContentLoaded", function() {
    let articles = document.querySelectorAll('.articles');
    let showMoreBtn = document.getElementById('show-more');
    let visibleCount = 4; // Number of articles to show initially
    let totalArticles = articles.length;

    // Show the initial set of articles
    for (let i = 0; i < visibleCount && i < totalArticles; i++) {
        articles[i].classList.add('shown');
    }

    // Show more articles on button click
    window.showMore = function() {
        let currentlyVisible = document.querySelectorAll('.articles.shown').length;
        let newVisibleCount = currentlyVisible + visibleCount;

        for (let i = currentlyVisible; i < newVisibleCount && i < totalArticles; i++) {
            articles[i].classList.add('shown');
        }

        // Hide the button if all articles are shown
        if (newVisibleCount >= totalArticles) {
            showMoreBtn.style.display = 'none';
        }
    };

    // Initially hide the button if there are fewer or equal articles than the visible count
    if (totalArticles <= visibleCount) {
        showMoreBtn.style.display = 'none';
    }
});