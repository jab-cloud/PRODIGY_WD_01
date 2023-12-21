window.addEventListener('scroll', function() {
    let navMenu = document.getElementById('#navMenu');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 70) {
        navMenu.style.backgroundColor = 'blue';
        navMenu.style.color = 'white';
    } else {
        navMenu.style.backgroundColor = '#333';
        navMenu.style.color = 'red';
    }
});