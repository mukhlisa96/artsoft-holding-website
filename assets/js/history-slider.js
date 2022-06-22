// indicators rotation slider

// let circles = document.querySelectorAll('.history-r-circle');
let rect2 = document.querySelector('.rect-history');
// let pos = 1;


// circles.forEach((c, index)=> {
//     c.addEventListener('click', () => {
//         if(rect2.style.transform){
//             rect2.style.transform = '';
//         }else{
//             if(index == 0)rect2.style.transform = `rotate(${90*(index+1)}deg)`;
//             else if(index == 1)rect2.style.transform = `rotate(${90*(index+1)}deg)`;
//             else if(index == 2)rect2.style.transform = `rotate(${90*(index+1)}deg)`;
//             else if(index == 3)rect2.style.transform = `rotate(${90*(index+1)}deg)`;
//         }
//     });
// });
// indicators rotation slider

function countTo(fromInput, toInput){
    let from = fromInput;
    let to = toInput;

    let step = to > from ? 1 : -1;
    let interval = 10;

    if(from==to){
        document.querySelector('#output').textContent = from;
        return;
    }

    let counter = setInterval(function(){
        from += step;
        document.querySelector('#output').textContent = from;

        if(from == to){
            clearInterval(counter);
        }
    }, interval);
}


hCircleNext = document.querySelector('.h-next');
hCirclePrev = document.querySelector('.h-prev');
let hDot1 = document.querySelector(".h-1");
let hDot2 = document.querySelector(".h-2");
let hDot3 = document.querySelector(".h-3");
let hDot4 = document.querySelector(".h-4");
let hDot5 = document.querySelector(".h-5");
let hDot6 = document.querySelector(".h-6");

currentCircleSlideIndex = 1;
reverseRotate = 1;


var activeDotIndex = document.querySelector(".history-index");

hCircleNext.addEventListener('click', () => {
hCirclePrev.removeAttribute("disabled");
    // if(currentCircleSlideIndex<=4){ 
        // console.log("NEXTreverseR"+reverseRotate);
        // console.log("NEXTRot"+currentCircleSlideIndex);
        rect2.style.transform = `rotate(${currentCircleSlideIndex*90}deg)`;
        currentCircleSlideIndex++;
        reverseRotate--;


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


if(Math.round(hDoot1.x)==551 && Math.round(hDoot1.y)==185){
    hDot1.classList.add('active-dot');
    // dotLabel.innerHTML = "Молочные продукты";
    activeDotIndex.innerHTML = "01";
    countTo(10, 23);
}else{hDot1.classList.remove('active-dot');}


if(Math.round(hDoot2.x)==566 && Math.round(hDoot2.y)==170){
    hDot2.classList.add('active-dot');
    // dotLabel.innerHTML = "Мясопереработка";
    activeDotIndex.innerHTML = "02";
    countTo(5, 12);
}else{hDot2.classList.remove('active-dot');}


if(Math.round(hDoot3.x)==551 && Math.round(hDoot3.y)==185){
    hDot3.classList.add('active-dot');
    // dotLabel.innerHTML = "Ткани";
    activeDotIndex.innerHTML = "03";
    countTo(10, 20);
}else{hDot3.classList.remove('active-dot');}


if(Math.round(hDoot4.x)==566 && Math.round(hDoot4.y)==170){
    hDot4.classList.add('active-dot');
    // dotLabel.innerHTML = "Назиания продукта 4";
    activeDotIndex.innerHTML = "04";
    hCircleNext.setAttribute("disabled","disabled");
    countTo(25,39);
}else{hDot4.classList.remove('active-dot');}

// if(Math.round(hDoot5.x)==559 && Math.round(hDoot5.y)==178){
//     hDot4.classList.add('active-dot');
//     // dotLabel.innerHTML = "Назиания продукта 4";
//     activeDotIndex.innerHTML = "05";
//     hCircleNext.setAttribute("disabled","disabled");
//     countTo(25,39);
// }else{hDot4.classList.remove('active-dot');}

// if(Math.round(hDoot6.x)==841 && Math.round(hDoot6.y)==178){
//     hDot4.classList.add('active-dot');
//     // dotLabel.innerHTML = "Назиания продукта 4";
//     activeDotIndex.innerHTML = "06";
//     hCircleNext.setAttribute("disabled","disabled");
//     countTo(25,39);
// }else{hDot4.classList.remove('active-dot');}


    // }else{ 
        
        // hCircleNext.disable = true;
        // currentCircleSlideIndex=1;
    // }
    
});

hCirclePrev.addEventListener('click', () => {
    hCircleNext.removeAttribute("disabled");
     // if(reverseRotate<=4 && reverseRotate >=1){ 
        // console.log("PrevreverseR"+reverseRotate);
        // console.log("PrevRot"+currentCircleSlideIndex);

        rect2.style.transform = `rotate(${reverseRotate* -90}deg)`;
        rRow.style.transform = `rotate(90deg);`
        currentCircleSlideIndex--;
        reverseRotate++;


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

if(Math.round(hDoot1.x)==849 && Math.round(hDoot1.y)==453){
    hDot1.classList.add('active-dot');
    // dotLabel.innerHTML = "Молочные продукты";
    activeDotIndex.innerHTML = "01";
    hCirclePrev.setAttribute("disabled","disabled");
    countTo(10, 23);
}else{hDot1.classList.remove('active-dot');}


if(Math.round(hDoot2.x)==834 && Math.round(hDoot2.y)==468){
    hDot2.classList.add('active-dot');
    // dotLabel.innerHTML = "Мясопереработка";
    activeDotIndex.innerHTML = "02";
    countTo(5, 12);
}else{hDot2.classList.remove('active-dot');}


if(Math.round(hDoot3.x)==849 && Math.round(hDoot3.y)==453){
    hDot3.classList.add('active-dot');
    // dotLabel.innerHTML = "Ткани";
    activeDotIndex.innerHTML = "03";
    countTo(10, 20);
}else{hDot3.classList.remove('active-dot');}


if(Math.round(hDoot4.x)==834 && Math.round(hDoot4.y)==468){
    hDot4.classList.add('active-dot');
    // dotLabel.innerHTML = "Назиания продукта 4";
    activeDotIndex.innerHTML = "04";
    countTo(25, 39);
}else{hDot4.classList.remove('active-dot');}

// if(Math.round(hDoot5.x)==912 && Math.round(hDoot5.y)==527){
//     hDot4.classList.add('active-dot');
//     // dotLabel.innerHTML = "Назиания продукта 4";
//     activeDotIndex.innerHTML = "05";
//     countTo(25, 39);
// }else{hDot4.classList.remove('active-dot');}

// if(Math.round(hDoot6.x)==912 && Math.round(hDoot6.y)==527){
//     hDot4.classList.add('active-dot');
//     // dotLabel.innerHTML = "Назиания продукта 4";
//     activeDotIndex.innerHTML = "06";
//     countTo(25, 39);
// }else{hDot4.classList.remove('active-dot');}


    // }else{ 
        //  hCirclePrev.disable = true;
        // currentCircleSlideIndex=1;
    // }
});


