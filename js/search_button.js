document.addEventListener('DOMContentLoaded', function () {
    const searchToggle = document.getElementById('search-toggle');
    const searchContainer = document.getElementById('search-container');

    searchToggle.addEventListener('click', function () {
        searchContainer.classList.toggle('hidden');

        if (!searchContainer.classList.contains('hidden')) {
            document.getElementById('search-input').focus();
        }
    });
});