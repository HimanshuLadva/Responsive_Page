burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')
rightNav = document.querySelector('.rightNav')

burger.addEventListener('click', ()=>{
     navlist.classList.toggle('v-class-resp')
     rightNav.classList.toggle('v-class-resp')
     navbar.classList.toggle('h-nav-resp')
})