
const centerblockWrapper = document.querySelector('.center-block-wrapper');
let plusContainer = document.querySelector('.plus-container');
var slideIndex = 0;

let burger = document.querySelector('.burger');
const nav = document.querySelector('.burger-navbar');

secondBlock = document.querySelector('.lang-block');

// let burgerToggle = document.querySelector('.burger .toggle');




document.querySelectorAll('.menu-link').forEach(function(indicator, ind){
    indicator.addEventListener('click', function(){
        if(document.querySelector('.menu-link.active')){
            document.querySelector('.menu-link.active').classList.remove('active');
        }
        indicator.classList.add('active');
        centerblockWrapper.style.transform = 'translateY('+ (ind) * -20 + '%)';
        slideIndex = ind;

        if (slideIndex==1) {
            plusContainer.classList.add('show');
            secondBlock.style.zIndex = -1;

            burger.addEventListener('click', () => {
                plusContainer.classList.toggle('show');
            });
            
            menuIcon.addEventListener('click', () => {
                plusContainer.classList.toggle('show');
            });

        }
        else{
             plusContainer.classList.remove('show');
             secondBlock.style.zIndex = 40;

        }

    });
});

// burger nav animation
const navSlide = () => {
// let burger = document.querySelector('.burger');
// const nav = document.querySelector('.burger-navbar');
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


// map plus icons
let plus = document.querySelector('.plus-1');
let secondSlide = document.querySelector('activity-block');
plus.addEventListener('click', () => {
    // campImg.classList.add('show-campImg');

    secondSlide.style.display = 'none';
});





