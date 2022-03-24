let navMenu = document.querySelector('.ul-inicio');
let navToggle = document.querySelector('.nav-toggle')
let enlaces = document.querySelectorAll('.enlaces')

navToggle.addEventListener('click', ()=> {
    navMenu.classList.toggle('nav-menu_visible')
})


enlaces.forEach(element => 
    element.addEventListener('click', ()=>{
        navMenu.classList.remove('nav-menu_visible')
    })
)
