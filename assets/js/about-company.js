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
          if (ind ==1 || ind == 3 || ind==5 || ind==4) {
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


         }else if(ind != 1 || ind != 3 || ind!=5 || ind!=4){
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


// circles.forEach((c, index)=> {
//     c.addEventListener('click', () => {
//         if(rect1.style.transform){
//             rect1.style.transform = '';
//         }else{
//             if(index == 0)rect1.style.transform = `rotate(${90*(index+1)}deg)`;
//             else if(index == 1)rect1.style.transform = `rotate(${90*(index+1)}deg)`;
//             else if(index == 2)rect1.style.transform = `rotate(${90*(index+1)}deg)`;
//             else if(index == 3)rect1.style.transform = `rotate(${90*(index+1)}deg)`;
//         }
//     });
// });
// indicators rotation slider

// function countTo(fromInput, toInput){
//     let from = fromInput;
//     let to = toInput;

//     let step = to > from ? 1 : -1;
//     let interval = 10;

//     if(from==to){
//         document.querySelector('#output').textContent = from;
//         return;
//     }

//     let counter = setInterval(function(){
//         from += step;
//         document.querySelector('#output').textContent = from;

//         if(from == to){
//             clearInterval(counter);
//         }
//     }, interval);
// }


circleNext = document.querySelector('.circle-next');
circlePrev = document.querySelector('.circle-prev');
let dot1 = document.querySelector(".c-1");
let dot2 = document.querySelector(".c-2");
let dot3 = document.querySelector(".c-3");
let dot4 = document.querySelector(".c-4");

currentCircleSlideIndex = 1;
reverseRotate = 1;

rRow = document.querySelector(".r-row");
var el = document.querySelector(".rect");

var st = window.getComputedStyle(el, null);
var activeDotIndex = document.querySelector(".active-dot-index");

circleNext.addEventListener('click', () => {
circlePrev.removeAttribute("disabled");
    // if(currentCircleSlideIndex<=4){ 
        // console.log("NEXTreverseR"+reverseRotate);
        // console.log("NEXTRot"+currentCircleSlideIndex);
        rect1.style.transform = `rotate(${currentCircleSlideIndex*90}deg)`;
        currentCircleSlideIndex++;
        reverseRotate--;


          let doot1 = dot1.getBoundingClientRect();
          let doot2 = dot2.getBoundingClientRect();
          let doot3 = dot3.getBoundingClientRect();
          let doot4 = dot4.getBoundingClientRect();
          let dotLabel = document.querySelector(".r-circle-label");

          // let document.querySelector(".active-dot-view") = document.querySelector(".active-dot-view");
          console.log("1--"+Math.round(doot1.x) +" "+Math.round(doot1.y));
          console.log("2--"+Math.round(doot2.x) +" "+Math.round(doot2.y));
          console.log("3--"+Math.round(doot3.x) +" "+Math.round(doot3.y));
          console.log("4--"+Math.round(doot4.x) +" "+Math.round(doot4.y));


if(Math.round(doot1.x)==501 && Math.round(doot1.y)==122 || Math.round(doot1.y)==144){
    dot1.classList.add('active-dot');
    dotLabel.innerHTML = "Молочные продукты";
    activeDotIndex.innerHTML = "01";
    countTo(10, 23, '#output');
}else{dot1.classList.remove('active-dot');}


if(Math.round(doot2.x)==501 && Math.round(doot2.y)==122 || Math.round(doot2.y)==144){
    dot2.classList.add('active-dot');
    dotLabel.innerHTML = "Мясопереработка";
    activeDotIndex.innerHTML = "02";
    countTo(5, 12, '#output');
}else{dot2.classList.remove('active-dot');}


if(Math.round(doot3.x)==501 && Math.round(doot3.y)==122 || Math.round(doot3.y)==144){
    dot3.classList.add('active-dot');
    dotLabel.innerHTML = "Ткани";
    activeDotIndex.innerHTML = "03";
    countTo(10, 20, '#output');
}else{dot3.classList.remove('active-dot');}


if(Math.round(doot4.x)==501 && Math.round(doot4.y)==122 || Math.round(doot4.y)==144){
    dot4.classList.add('active-dot');
    dotLabel.innerHTML = "Назиания продукта 4";
    activeDotIndex.innerHTML = "04";
    circleNext.setAttribute("disabled","disabled");
    countTo(25,39, "#output");
}else{dot4.classList.remove('active-dot');}


    // }else{ 
        
        // circleNext.disable = true;
        // currentCircleSlideIndex=1;
    // }
    
});

circlePrev.addEventListener('click', () => {
    circleNext.removeAttribute("disabled");
     // if(reverseRotate<=4 && reverseRotate >=1){ 
        // console.log("PrevreverseR"+reverseRotate);
        // console.log("PrevRot"+currentCircleSlideIndex);

        rect1.style.transform = `rotate(${reverseRotate* -90}deg)`;
        // rRow.style.transform = `rotate(90deg);`
        currentCircleSlideIndex--;
        reverseRotate++;


         let doot1 = dot1.getBoundingClientRect();
          let doot2 = dot2.getBoundingClientRect();
          let doot3 = dot3.getBoundingClientRect();
          let doot4 = dot4.getBoundingClientRect();
          let dotLabel = document.querySelector(".r-circle-label");
          // let document.querySelector(".active-dot-view") = document.querySelector(".active-dot-view");
          console.log("1--"+Math.round(doot1.x) +" "+Math.round(doot1.y));
          console.log("2--"+Math.round(doot2.x) +" "+Math.round(doot2.y));
          console.log("3--"+Math.round(doot3.x) +" "+Math.round(doot3.y));
          console.log("4--"+Math.round(doot4.x) +" "+Math.round(doot4.y));

if(Math.round(doot1.x)==909 && Math.round(doot1.y)==530){
    dot1.classList.add('active-dot');
    dotLabel.innerHTML = "Молочные продукты";
    activeDotIndex.innerHTML = "01";
    circlePrev.setAttribute("disabled","disabled");
    countTo(10, 23, "#output");
}else{dot1.classList.remove('active-dot');}


if(Math.round(doot2.x)==909 && Math.round(doot2.y)==530){
    dot2.classList.add('active-dot');
    dotLabel.innerHTML = "Мясопереработка";
    activeDotIndex.innerHTML = "02";
    countTo(5, 12, "#output");
}else{dot2.classList.remove('active-dot');}


if(Math.round(doot3.x)==909 && Math.round(doot3.y)==530){
    dot3.classList.add('active-dot');
    dotLabel.innerHTML = "Ткани";
    activeDotIndex.innerHTML = "03";
    countTo(10, 20, "#output");
}else{dot3.classList.remove('active-dot');}


if(Math.round(doot4.x)==909 && Math.round(doot4.y)==530){
    dot4.classList.add('active-dot');
    dotLabel.innerHTML = "Назиания продукта 4";
    activeDotIndex.innerHTML = "04";
    countTo(25, 39, "#output");
}else{dot4.classList.remove('active-dot');}


    // }else{ 
        //  circlePrev.disable = true;
        // currentCircleSlideIndex=1;
    // }
});



// **************************** video

let playBtn = document.querySelector(".play-btn");
let playLabel = document.querySelector(".play-label");
let closeVideoCircle = document.querySelector("#closeVideoCircle");
let playingCircleVideo = document.querySelector("#playingCircleVideo");

playBtn.addEventListener('click', () => {
    playingCircleVideo.style.display = "block";
    document.querySelector(".video-blacklayer").style.display = "block";
    closeVideoCircle.style.display = "block";
});

playLabel.addEventListener('click', () => {
    playingCircleVideo.style.display = "block";
    document.querySelector(".video-blacklayer").style.display = "block";
    closeVideoCircle.style.display = "block";

});

closeVideoCircle.addEventListener('click', () => {
    playingCircleVideo.style.display = "none";
    document.querySelector(".video-blacklayer").style.display = "none";
    closeVideoCircle.style.display = "none";
});



$(document).mouseup(function(e) 
{
    var playingCircleVideo = $("#playingCircleVideo");

    // if the target of the click isn't the playingCircleVideo nor a descendant of the playingCircleVideo
    if (!playingCircleVideo.is(e.target) && playingCircleVideo.has(e.target).length === 0) 
    {
        playingCircleVideo.hide();
         document.querySelector(".video-blacklayer").style.display = "none";
         document.querySelector("#closeVideoCircle").style.display = "none";
    }
});

$(document).ready(function(){
  $('.owl-carousel-stat').owlCarousel({

    loop:true,
    items:1,
    nav:true
  });
});

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