
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
const navLinks = document.querySelectorAll('.menu-links li');

// leftBorder = document.querySelector('.left-border');
// rightBorder = document.querySelector('.right-border');

controlOpen = document.querySelector('.control-open');
controlClose = document.querySelector('.control-close');

burger.addEventListener('click', () => {

    // toggle nav
        nav.classList.toggle('burger-nav-active');
        // leftBorder.classList.toggle('toggle');
        // rightBorder.classList.toggle('toggle');

        controlOpen.classList.toggle('pull-right');
        controlClose.classList.toggle('pull-left');

    // animate links

        navLinks.forEach((link, index) => {
           if (link.style.animation) {
            link.style.animation = '';
           } else {
             link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.8}s`;
           }
        });

        // burger animation
        burger.classList.toggle('toggle');

    });

   
}
navSlide();