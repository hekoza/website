const navMenu = document.querySelector('.nav-buttons');
const navBar = document.querySelector('.nav-bar');

document.querySelector('.menu-mobile').addEventListener('click', () => {
    navMenu.classList.toggle('open');
    var ctr = 1;
    navBar.classList.toggle('visible');

    if (navBar.classList.contains('visible')) {
        navBar.style.display = 'block';
        window.setTimeout(function(){
            navBar.style.opacity = 1;
        },0);

        const body = document.body;
        body.style.overflow = 'hidden';
    }
    else {
        const body = document.body;
        body.style.overflow = '';

        navBar.style.opacity = 0;
        window.setTimeout(function(){
            navBar.style.display = 'none';
        },300);
    }
});