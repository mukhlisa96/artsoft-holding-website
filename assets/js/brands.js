body = document.querySelector('body');

const centerblockWrapper = document.querySelector('.center-block-wrapper');
let plusContainer = document.querySelector('.plus-container');
var slideIndex = 0;

let burger = document.querySelector('.burger');
const nav = document.querySelector('.burger-navbar');

let secondBlock = document.querySelector('.lang-block');

const plusBtns = document.querySelectorAll('.plus');

let h2= document.querySelector('h2');
let p = document.querySelector('p');

let absoluteBorder = document.querySelectorAll('.absolute-border');
            let langItem = document.querySelector('ul.lang > li:hover');
            let hover = document.querySelectorAll('.lang-item');
            let burgerLine1 = document.querySelector('.line1');
            let burgerLine2 = document.querySelector('.line2');
            let rect = document.querySelector('rect');
            let path = document.querySelector('path');
            let middleLine = document.querySelector('.middle-line');
            let menuLinkSpan = document.querySelectorAll('.menu-link-span');





// burger nav animation
const navSlide = () => {
const navLinks = document.querySelectorAll('.burger-menu-links li');


controlOpen = document.querySelector('.control-open');
controlClose = document.querySelector('.control-close');
leftMenu = document.querySelector('.left-menu');
contactInfo = document.querySelector('.burger-navbar-block-3');
menuIcon = document.querySelector('.menu-icon');

burger.addEventListener('click', () => {

        nav.classList.toggle('burger-nav-active');
        // soundControl = document.querySelector(".sound-control");
        // soundControl.classList.toggle("toggle-opacity");
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






// brands-slider

$('.slick')
  .on('init', () => {
    $('.slick-slide[data-slick-index="-2"]').addClass('lt2');
    $('.slick-slide[data-slick-index="-1"]').addClass('lt1');
    $('.slick-slide[data-slick-index="1"]').addClass('gt1');
    $('.slick-slide[data-slick-index="2"]').addClass('gt2');
})
  .slick({
  centerMode: true,
  centerPadding: 0,
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 1500,
}).on('beforeChange', (event, slick, current, next) => {
  $('.slick-slide.gt2').removeClass('gt2');
  $('.slick-slide.gt1').removeClass('gt1');
  $('.slick-slide.lt1').removeClass('lt1');
  $('.slick-slide.lt2').removeClass('lt2');

  const lt2 = (current < next && current > 0) ? current - 1 : next - 2;
  const lt1 = (current < next && current > 0) ? current : next - 1;
  const gt1 = (current < next || next === 0) ? next + 1 : current;
  const gt2 = (current < next || next === 0) ? next + 2 : current + 1;

  $(`.slick-slide[data-slick-index="${lt2}"]`).addClass('lt2');
  $(`.slick-slide[data-slick-index="${lt1}"]`).addClass('lt1');
  $(`.slick-slide[data-slick-index="${gt1}"]`).addClass('gt1');
  $(`.slick-slide[data-slick-index="${gt2}"]`).addClass('gt2');

  // Clone processing when moving from 5 to 0
  if (current === 5 && next === 0) {
    $(`.slick-slide[data-slick-index="${current - 1}"]`).addClass('lt2');
    $(`.slick-slide[data-slick-index="${current}"]`).addClass('lt1');
    $(`.slick-slide[data-slick-index="${current + 2}"]`).addClass('gt1');
    $(`.slick-slide[data-slick-index="${current + 3}"]`).addClass('gt2');
  }

  // Clone processing when moving from 0 to 5
  if (current === 0 && next === 5) {
    $(`.slick-slide[data-slick-index="${current - 1}"]`).addClass('gt2');
    $(`.slick-slide[data-slick-index="${current}"]`).addClass('gt1');
    $(`.slick-slide[data-slick-index="${current - 2}"]`).addClass('lt1');
    $(`.slick-slide[data-slick-index="${current - 3}"]`).addClass('lt2');
  }

  // console.log('beforeChange', current, ':', lt2, lt1, next, gt1, gt2);
});
// brands-slider-end

// indicators rotation slider

let circles = document.querySelectorAll('.r-circle');
let rect1 = document.querySelector('.rect');
let pos = 1;


circles.forEach((c, index)=> {


    c.addEventListener('click', () => {
        if(rect1.style.transform){
            rect1.style.transform = '';
        }else{
            if(index == 0)rect1.style.transform = `rotate(${90+(index*pos)}deg)`;
            else if(index == 1)rect1.style.transform = `rotate(${0+(index*pos)}deg)`;
            else if(index == 2)rect1.style.transform = `rotate(${-90+(index*pos)}deg)`;
            else if(index == 3)rect1.style.transform = `rotate(${-180+(index*pos)}deg)`;


        }


       
    });
});
// indicators rotation slider

 $(window).scroll(function () {
         var scroll = $(window).scrollTop();
         if (scroll >= 250) {$(".lang").hide();}else{$(".lang").show();}
});

 $(document).on('click', '.menu-link', function(){
    $(this).addClass('active').siblings().removeClass('active');
 });

 var brandsDescBtn = document.querySelector('.brands-desc-btn');
 var brandsModal = document.querySelector('.brands-modal');
 var closeBrandsModal = document.querySelector(".close-brands-modal");

 brandsDescBtn.addEventListener('click', ()=>{
    brandsModal.classList.add('show');
    menuIcon.style.opacity = 0;
    closeBrandsModal.style.display = "block";
    burger.style.display = "none";
    leftMenu.classList.toggle('disappear');
    // burgerLine1.style.display = "none";
    // burgerLine2.style.display = "none";
    // burger.innerHTML="<div class='close-brands-modal'></div>";

 });

closeBrandsModal.addEventListener('click', ()=>{
    brandsModal.classList.remove('show');
    menuIcon.style.opacity = 1;
    closeBrandsModal.style.display = "none";
    burger.style.display = "flex";
    leftMenu.classList.toggle('disappear');

    //  burgerLine1.style.display = "block";
    // burgerLine2.style.display = "block";


    // burger.innerHTML="<div class='control-open'>МЕНЮ</div><div class='control-close'>ЗАКРЫТЬ</div>";
});