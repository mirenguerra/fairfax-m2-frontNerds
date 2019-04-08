'use strict';

// NAME INPUT
const setName = document.querySelector('#name');
const cardUserName = document.querySelector('.card-user__name');

function getUserName() {
    const userName = setName.value;
    cardUserName.innerHTML = userName;
    if (userName === '') {
        cardUserName.innerHTML = 'User name';
    }
}

setName.addEventListener('keyup', getUserName);

// JOB INPUT
const setJob = document.querySelector('#job');
const cardUserJob = document.querySelector('.card-user__position');

function getUserJob() {
    const userJob = setJob.value;
    cardUserJob.innerHTML = userJob;
    if (userJob === '') {
        cardUserJob.innerHTML = 'User job';
    }
}

setJob.addEventListener('keyup', getUserJob);

//Email
const inputEmailEl = document.querySelector('#email');
let linkEmailEl = document.querySelector('.email');


function handlerEmail(event) {
    const inputValue = inputEmailEl.value;
    linkEmailEl.href = `mailto:${inputValue}`;
    //   console.log(linkEmailEl);
}

inputEmailEl.addEventListener('keyup', handlerEmail);

//PHONE

const inputTel = document.getElementById('phone');
const linkTel = document.getElementById('phone-link');
function changeLinkTel() {
    linkTel.setAttribute('href', 'tel: +34' + inputTel.value);
}

inputTel.addEventListener('keyup', changeLinkTel);

// GITHUB
const setGitHub = document.querySelector('#gitHub');
const cardUserGitHub = document.querySelector('#gitHub-link');
const iconStyle = document.querySelector('#gitHubEl');

<<<<<<< HEAD
function getGitHub(){
  const userGitHub = setGitHub.value;
  cardUserGitHub.href =`https://github.com/${userGitHub}`;
  // if (userGitHub !== ''){
  //   iconStyle.classList.add('card__item-list-default');
  // }
=======
function getGitHub() {
    const userGitHub = setGitHub.value;
    cardUserGitHub.href = `https://github.com/${userGitHub}`;
    if (userGitHub !== '') {
        iconStyle.classList.add('card__item-list-default');
    }
>>>>>>> b6fcff5f5f9c95ef5dbc882d2c53cb71be54e003
}

setGitHub.addEventListener('keyup', getGitHub);

// USER LINKEDIN

const inputLnkdIn = document.querySelector('#linkedin');
const linkLnkdIn = document.querySelector('.card__link-linkedin');

inputLnkdIn.addEventListener('keyup', handleInputKeyup);

function handleInputKeyup(event) {
    const linkedinInput = inputLnkdIn;
    const inputValueLnkdIn = linkedinInput.value;
    linkLnkdIn.href = inputValueLnkdIn;
}


// COLLAPSABLE SECTIONS

//SECTION DESIGN

const arrowIconDesign = document.querySelector('#arrow-design');
const sectionDesign = document.querySelector('#section-design');
const arrowButtonDesign = document.querySelector('#ButtonDesign');
function hideDesignSection() {
    // sectionDesign.classList.toggle('design');
    sectionDesign.classList.toggle('hidden');
    arrowIconDesign.classList.toggle('fa-chevron-up');
    arrowIconDesign.classList.toggle('fa-chevron-down');
    if (!sectionFill.classList.contains('hidden')) {
        sectionFill.classList.add('hidden');
        arrowIconFill.classList.toggle('fa-chevron-up');
        arrowIconFill.classList.toggle('fa-chevron-down');
    }
    else if (!sectionShare.classList.contains('hidden')) {
        sectionShare.classList.add('hidden');
        arrowIconShare.classList.toggle('fa-chevron-up');
        arrowIconShare.classList.toggle('fa-chevron-down');

    }
}

{/* <i class="fas fa-chevron-up"></i> */ }

arrowButtonDesign.addEventListener('click', hideDesignSection);

//SECTION FILL THE GAP
const arrowIconFill = document.querySelector('#arrow-fillTheGap');
const sectionFill = document.querySelector('.fillTheGap');
const arrowButtonFill = document.querySelector('#ButtonFill');


function hideFillSection() {

    sectionFill.classList.toggle('hidden');
    arrowIconFill.classList.toggle('fa-chevron-up');
    arrowIconFill.classList.toggle('fa-chevron-down');
    if (!sectionDesign.classList.contains('hidden')) {
        sectionDesign.classList.add('hidden');
        arrowIconDesign.classList.toggle('fa-chevron-up');
        arrowIconDesign.classList.toggle('fa-chevron-down');
    }
    else if (!sectionShare.classList.contains('hidden')) {
        sectionShare.classList.add('hidden');
        arrowIconShare.classList.toggle('fa-chevron-up');
        arrowIconShare.classList.toggle('fa-chevron-down');

    }

}

arrowButtonFill.addEventListener('click', hideFillSection);

//SECTION SHARE

const arrowIconShare = document.querySelector('#arrow-share');
const sectionShare = document.querySelector('#section-share');
const arrowButtonShare = document.querySelector('#ButtonShare');

function hideShareSection() {

    sectionShare.classList.toggle('hidden');
    arrowIconShare.classList.toggle('fa-chevron-up');
    arrowIconShare.classList.toggle('fa-chevron-down');
    if (!sectionDesign.classList.contains('hidden')) {
        sectionDesign.classList.add('hidden');
        arrowIconDesign.classList.toggle('fa-chevron-up');
        arrowIconDesign.classList.toggle('fa-chevron-down');
    }
    else if (!sectionFill.classList.contains('hidden')) {
        sectionFill.classList.add('hidden');
        arrowIconFill.classList.toggle('fa-chevron-up');
        arrowIconFill.classList.toggle('fa-chevron-down');
    }
}
arrowButtonShare.addEventListener('click', hideShareSection);


//CHANGE COLOR PALETTE
//PALETTES COLORS
const userName = document.querySelector('.card-user');
const inputRed = document.getElementById('palette--red-orange');
const inputGrey = document.getElementById('palette--blue-gray');
const inputGreen = document.getElementById('palette--blue-green');
const contactList = document.querySelector('.card-sm__container');


function changePaletteRed() {
    userName.classList.remove('gray-palette', 'green-palette', 'borderLeftGreen', 'borderLeftGray');
    userName.classList.add('red-palette', 'borderLeftRed');
    contactList.classList.remove('gray-palette', 'green-palette');
    contactList.classList.add('red-palette');
}

function changePaletteGray() {
    userName.classList.remove('green-palette', 'red-palette', 'borderLeftGreen', 'borderLeftRed');
    userName.classList.add('gray-palette', 'borderLeftGray');
    contactList.classList.remove('green-palette', 'red-palette');
    contactList.classList.add('gray-palette');
}

function changePaletteGreen() {
    userName.classList.remove('gray-palette', 'red-palette', 'borderLeftGray', 'borderLeftRed');
    userName.classList.add('green-palette', 'borderLeftGreen');
    contactList.classList.remove('gray-palette', 'red-palette');
    contactList.classList.add('green-palette');
}


inputRed.addEventListener('click', changePaletteRed);
inputGrey.addEventListener('click', changePaletteGray);
inputGreen.addEventListener('click', changePaletteGreen);



