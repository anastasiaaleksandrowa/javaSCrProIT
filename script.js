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

function addReview() {
    const productNameInput = document.getElementById('product-name');
    const reviewTextInput = document.getElementById('review-text');

    const productName = productNameInput.value.trim();
    const reviewText = reviewTextInput.value.trim();

    if (!productName || !reviewText) {
        alert("Пожалуйста, заполните все поля.");
        return;
    }

    const reviews = getReviews();

    if (!reviews[productName]) {
        reviews[productName] = [];
    }

    reviews[productName].push({ text: reviewText });

    saveReviews(reviews);

    productNameInput.value = '';
    reviewTextInput.value = '';

    displayProducts();
}