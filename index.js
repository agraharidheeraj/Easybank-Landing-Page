document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.nav_toggle');
    const navbarNav = document.querySelector('.navbar_nav');
    const toggleImage = toggleButton.querySelector('img');

    toggleButton.addEventListener('click', function () {
        toggleButton.classList.toggle('active');
        navbarNav.classList.toggle('active');

        if (toggleButton.classList.contains('active')) {
            toggleImage.src = './images/icon-close.svg'; 
        } else {
            toggleImage.src = './images/icon-hamburger.svg'; 
        }
    });
});



