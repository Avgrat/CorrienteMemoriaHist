//cosita del menu
const menualt = document.querySelector('.menu-alt');
const navbarder = document.querySelector('.navbar-der');

menualt.addEventListener('click',() =>{
    navbarder.classList.toggle('active');
});