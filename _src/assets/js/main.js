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

function getGitHub() {
  const userGitHub = setGitHub.value;
  cardUserGitHub.href = `https://github.com/${userGitHub}`;
  if (userGitHub !== '') {
    iconStyle.classList.add('card__item-list-default');
  }
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
  sectionDesign.classList.toggle('design');
  sectionDesign.classList.toggle('hidden');
  arrowIconDesign.classList.toggle('fa-chevron-up');
  arrowIconDesign.classList.toggle('fa-chevron-down');
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


//FUNCTIONS CIRCLES ON-OFF

//EMAIL

function emailCircle(){
  const mailFill = document.getElementById('email-li');//mainpreview
  const mailInputContent = document.getElementById('email');//fillgap

  if(mailInputContent.value === ''){
    mailFill.classList.add('card__item-list-no-border');
    mailFill.classList.remove('card__item-list');
  }else {
    mailFill.classList.remove('card__item-list-no-border');
    mailFill.classList.add('card__item-list');
  }

}
const mailInput = document.getElementById('email');
mailInput.addEventListener('keyup',emailCircle);

//PHONE

function phoneCircle(){
  const phoneFill = document.getElementById('phone-li');
  const phoneInputContent = document.getElementById('phone');

  if(phoneInputContent.value === ''){
    phoneFill.classList.add('card__item-list-no-border');
    phoneFill.classList.remove('card__item-list');
  }else {
    phoneFill.classList.remove('card__item-list-no-border');
    phoneFill.classList.add('card__item-list');
  }
}

const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('keyup', phoneCircle);

//LINKEDIN

function linkedinCircle(){
  const linkedinFill = document.getElementById('linkedin-li');
  const linkedinInputContent = document.getElementById('linkedin');

  if(linkedinInputContent.value === ''){
    linkedinFill.classList.add('card__item-list-no-border');
    linkedinFill.classList.remove('card__item-list');
  }else {
    linkedinFill.classList.remove('card__item-list-no-border');
    linkedinFill.classList.add('card__item-list');
  }
}

const linkedinInput = document.getElementById('linkedin');
linkedinInput.addEventListener('keyup', linkedinCircle);

//GITHUB

function githubCircle(){
  const githubFill =document.getElementById('githubEl');
  const githubInputContent = document.getElementById('gitHub');

  if(githubInputContent.value ===''){
    githubFill.classList.add('card__item-list-no-border');
    githubFill.classList.remove('card__item-list');
  }else {
    githubFill.classList.remove('card__item-list-no-border');
    githubFill.classList.add('card__item-list');
  }
}

const githubInput =document.getElementById ('gitHub');
githubInput.addEventListener('keyup', githubCircle);