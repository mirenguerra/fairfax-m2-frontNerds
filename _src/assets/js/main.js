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
