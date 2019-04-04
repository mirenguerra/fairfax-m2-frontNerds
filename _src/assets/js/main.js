'use strict';

const inputTel = document.getElementById('phone');
const linkTel = document.getElementById('phone-link');

console.log(name);

function changeLinkTel(){
    
    linkTel.setAttribute('href','tel: +34'+ inputTel.value);
    
    console.log(linkTel.href);
}



inputTel.addEventListener('keyup',changeLinkTel);

