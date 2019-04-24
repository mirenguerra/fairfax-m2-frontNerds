

// NAME INPUT
const setName = document.querySelector('#name');
const cardUserName = document.querySelector('.card-user__name');

function getUserName() {
  const userName = setName.value;
  userInfo.name = userName;//llamo al nombre del objeto y a su elemento para sustituirlo en el object
  cardUserName.innerHTML = userName;
  if (userName === '') {
    cardUserName.innerHTML = 'User name';
  }
  saveDataLs()
  console.log(userInfo);
}

setName.addEventListener('keyup', getUserName);

// JOB INPUT
const setJob = document.querySelector('#job');
const cardUserJob = document.querySelector('.card-user__position');

function getUserJob() {
  const userJob = setJob.value;
  userInfo.job = userJob;
  cardUserJob.innerHTML = userJob;
  if (userJob === '') {
    cardUserJob.innerHTML = 'User job';
    
  }

 saveDataLs()
}

setJob.addEventListener('keyup', getUserJob);

//Email
const inputEmailEl = document.querySelector('#email');
let linkEmailEl = document.querySelector('.email');


function handlerEmail() {
  const inputValue = inputEmailEl.value;
  userInfo.email = inputValue;
  linkEmailEl.href = `mailto:${inputValue}`;
    console.log(linkEmailEl);
    saveDataLs();
}

inputEmailEl.addEventListener('keyup', handlerEmail);

//PHONE

const inputTel = document.getElementById('phone');
const linkTel = document.getElementById('phone-link');
function changeLinkTel() {
linkTel.setAttribute('href', 'tel: +34' + inputTel.value);
const telValue = inputTel.value;
userInfo.phone = telValue;
saveDataLs();
}

inputTel.addEventListener('keyup', changeLinkTel);

// GITHUB
const setGitHub = document.querySelector('#gitHub');
const cardUserGitHub = document.querySelector('#gitHub-link');
const iconStyle = document.querySelector('#gitHubEl');

function getGitHub() {
  const userGitHub = setGitHub.value;
  userInfo.github = userGitHub;
 
  cardUserGitHub.setAttribute('target','_blank') ;  
  if (userGitHub !== '') {
    iconStyle.classList.add('card__item-list-default');
    cardUserGitHub.href = `https://github.com/${userGitHub}`;
  }
  else{
    cardUserGitHub.href ='';
  }
  console.log(userGitHub);
  saveDataLs();
}

setGitHub.addEventListener('keyup', getGitHub);

// USER LINKEDIN

const inputLnkdIn = document.querySelector('#linkedin');
const linkLnkdIn = document.querySelector('.card__link-linkedin');

inputLnkdIn.addEventListener('keyup', handleInputKeyup);

function handleInputKeyup() {
  const linkedinInput = inputLnkdIn;
  const inputValueLnkdIn = linkedinInput.value;
  userInfo.linkedin = inputValueLnkdIn;
  linkLnkdIn.href = inputValueLnkdIn;
  saveDataLs();
}
