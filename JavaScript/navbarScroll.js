window.onscroll = function () {
    myFunction();
};

function myFunction() {
    var navbar = document.querySelector('.navbar');
    if (document.documentElement.scrollTop > 20) {
        navbar.classList.add('navbar2');
    } else {
        navbar.classList.remove('navbar2');
    }
}