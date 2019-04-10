'use strict';

//FUNCTIONS CIRCLES ON-OFF

//EMAIL CIRCLE

function emailCircle() {
    const mailFill = document.getElementById('email-li');//mainpreview
    const mailInputContent = document.getElementById('email');//fillgap

    if (mailInputContent.value === '') {
        mailFill.classList.add('card__item-list-no-border');
        mailFill.classList.remove('card__item-list');
    } else {
        mailFill.classList.remove('card__item-list-no-border');
        mailFill.classList.add('card__item-list');
    }

}
const mailInput = document.getElementById('email');
mailInput.addEventListener('keyup', emailCircle);

//PHONE CIRCLE

function phoneCircle() {
    const phoneFill = document.getElementById('phone-li');
    const phoneInputContent = document.getElementById('phone');

    if (phoneInputContent.value === '') {
        phoneFill.classList.add('card__item-list-no-border');
        phoneFill.classList.remove('card__item-list');
    } else {
        phoneFill.classList.remove('card__item-list-no-border');
        phoneFill.classList.add('card__item-list');
    }
}

const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('keyup', phoneCircle);

//LINKEDIN CIRCLE

function linkedinCircle() {
    const linkedinFill = document.getElementById('linkedin-li');
    const linkedinInputContent = document.getElementById('linkedin');

    if (linkedinInputContent.value === '') {
        linkedinFill.classList.add('card__item-list-no-border');
        linkedinFill.classList.remove('card__item-list');
    } else {
        linkedinFill.classList.remove('card__item-list-no-border');
        linkedinFill.classList.add('card__item-list');
    }
}

const linkedinInput = document.getElementById('linkedin');
linkedinInput.addEventListener('keyup', linkedinCircle);

//GITHUB CIRCLE

function githubCircle() {
    const githubFill = document.getElementById('gitHubEl');
    const githubInputContent = document.getElementById('gitHub');

    if (githubInputContent.value === '') {
        githubFill.classList.add('card__item-list-no-border');
        githubFill.classList.remove('card__item-list');
    } else {
        githubFill.classList.remove('card__item-list-no-border');
        githubFill.classList.add('card__item-list');
    }
}

const githubInput = document.getElementById('gitHub');
githubInput.addEventListener('keyup', githubCircle);