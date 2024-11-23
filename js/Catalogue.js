(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const categoryToggle = document.getElementById('category-toggle');
        const categoryList = document.getElementById('category-list');

        categoryToggle.addEventListener('click', function() {
            categoryList.classList.toggle('hidden');
        });

        const searchToggle = document.getElementById('search-toggle');
        const searchContainer = document.getElementById('search-container');

        searchToggle.addEventListener('click', function () {
            searchContainer.classList.toggle('hidden');

            if (!searchContainer.classList.contains('hidden')) {
                document.getElementById('search-input').focus();
            }
        });
    });
    window.addEventListener("load", function() {
        const loadTime = performance.now();

        const loadTimeElement = document.createElement("div");
        loadTimeElement.innerText = `Время загрузки страницы: ${loadTime.toFixed(3)} мс`;
        loadTimeElement.classList.add("load-time-info");

        const footer = document.querySelector("footer");
        if (footer) {
            footer.appendChild(loadTimeElement);
        } else {
            console.warn("Подвал сайта не найден. Добавьте элемент <footer> в HTML.");
        }
    });
})();