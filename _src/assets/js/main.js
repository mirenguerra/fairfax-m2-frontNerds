'use strict';

const inputEmailEl = document.querySelector('#email');
let linkEmailEl = document.querySelector('.email').href;


function handlerEmail(event){
    const inputValue = inputEmailEl.value;
    linkEmailEl = inputValue;
    console.log(linkEmailEl);
}


inputEmailEl.addEventListener('keyup', handlerEmail);