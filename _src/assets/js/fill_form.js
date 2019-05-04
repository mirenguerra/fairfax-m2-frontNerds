
function fillUserInfoObject(key, value) {
  userInfo[key] = value;
}

//REFACTORING 🚀

// NAME & JOB INPUTS
function fillNameAndJob (key) {
  const inputEl = document.querySelector(`#${key}`);
  const cardUserEl = document.querySelector(`.card-user__${key}`);
  const myKey = key;  
  const handlerUserKeyup = event => {
    const userInfoToFill = inputEl.value;
    cardUserEl.innerHTML = userInfoToFill || `User ${myKey}`;
    
    const key = event.currentTarget.name;
    fillUserInfoObject(key, userInfoToFill);
    saveDataLs();
  }
  
  inputEl.addEventListener('keyup', handlerUserKeyup);
}

fillNameAndJob('name');
fillNameAndJob('job');

// // EMAIL INPUT
// const inputEmailEl = document.querySelector('#email');
// let linkEmailEl = document.querySelector('.email');

// const handlerEmailKeyup = event => {
//   const userInfoToFill = inputEmailEl.value;
//   linkEmailEl.href = `mailto:${userInfoToFill}` || '';

//   const key = event.currentTarget.name;
//   const value =  userInfoToFill;
//   fillUserInfoObject(key, value);
//   saveDataLs();
// }
// inputEmailEl.addEventListener('keyup', handlerEmailKeyup);

// // PHONE INPUT
// const inputPhoneEl = document.querySelector('#phone');
// const linkPhoneEl = document.querySelector('#phone-link');

// const handlerPhoneKeyup = event => {
//   const userInfoToFill = inputPhoneEl.value;

//   linkPhoneEl.setAttribute('href', 'tel: +34' + userInfoToFill);
//   userInfo.phone = telValue;
//   saveDataLs();
// }
// inputPhoneEl.addEventListener('keyup', handlerPhoneKeyup);

// GITHUB
const inputGitHubEl = document.querySelector('#gitHub');
const cardUserGitHub = document.querySelector('#gitHub-link');
const iconStyle = document.querySelector('#gitHubEl');

const getGitHub = () => {
  const userGitHub = inputGitHubEl.value;
  userInfo.github = userGitHub;
  cardUserGitHub.setAttribute('target', '_blank');
  
  userGitHub !== '' ? (iconStyle.classList.add('card__item-list-default'), cardUserGitHub.href = `https://github.com/${userGitHub}`) : cardUserGitHub.href = '';
  saveDataLs(); 
}
inputGitHubEl.addEventListener('keyup', getGitHub);

// USER LINKEDIN
const inputLinkedinEl = document.querySelector('#linkedin');
const cardUserLinkedinEl = document.querySelector('.card__link-linkedin');

const handleInputKeyup = () => {
  const linkedinInput = inputLinkedinEl;
  const inputValueLnkdIn = linkedinInput.value;

  userInfo.linkedin = inputValueLnkdIn;
  cardUserLinkedinEl.href = inputValueLnkdIn;
  saveDataLs();
}
inputLinkedinEl.addEventListener('keyup', handleInputKeyup);