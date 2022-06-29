
let rect2 = document.querySelector('.rect-history');


function countTo(fromInput, toInput, outputId){
    let from = fromInput;
    let to = toInput;

    let step = to > from ? 1 : -1;
    let interval = 10;

    if(from==to){
        document.querySelector(outputId).textContent = from;
        return;
    }

    let counter = setInterval(function(){
        from += step;
        document.querySelector(outputId).textContent = from;

        if(from == to){
            clearInterval(counter);
        }
    }, interval);
}

let year1 = document.querySelector(".year-1");
let year2 = document.querySelector(".year-2");

let owlCar1 = document.querySelector(".h-line-1");
let owlCar2 = document.querySelector(".h-line-2");
let owlCar3 = document.querySelector(".h-line-3");
let owlCar4 = document.querySelector(".h-line-4");

let hCircleNext = document.querySelector('.h-next');
let hCirclePrev = document.querySelector('.h-prev');
let hDot1 = document.querySelector(".h-1");
let hDot2 = document.querySelector(".h-2");
let hDot3 = document.querySelector(".h-3");
let hDot4 = document.querySelector(".h-4");
let hDot5 = document.querySelector(".h-5");
let hDot6 = document.querySelector(".h-6");

hCurrentCircleSlideIndex = 1;
hReverseRotate = 1;


var activeDotIndexh = document.querySelector(".history-index");

hCircleNext.addEventListener('click', () => {
hCirclePrev.removeAttribute("disabled");
    // if(hCurrentCircleSlideIndex<=4){ 
        // console.log("NEXTreverseR"+hReverseRotate);
        // console.log("NEXTRot"+hCurrentCircleSlideIndex);
        rect2.style.transform = `rotate(${hCurrentCircleSlideIndex*90}deg)`;
        hCurrentCircleSlideIndex++;
        hReverseRotate--;


          let hDoot1 = hDot1.getBoundingClientRect();
          let hDoot2 = hDot2.getBoundingClientRect();
          let hDoot3 = hDot3.getBoundingClientRect();
          let hDoot4 = hDot4.getBoundingClientRect();
          // let hDoot5 = hDot5.getBoundingClientRect();
          // let hDoot6 = hDot6.getBoundingClientRect();
          // let dotLabel = document.querySelector(".r-circle-label");

          // let document.querySelector(".active-dot-view") = document.querySelector(".active-dot-view");
          // console.log("1--"+Math.round(hDoot1.x) +" "+Math.round(hDoot1.y));
          // console.log("2--"+Math.round(hDoot2.x) +" "+Math.round(hDoot2.y));
          // console.log("3--"+Math.round(hDoot3.x) +" "+Math.round(hDoot3.y));
          // console.log("4--"+Math.round(hDoot4.x) +" "+Math.round(hDoot4.y));
          // console.log("5--"+Math.round(hDoot5.x) +" "+Math.round(hDoot5.y));
          // console.log("6--"+Math.round(hDoot5.x) +" "+Math.round(hDoot6.y));


if(hCurrentCircleSlideIndex==1){
    hDot1.classList.add('active-dot');
    // dotLabel.innerHTML = "Молочные продукты";
    activeDotIndexh.innerHTML = "01";
   countTo(1992, 2005, ".year-1");
    countTo(2005, 2022, ".year-2");

    owlCar1.style.display="block";
    
}else{hDot1.classList.remove('active-dot');owlCar1.style.display="none";}


if(hCurrentCircleSlideIndex==2){
    hDot2.classList.add('active-dot');
    // dotLabel.innerHTML = "Мясопереработка";
    activeDotIndexh.innerHTML = "02";
    countTo(1993, 2005, ".year-1");
    countTo(2005, 2022, ".year-2");
    owlCar2.style.display="block";

}else{hDot2.classList.remove('active-dot');
    owlCar2.style.display="none";

}


if(hCurrentCircleSlideIndex==3){
    hDot3.classList.add('active-dot');
    // dotLabel.innerHTML = "Ткани";
    activeDotIndexh.innerHTML = "03";
    countTo(1989, 2005, ".year-1");
    countTo(2005, 2022, ".year-2");
    owlCar3.style.display="block";
}else{hDot3.classList.remove('active-dot');
owlCar3.style.display="none";
}


if(hCurrentCircleSlideIndex==4){
    hDot4.classList.add('active-dot');
    // dotLabel.innerHTML = "Назиания продукта 4";
    activeDotIndexh.innerHTML = "04";
    hCircleNext.setAttribute("disabled","disabled");
    countTo(1999, 2005, ".year-1");
    countTo(2005, 2022, ".year-2");
    owlCar4.style.display="block";
}else{hDot4.classList.remove('active-dot');
owlCar4.style.display="none";
}

// if(Math.round(hDoot5.x)==559 && Math.round(hDoot5.y)==178){
//     hDot4.classList.add('active-dot');
//     // dotLabel.innerHTML = "Назиания продукта 4";
//     activeDotIndexh.innerHTML = "05";
//     hCircleNext.setAttribute("disabled","disabled");
//     countTo(25,39);
// }else{hDot4.classList.remove('active-dot');}

// if(Math.round(hDoot6.x)==841 && Math.round(hDoot6.y)==178){
//     hDot4.classList.add('active-dot');
//     // dotLabel.innerHTML = "Назиания продукта 4";
//     activeDotIndexh.innerHTML = "06";
//     hCircleNext.setAttribute("disabled","disabled");
//     countTo(25,39);
// }else{hDot4.classList.remove('active-dot');}


    // }else{ 
        
        // hCircleNext.disable = true;
        // hCurrentCircleSlideIndex=1;
    // }
    
});

