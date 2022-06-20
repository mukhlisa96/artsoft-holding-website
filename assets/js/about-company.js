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


$(function() {
          $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              let ind=target.selector;
              ind = ind.replace('#', '');
              // console.log(ind);
        if (ind ==1 || ind == 3 || ind==5) {
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


         }else if(ind != 1 || ind != 3 || ind!=5){
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


              if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top
                }, 1000);
                return false;
              }
            }
          });
        });

        
plusBtns.forEach((pBtn, index) => {

    pBtn.addEventListener('click', () => {
        plusContainer.classList.remove('show');
        let campImg = document.querySelector(`.camp-img-${index+1}`);
        let campModal = document.querySelector(`.camp-modal-${index+1}`);

        campImg.classList.add('show-camp-img');
        campModal.classList.add('open');
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


circleNext = document.querySelector('.circle-next');
circlePrev = document.querySelector('.circle-prev');
let dot1 = document.querySelector(".c-1");
let dot2 = document.querySelector(".c-2");
let dot3 = document.querySelector(".c-3");
let dot4 = document.querySelector(".c-4");

currentCircleSlideIndex = 1;

rRow = document.querySelector(".r-row");
var el = document.querySelector(".rect");

var st = window.getComputedStyle(el, null);
var angle;

circleNext.addEventListener('click', () => {

    if(currentCircleSlideIndex<=4){ 
        circleNext.disable = false;
        rect1.style.transform = `rotate(${currentCircleSlideIndex*90}deg)`;
        // rRow.style.transform = `rotate(-90deg)`;
        currentCircleSlideIndex++;
        // angle = getMyAngle(st);


          let doot1 = dot1.getBoundingClientRect();
          let doot2 = dot2.getBoundingClientRect();
          let doot3 = dot3.getBoundingClientRect();
          let doot4 = dot4.getBoundingClientRect();
          let dotLabel = document.querySelector(".r-circle-label");
          // let document.querySelector(".active-dot-view") = document.querySelector(".active-dot-view");
          // console.log("1--"+Math.round(doot1.x) +" "+Math.round(doot1.y));
          // console.log("2--"+Math.round(doot2.x) +" "+Math.round(doot2.y));
          // console.log("3--"+Math.round(doot3.x) +" "+Math.round(doot3.y));
          // console.log("4--"+Math.round(doot4.x) +" "+Math.round(doot4.y));


if(Math.round(doot1.x)==504 && Math.round(doot1.y)==119){
    dot1.classList.add('active-dot');
    dotLabel.innerHTML = "Молочные продукты";

}else{
    dot1.classList.remove('active-dot');

}


if(Math.round(doot2.x)==504 && Math.round(doot2.y)==119){
    dot2.classList.add('active-dot');
    dotLabel.innerHTML = "Мясопереработка";


}else{
    dot2.classList.remove('active-dot');

}


if(Math.round(doot3.x)==504 && Math.round(doot3.y)==119){
    dot3.classList.add('active-dot');
    dotLabel.innerHTML = "Ткани";


}else{
    dot3.classList.remove('active-dot');

}


if(Math.round(doot4.x)==504 && Math.round(doot4.y)==119){
    dot4.classList.add('active-dot');
    dotLabel.innerHTML = "Назиания продукта 4";


}else{
    dot4.classList.remove('active-dot');

}


    }else{ 
        
        circleNext.disable = true;
        currentCircleSlideIndex=1;
    }
    
});

circlePrev.addEventListener('click', () => {
     if(currentCircleSlideIndex<=4){ 
        circlePrev.disable = false;
        rect1.style.transform = `rotate(${currentCircleSlideIndex* -90}deg)`;
        rRow.style.transform = `rotate(90deg);`
        currentCircleSlideIndex++;
        angle = getMyAngle(st);
        // console.log('prev'+angle);
        makeDotActive(angle);
    }else{ 
         circlePrev.disable = true;
        currentCircleSlideIndex=1;
    }
});



// ****************************


function getMyAngle(st){
var tr = st.getPropertyValue("-webkit-transform") ||
         st.getPropertyValue("-moz-transform") ||
         st.getPropertyValue("-ms-transform") ||
         st.getPropertyValue("-o-transform") ||
         st.getPropertyValue("transform") ||
         "FAIL";



var values = tr.split('(')[1].split(')')[0].split(',');
var a = values[0];
var b = values[1];
var c = values[2];
var d = values[3];

var scale = Math.sqrt(a*a + b*b);


var sin = b/scale;

var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
return angle;

}

function makeDotActive(angle){
if(angle==90){
    dot1.classList.add('active-dot');
}else{
    dot1.classList.remove('active-dot');
}

}


// function getCircleCordinates(){
//     let elem = document.querySelector('div');
//     let rect = elem.getBoundingClientRect();
//     console.log("x: "+ rect.x);
//     console.log("y: "+ rect.y);

// }

 // let elem = document.querySelector('.c-1');
 // let elem = document.querySelector('div');
 // let elem = document.querySelector('div');
 // let elem = document.querySelector('div');

    // let doot = dot1.getBoundingClientRect();
    // console.log("x: "+ doot.x);
    // console.log("y: "+ doot.y);
