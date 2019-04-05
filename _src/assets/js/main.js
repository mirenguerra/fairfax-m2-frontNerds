'use strict';

// NAME INPUT
const setName = document.querySelector('#name');
const cardUserName = document.querySelector('.card-user__name');

function getUserName(){
    const userName = setName.value;
    cardUserName.innerHTML = userName;  
    if (userName ===''){
        cardUserName.innerHTML = 'User name';
    }
}

setName.addEventListener('keyup', getUserName);

// JOB INPUT
const setJob = document.querySelector('#job');
const cardUserJob = document.querySelector('.card-user__position');

function getUserJob(){
    const userJob = setJob.value;
    cardUserJob.innerHTML = userJob;
    if (userJob ===''){
        cardUserJob.innerHTML = 'User job';
    }
}

setJob.addEventListener('keyup', getUserJob);

//Email
const inputEmailEl = document.querySelector('#email');
let linkEmailEl = document.querySelector('.email');


function handlerEmail(event){
    const inputValue = inputEmailEl.value;
    linkEmailEl.href = `mailto:${inputValue}`;
    console.log(linkEmailEl);
}


inputEmailEl.addEventListener('keyup', handlerEmail);

//PHONE

const inputTel = document.getElementById('phone');
const linkTel = document.getElementById('phone-link');
function changeLinkTel(){
    linkTel.setAttribute('href','tel: +34'+ inputTel.value);
}

inputTel.addEventListener('keyup',changeLinkTel);

// GITHUB
const setGitHub = document.querySelector('#gitHub');
const cardUserGitHub = document.querySelector('#gitHub-link')
const iconStyle = document.querySelector('#gitHubEl')

function getGitHub(){
    const userGitHub = setGitHub.value;
    cardUserGitHub.href =`https://github.com/${userGitHub}`;
    if (userGitHub !== ''){
        iconStyle.classList.add('card__item-list-default');
    }
}

setGitHub.addEventListener('keyup', getGitHub);

// COLLAPSABLE SECTIONS

//SECTION DESIGN

const arrowIconDesign = document.querySelector('#arrow-design');
const sectionDesign = document.querySelector('#section-design');
const arrowButtonDesign =document.querySelector('#ButtonDesign');
function hideDesignSection(){
    sectionDesign.classList.toggle('design');
    sectionDesign.classList.toggle('hidden');
    arrowIconDesign.classList.toggle('fa-chevron-up');
    arrowIconDesign.classList.toggle('fa-chevron-down');
}

{/* <i class="fas fa-chevron-up"></i> */}

arrowButtonDesign.addEventListener('click',hideDesignSection);

//SECTION FILL THE GAP
const arrowIconFill = document.querySelector('#arrow-fillTheGap');
const sectionFill = document.querySelector('.fillTheGap');
const arrowButtonFill =document.querySelector('#ButtonFill');


function hideFillSection(){

    sectionFill.classList.toggle('hidden');
    arrowIconFill.classList.toggle('fa-chevron-up');
    arrowIconFill.classList.toggle('fa-chevron-down');
}

arrowButtonFill.addEventListener('click',hideFillSection);

//SECTION SHARE

const arrowIconShare = document.querySelector('#arrow-share');
const sectionShare = document.querySelector('#section-share');
const arrowButtonShare =document.querySelector('#ButtonShare');

function hideShareSection(){

    sectionShare.classList.toggle('hidden');
    arrowIconShare.classList.toggle('fa-chevron-up');
    arrowIconShare.classList.toggle('fa-chevron-down');
}


arrowButtonShare.addEventListener('click',hideShareSection);