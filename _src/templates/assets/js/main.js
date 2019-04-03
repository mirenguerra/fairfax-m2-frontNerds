'use strict';

const inputEmailEl = document.querySelector('#email');
const linkEmailEl = href.querySelector('.email');
console.log('holi');

function handlerEmail(event){
    const inputValue = inputEmailEl.nodeValue;
    linkEmailEl.innerHTML = inputValue;
}


inputEmailEl.addEventListener('keyup', handlerEmail );
