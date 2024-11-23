document.addEventListener('DOMContentLoaded', function () {
    const array = document.querySelectorAll('header a');
    const currentPath = document.location.pathname;


    array.forEach(link => {
        if (currentPath.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});