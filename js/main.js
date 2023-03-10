'use strict';

const images= ['01.webp','02.webp', '03.webp', '04.webp', '05.webp'];
const carousel= document.querySelector('.slider');
let divContent= '';
let move= 0;

for(let i = 0; i < images.length; i++){
    divContent += `<div class="item"><img src="img/${images[i]}" alt="img"></div>`;
}

carousel.innerHTML += divContent;
document.querySelector('.item').classList.add('show');

const prev= document.querySelector('.up');
const next= document.querySelector('.down');
const items= document.querySelectorAll('.item');
const lumus= document.querySelectorAll('.little_pic')

prev.addEventListener('click', function(){
    
    items[move].classList.remove('show');
    lumus[move].classList.remove('light');

    if(move > 0){
         move--;
        
    }else{
        move = items.length - 1;
    }

    items[move].classList.add('show');
    lumus[move].classList.add('light');
});

next.addEventListener('click', function(){
    items[move].classList.remove('show');
    lumus[move].classList.remove('light');

    if(move < items.length - 1){
        move++;
        
    }else {
        move = 0;
    }

    items[move].classList.add('show');
    lumus[move].classList.add('light');
});
