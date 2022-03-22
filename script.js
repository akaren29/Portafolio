let navMenu = document.querySelector('.ul-inicio');
let navToggle = document.querySelector('.nav-toggle')

navToggle.addEventListener('click', ()=> {
    navMenu.classList.toggle('nav-menu_visible')
})