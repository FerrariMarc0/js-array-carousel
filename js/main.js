'use strict'

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

prev.addEventListener('click', function(){
    if(0 < move){
        items[move].classList.remove('show');
        move--;
        items[move].classList.add('show');
    }
});
next.addEventListener('click', function(){
    
    if(move < items.length - 1){
        items[move].classList.remove('show');
        move++;
        items[move].classList.add('show');
    }else if(move = 4){
        items[move].classList.remove('show');
        move = 0 - 1;
        move++;
        items[move].classList.add('show');
    }
});
