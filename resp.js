burger=document.querySelector('.burger')
navbar=document.querySelector('.nav-bar')
rightnav=document.querySelector('.right-nav')
navlist=document.querySelector('.nav-list')

burger.addEventListener('click',()=>{
    navlist.classList.toggle('v-hidden-resp');
    rightnav.classList.toggle('v-hidden-resp');
    navbar.classList.toggle('h-nav-resp')
})

