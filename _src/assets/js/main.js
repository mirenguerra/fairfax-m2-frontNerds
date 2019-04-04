'use strict';

const inputEmailEl = document.querySelector('#email');
let linkEmailEl = document.querySelector('.email');


function handlerEmail(event){
    const inputValue = inputEmailEl.value;
    linkEmailEl.href = `mailto:${inputValue}`;
    console.log(linkEmailEl);
}


inputEmailEl.addEventListener('keyup', handlerEmail);