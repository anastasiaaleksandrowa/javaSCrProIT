function getReviews() {
    const reviews = localStorage.getItem('reviews');
    return reviews ? JSON.parse(reviews) : {};
}

function saveReviews(reviews) {
    localStorage.setItem('reviews', JSON.stringify(reviews));
}

function displayProducts() {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';

    const reviews = getReviews();

    for (const product in reviews) {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.textContent = product;

        productDiv.addEventListener('click', () => displayReviews(product));

        productsContainer.appendChild(productDiv);
    }
}

function displayProducts() {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';

    const reviews = getReviews();

    for (const product in reviews) {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.textContent = product;

        productDiv.addEventListener('click', () => displayReviews(product));

        productsContainer.appendChild(productDiv);
    }
}