hCirclePrev.addEventListener('click', () => {
    hCircleNext.removeAttribute("disabled");
     // if(hReverseRotate<=4 && hReverseRotate >=1){ 
        // console.log("PrevreverseR"+hReverseRotate);
        // console.log("PrevRot"+hCurrentCircleSlideIndex);

        rect2.style.transform = `rotate(${hReverseRotate* -90}deg)`;
        rRow.style.transform = `rotate(90deg);`
        hCurrentCircleSlideIndex--;
        hReverseRotate++;


         let hDoot1 = hDot1.getBoundingClientRect();
          let hDoot2 = hDot2.getBoundingClientRect();
          let hDoot3 = hDot3.getBoundingClientRect();
          let hDoot4 = hDot4.getBoundingClientRect();
          // let dotLabel = document.querySelector(".r-circle-label");
          // let document.querySelector(".active-dot-view") = document.querySelector(".active-dot-view");
          // console.log("1--"+Math.round(hDoot1.x) +" "+Math.round(hDoot1.y));
          // console.log("2--"+Math.round(hDoot2.x) +" "+Math.round(hDoot2.y));
          // console.log("3--"+Math.round(hDoot3.x) +" "+Math.round(hDoot3.y));
          // console.log("4--"+Math.round(hDoot4.x) +" "+Math.round(hDoot4.y));

if(hCurrentCircleSlideIndex==1){
    hDot1.classList.add('active-dot');
    // dotLabel.innerHTML = "Молочные продукты";
    activeDotIndexh.innerHTML = "01";
    hCirclePrev.setAttribute("disabled","disabled");
    countTo(1939, 2005, ".year-1");
    countTo(2005, 2022, ".year-2");
    owlCar1.style.display="block";
}else{hDot1.classList.remove('active-dot');
owlCar1.style.display="none";
}


if(hCurrentCircleSlideIndex==2){
    hDot2.classList.add('active-dot');
    // dotLabel.innerHTML = "Мясопереработка";
    activeDotIndexh.innerHTML = "02";
    countTo(1899, 2005, ".year-1");
    countTo(2005, 2022, ".year-2");
    owlCar2.style.display="block";
}else{hDot2.classList.remove('active-dot');
owlCar2.style.display="none";
}


if(hCurrentCircleSlideIndex==3){
    hDot3.classList.add('active-dot');
    // dotLabel.innerHTML = "Ткани";
    activeDotIndexh.innerHTML = "03";
    countTo(1999, 2005, ".year-1");
    countTo(2005, 2022, ".year-2");
    owlCar3.style.display="block";
}else{hDot3.classList.remove('active-dot');
owlCar3.style.display="none";
}


if(hCurrentCircleSlideIndex==4){
    hDot4.classList.add('active-dot');
    // dotLabel.innerHTML = "Назиания продукта 4";
    activeDotIndexh.innerHTML = "04";
    countTo(1999, 2005, ".year-1");
    countTo(2005, 2022, ".year-2");
    owlCar4.style.display="block";
}else{hDot4.classList.remove('active-dot');
owlCar4.style.display="none";
}

// if(Math.round(hDoot5.x)==912 && Math.round(hDoot5.y)==527){
//     hDot4.classList.add('active-dot');
//     // dotLabel.innerHTML = "Назиания продукта 4";
//     activeDotIndexh.innerHTML = "05";
//     countTo(25, 39);
// }else{hDot4.classList.remove('active-dot');}

// if(Math.round(hDoot6.x)==912 && Math.round(hDoot6.y)==527){
//     hDot4.classList.add('active-dot');
//     // dotLabel.innerHTML = "Назиания продукта 4";
//     activeDotIndexh.innerHTML = "06";
//     countTo(25, 39);
// }else{hDot4.classList.remove('active-dot');}


    // }else{ 
        //  hCirclePrev.disable = true;
        // hCurrentCircleSlideIndex=1;
    // }
});




