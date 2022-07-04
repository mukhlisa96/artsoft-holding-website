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


        
document.querySelectorAll(".menu-link").forEach((mLink, ind)=>{
    mLink.addEventListener('click', () => {
         if (ind ==1 || ind == 2) {
            nav.style.background = 'rgb(199, 201, 206) none repeat scroll 0% 0%';

            body.style.color = '#42567a';
            document.querySelectorAll('.menu-link').forEach(function(indicator, ind){indicator.style.color= '#42567a';});
            burgerLine1.style.backgroundColor = '#42567a';
            burgerLine2.style.backgroundColor = '#42567a';
            rect.setAttribute("stroke", "#42567a");
            path.setAttribute("stroke", "#42567a");
            middleLine.style.height = '65%';


            for (let elem of hover) {
              elem.addEventListener('mouseenter', () => {
                elem.style.borderBottom = '1px solid #42567a'
              })
              elem.addEventListener('mouseleave', () => {
                elem.style.borderBottom = ''            })
            };

            for (let elem of absoluteBorder) {
             elem.style.borderColor = 'rgba(66, 86, 122, 0.07)';
            };
            for (let elem of menuLinkSpan) {
             elem.style.backgroundColor = '#42567a';
            };


         }else if(ind != 1 || ind != 2 ){
              nav.style.background = 'rgb(137, 167, 223) none repeat scroll 0% 0%';

              body.style.color = 'white';
              document.querySelectorAll('.menu-link').forEach(function(indicator, ind){indicator.style.color= 'white';});
              burgerLine1.style.backgroundColor = 'white';
              burgerLine2.style.backgroundColor = 'white';
              middleLine.style.height = '100%';

            for (let elem of hover) {
              elem.addEventListener('mouseenter', () => {
                elem.style.borderBottom = '1px solid white'
              })
              elem.addEventListener('mouseleave', () => {
                elem.style.borderBottom = ''            })
            };

            rect.setAttribute("stroke", "white");
            path.setAttribute("stroke", "white");

             for (let elem of absoluteBorder) {
             elem.style.borderColor = '#ffffff4f';
            };
            for (let elem of menuLinkSpan) {
             elem.style.backgroundColor = 'white';
            };

         }
    });
});



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
        soundControl = document.querySelector(".sound-control");
        soundControl.classList.toggle("toggle-opacity");
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

$("#myVideo").prop('muted', true);

$(".sound-control").click(function () {
    if ($("#myVideo").prop('muted')) {
        $("#myVideo").prop('muted', false);
        $(".s-c-label").text("Отключить звук");
         $('.voiceon_img').show();
         $('.play-lines').hide();
        $(this).addClass('unmute-video'); // changing icon for button

    } else {
        $("#myVideo").prop('muted', true);
        $(".s-c-label").text("Включить звук");
         $('.voiceon_img').hide();
         $('.play-lines').show();
        $(this).removeClass('unmute-video'); // changing icon for button
    }
    console.log($("#myVideo").prop('muted'))
});

// let sendForm = document.querySelector(".meSend");
// let succesModal = document.querySelector(".succesModal");

// let closeSuccesModal = document.querySelector(".closeSuccesModal");
// sendForm.addEventListener('click', () => {
// alert("suc");
//     succesModal.style.display = "block";
// });
// closeSuccesModal.addEventListener('click', () => {
//     succesModal.style.display = "none";
// });

 $(document).on('click', '.menu-link', function(){
    $(this).addClass('active').siblings().removeClass('active');
 });
 
cbw = document.querySelector('.center-block-wrapper');
cbw.addEventListener('scroll', ()=>{
    let contentBlocks = document.querySelectorAll('.center-block');
    contentBlocks.forEach((content, index)=>{

      // document.getElementById(index).classList.add('active');
        let contentPosition = content.getBoundingClientRect().top;
        let screenPosition = window.innerHeight;
        if (contentPosition<screenPosition){

            content.classList.add('active-w');
        }else{
            content.classList.remove('active-w');

        }
    });
});