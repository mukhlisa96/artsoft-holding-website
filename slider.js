
const centerblockWrapper = document.querySelector('.center-block-wrapper');
document.querySelectorAll('.menu-link').forEach(function(indicator, ind){
    indicator.addEventListener('click', function(){
        if(document.querySelector('.menu-link.active')){
            document.querySelector('.menu-link.active').classList.remove('active');
        }
        indicator.classList.add('active');
        centerblockWrapper.style.transform = 'translateY('+ (ind) * -20 + '%)';
    });
});

// burger nav animation
const navSlide = () => {
let burger = document.querySelector('.burger');
const nav = document.querySelector('.burger-navbar');
const navLinks = document.querySelectorAll('.burger-menu-links li');


controlOpen = document.querySelector('.control-open');
controlClose = document.querySelector('.control-close');
leftMenu = document.querySelector('.left-menu');
contactInfo = document.querySelector('.burger-navbar-block-3');
menuIcon = document.querySelector('.menu-icon');

burger.addEventListener('click', () => {

        nav.classList.toggle('burger-nav-active');
        controlOpen.classList.toggle('pull-right');
        controlClose.classList.toggle('pull-left');
        leftMenu.classList.toggle('disappear');

        if (contactInfo.style.animation) {
            contactInfo.style.animation = '';
           } else {
              contactInfo.style.animation = `contactInfoFade 1s ease forwards 1s`;
           }

        navLinks.forEach((link, index) => {
           if (link.style.animation) {
            link.style.animation = '';
           } else {
             link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.6}s`;
           }
        });

        burger.classList.toggle('toggle');

    });

menuIcon.addEventListener('click', () => {

        nav.classList.toggle('burger-nav-active');
        controlOpen.classList.toggle('pull-right');
        controlClose.classList.toggle('pull-left');
        leftMenu.classList.toggle('disappear');

        if (contactInfo.style.animation) {
            contactInfo.style.animation = '';
           } else {
              contactInfo.style.animation = `contactInfoFade 1s ease forwards 1s`;
           }

        navLinks.forEach((link, index) => {
           if (link.style.animation) {
            link.style.animation = '';
           } else {
             link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.6}s`;
           }
        });

        burger.classList.toggle('toggle');

    });

   
}
navSlide();