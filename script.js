function getReviews() {
    const reviews = localStorage.getItem('reviews');
    return reviews ? JSON.parse(reviews) : {};
}

function saveReviews(reviews) {
    localStorage.setItem('reviews', JSON.stringify(reviews));
}