$(document).ready(function(){
  $('.owl-carousel-1').owlCarousel({
    responsiveClass:true,
    loop:true,
    items:4,
  });
});


$(document).ready(function(){
  $('.owl-carousel-2').owlCarousel({
    responsiveClass:true,
    loop:true,
    items:4,
  });
});

$(document).ready(function(){
  $('.owl-carousel-3').owlCarousel({
    responsiveClass:true,
    loop:true,
    items:4,
  });
});

$(document).ready(function(){
  $('.owl-carousel-4').owlCarousel({
    responsiveClass:true,
    loop:true,
    items:4,
  });
});



let mC = 1;

let mHPrev = document.querySelector('.m-h-prev');
let mHNext = document.querySelector('.m-h-next');
hSIndex = document.querySelector(".h-s-index");

mHNext.addEventListener('click', () => {
    mC++;
    if(mC==1){
        mHPrev.removeAttribute("disabled");
        hSIndex.innerHTML = "01";
        countTo(1989, 1999, ".year-1");
        countTo(1993, 2003, ".year-2");
        owlCar1.style.display = "block";
    }else{owlCar1.style.display="none";}

    if(mC==2){
        mHPrev.removeAttribute("disabled");
        hSIndex.innerHTML = "02";
        countTo(1999, 2004, ".year-1");
        countTo(2004, 2008, ".year-2");
        owlCar2.style.display = "block";
    }else{owlCar2.style.display="none";}

    if(mC==3){
        mHPrev.removeAttribute("disabled");
        hSIndex.innerHTML = "03";
        countTo(2004, 2009, ".year-1");
        countTo(2009, 2013, ".year-2");
        owlCar3.style.display = "block";
    }else{owlCar3.style.display="none";}

    if(mC==4){
        mHNext.setAttribute("disabled","disabled");
        mHPrev.removeAttribute("disabled");

        hSIndex.innerHTML = "04";
        countTo(2013, 2018, ".year-1");
        countTo(2018, 2022, ".year-2");
        owlCar4.style.display = "block";
    }else{owlCar4.style.display="none";}

    if(mC>4){
        mHNext.setAttribute("disabled","disabled");
        mHPrev.removeAttribute("disabled");

    mC=4;
}
});



mHPrev.addEventListener('click', () => {
    mC--;
    if(mC==1){
        mHPrev.setAttribute("disabled","disabled");
        mHNext.removeAttribute("disabled");

        hSIndex.innerHTML = "01";
        countTo(1989, 1999, ".year-1");
        countTo(1993, 2003, ".year-2");
        owlCar1.style.display = "block";
    }else{owlCar1.style.display="none";}

    if(mC==2){
        mHNext.removeAttribute("disabled");
        hSIndex.innerHTML = "02";
        countTo(1999, 2004, ".year-1");
        countTo(2004, 2008, ".year-2");
        owlCar2.style.display = "block";
    }else{owlCar2.style.display="none";}

    if(mC==3){
        mHNext.removeAttribute("disabled");
        hSIndex.innerHTML = "03";
        countTo(2004, 2009, ".year-1");
        countTo(2009, 2013, ".year-2");
        owlCar3.style.display = "block";
    }else{owlCar3.style.display="none";}

    if(mC==4){
        mHPrev.removeAttribute("disabled");
        hSIndex.innerHTML = "04";
        countTo(2013, 2018, ".year-1");
        countTo(2018, 2022, ".year-2");
        owlCar4.style.display = "block";
    }else{owlCar4.style.display="none";}

    if(mC<1){
        mHPrev.setAttribute("disabled","disabled");
        mHNext.removeAttribute("disabled");
    mC=1;
}
});