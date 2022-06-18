let circles = document.querySelectorAll('.circle');
let rect = document.querySelector('.rect');

circles.forEach((c, index)=> {


    c.addEventListener('click', () => {

        if(rect.style.transform){
            rect.style.transform = '';
        }else{
             rect.style.transform = `rotate(${-90*index}deg)`;
        }


       
    });
});






 