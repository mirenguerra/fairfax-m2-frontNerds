'use strict';

console.log('>> Ready :)');

const inputEmailEl = document.querySelector('#email');
const linkEmailEl = document.querySelector('.email').href;
console.log(linkEmailEl);

function handlerEmail(event){
    const inputValue = inputEmailEl.value;
    linkEmailEl = inputValue;
    console.log(linkEmailEl);
}


inputEmailEl.addEventListener('keyup', handlerEmail );