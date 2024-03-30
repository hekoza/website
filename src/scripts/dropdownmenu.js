const dropdownButton1 = document.getElementById('ill-button');
const dropdownButton2 = document.getElementById('anim-button');
const dropdownMenu1 = document.getElementById('ill');
const dropdownMenu2 = document.getElementById('anim');

dropdownButton1.addEventListener('click', () => {
    dropdownButton1.classList.toggle('open');
    dropdownMenu1.classList.toggle('show');
    if (dropdownMenu2.classList.contains('show')) {
        dropdownMenu2.classList.remove('show');
        dropdownButton2.classList.remove('open');
    }
});

dropdownButton2.addEventListener('click', () => {
    dropdownButton2.classList.toggle('open');
    dropdownMenu2.classList.toggle('show');
    if (dropdownMenu1.classList.contains('show')) {
        dropdownMenu1.classList.remove('show');
        dropdownButton1.classList.remove('open');
    }
});

window.onclick = function(event) {
    if ((!event.target.matches('.dropdown-arrow')) && (!event.target.matches('.arrow'))) {
        var items = document.getElementsByClassName("dropdown-items");
        var i;

        for (i = 0; i < items.length; i++) {
            var openDropdown = items[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                dropdownButton1.classList.remove('open');
                dropdownButton2.classList.remove('open');
            }
        }
    }
}