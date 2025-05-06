function getReviews() {
    const reviews = localStorage.getItem('reviews');
    return reviews ? JSON.parse(reviews) : {};
}