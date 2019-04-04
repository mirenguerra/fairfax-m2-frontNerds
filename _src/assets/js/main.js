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

// USER LINKEDIN

const inputLnkdIn = document.querySelector('#linkedin');
const linkLnkdIn = document.querySelector('.card__link-linkedin');

inputLnkdIn.addEventListener('keyup', handleInputKeyup);

function handleInputKeyup(event) {
    const linkedinInput = inputLnkdIn;
    const inputValueLnkdIn = linkedinInput.value;
    linkLnkdIn.href = inputValueLnkdIn;
        
}

