let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick= () =>{
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}