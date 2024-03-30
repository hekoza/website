const menuSelector = document.querySelector('.menu-mobile');

menuSelector.addEventListener('click', () => {
    menuSelector.classList.toggle('open');
});