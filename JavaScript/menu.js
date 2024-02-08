const menuButton = document.getElementById('menuButton');
const navbar = document.querySelector('.navbar');
const modal = document.getElementById('mobileMenu');

function toggleMenu() {
    if (window.innerWidth > 600) {
        navbar.style.display = 'block';
        menuButton.style.display = 'none';
        modal.style.display = 'none'; 
    } else {
        navbar.style.display = 'none';
        menuButton.style.display = 'block';
    }
}

function showMenu() {
    modal.style.display = 'flex';
}

function hideMenu() {
    modal.style.display = 'none';
}

toggleMenu();
window.addEventListener('resize', toggleMenu);

menuButton.addEventListener('click', function () {
    navbar.classList.toggle('active');
    showMenu();
});

modal.addEventListener('click', function (event) {
    if (event.target === modal) {
        hideMenu();
    }
});
