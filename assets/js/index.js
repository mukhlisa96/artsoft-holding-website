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
mLink.addEventListener('click', ()=>{
          if (ind ==2 || ind == 3) {
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


                     }else if(ind != 2 || ind != 3 ){
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



// activity modal

let modalOpenBtns = document.querySelectorAll(".plus");

 modalOpenBtns.forEach((btn, index) => {
          btn.addEventListener('click', () => {
            document.querySelector("a").classList.add("disabled");

            document.querySelectorAll('.menu-link').forEach((ml,index) => {ml.style.display="none";});
            currentImg = document.querySelector(`#camp-img-${index}`);
            currentImg.classList.add("show-img");
            setTimeout(function(){ 
                currentModal = document.querySelector(`#modal-${index}`);
                currentModal.classList.add("show-modal");
            }, 1000);


          });
        });


 let modalCloseBtns = document.querySelectorAll(".close");

 modalCloseBtns.forEach((btn, index) => {
          btn.addEventListener('click', () => {
                document.querySelectorAll('.menu-link').forEach((ml,index) => {ml.style.display="flex";});
                currentModal = document.querySelector(`#modal-${index}`);
                currentModal.classList.remove("show-modal");

            setTimeout(function(){ 
            currentImg = document.querySelector(`#camp-img-${index}`);
            currentImg.classList.remove("show-img");
            }, 1000);



            
          });
        });