const menu=document.querySelector('#mobile__menu')
const menuLinks=document.querySelector('.navbar__menu')
const navLogo=document.querySelector('#navbar__logo')
const body= document.querySelector('body')

// display mobile  menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    body.classList.toggle('active')

}
menu.addEventListener('click', mobileMenu)


