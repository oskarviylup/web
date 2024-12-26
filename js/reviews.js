document.addEventListener('DOMContentLoaded', () => {
    const reviewsContainer = document.getElementById('reviews-container');
    const preloader = document.getElementById('preloader');
    const errorMessage = document.getElementById('error-message');

    const showPreloader = () => preloader.classList.remove('hidden');
    const hidePreloader = () => preloader.classList.add('hidden');

    const showError = () => {
        errorMessage.classList.remove('hidden');
        reviewsContainer.innerHTML = '';
    };

    const hideError = () => errorMessage.classList.add('hidden');

    const loadReviews = () => {
        showPreloader();
        hideError();

        const randomFilter = Math.random() > 0.5 ? '?id_gte=100' : '?id_lte=50';

        fetch(`https://jsonplaceholder.typicode.com/comments${randomFilter}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка сети');
                }
                return response.json();
            })
            .then(comments => {
                hidePreloader();
                reviewsContainer.innerHTML = '';

                comments.slice(0, 5).forEach(comment => {
                    const reviewElement = document.createElement('div');
                    reviewElement.classList.add('review');
                    reviewElement.innerHTML = `
                        <h4>${comment.name}</h4>
                        <p><strong>Email:</strong> ${comment.email}</p>
                        <p>${comment.body}</p>
                    `;
                    reviewsContainer.appendChild(reviewElement);
                });
            })
            .catch(error => {
                console.error(error);
                hidePreloader();
                showError();
            });
    };

    loadReviews();
});