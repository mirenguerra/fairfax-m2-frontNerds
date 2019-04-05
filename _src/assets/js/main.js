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
//   console.log(linkEmailEl);
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
const cardUserGitHub = document.querySelector('#gitHub-link');
const iconStyle = document.querySelector('#gitHubEl');

function getGitHub(){
  const userGitHub = setGitHub.value;
  cardUserGitHub.href =`https://github.com/${userGitHub}`;
  if (userGitHub !== ''){
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

//PALETTES COLORS
const userName = document.querySelector('.card-user');
const inputRed = document.getElementById('palette--red-orange');
const inputGrey = document.getElementById('palette--blue-gray');
const inputGreen = document.getElementById ('palette--blue-green');
const contactList = document.querySelector('.card-sm__container');

function changePaletteRed(){
  userName.classList.remove('gray-palette','green-palette','borderLeftGreen','borderLeftGray');
  userName.classList.add('red-palette', 'borderLeftRed');
  contactList.classList.remove('gray-palette','green-palette');
  contactList.classList.add('red-palette');
}

function  changePaletteGray(){
  userName.classList.remove('green-palette','red-palette','borderLeftGreen','borderLeftRed');
  userName.classList.add('gray-palette','borderLeftGray');
  contactList.classList.remove('green-palette','red-palette');
  contactList.classList.add('gray-palette');
}

function changePaletteGreen(){
  userName.classList.remove('gray-palette','red-palette','borderLeftGray','borderLeftRed');
  userName.classList.add('green-palette', 'borderLeftGreen');
  contactList.classList.remove('gray-palette','red-palette');
  contactList.classList.add('green-palette');
}

inputRed.addEventListener('click', changePaletteRed);
inputGrey.addEventListener('click', changePaletteGray);
inputGreen.addEventListener('click', changePaletteGreen);
