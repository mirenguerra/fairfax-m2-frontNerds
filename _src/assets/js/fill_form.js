function fillUserInfoObject(element, key, value) {
  key = element.name;
  value = userInfoToFill;

  userInfo[key] = value;
}

//REFACTORING 🚀

// NAME & JOB INPUTS
function fillNameAndJob(inputName) {
  const inputEl = document.querySelector(`#${inputName}`);
  const cardUserEl = document.querySelector(`.card-user__${inputName}`);
  const myKey = inputName;

  const handlerUserKeyup = event => {
    const userInfoToFill = inputEl.value;
    cardUserEl.innerHTML = userInfoToFill || `User ${myKey}`;

    const element = event.currentTarget;
    fillUserInfoObject(element, myKey, userInfoToFill);
    saveDataLs();
  };

  inputEl.addEventListener('keyup', handlerUserKeyup);
}
fillNameAndJob('name');
fillNameAndJob('job');

/////////////////////////////////////////

// EMAIL AND PHONE INPUTS
function fillEmailAndPhone(inputName) {
  const inputEl = document.querySelector(`#${inputName}`);
  const cardUserEl = document.querySelector(`.card-user__${inputName}`);
  const myKey = inputName;

  const handlerUserKeyup = event => {
    const userInfoToFill = inputEl.value;
    const element = event.currentTarget;

    if (myKey === 'email') {
      cardUserEl.href = userInfoToFill ? `mailto:${userInfoToFill}` : '#';
    } else if (myKey === 'phone') {
      cardUserEl.href = userInfoToFill ? 'tel: +34' + userInfoToFill : '#';
    }
    fillUserInfoObject(element, myKey, userInfoToFill);
    saveDataLs();
  };
  inputEl.addEventListener('keyup', handlerUserKeyup);
}

fillEmailAndPhone('email');
fillEmailAndPhone('phone');

/////////////////////////////////////////

// EMAIL INPUT
// const inputEmailEl = document.querySelector('#email');
// let cardUserEmailEl = document.querySelector('.email');

// const handlerEmailKeyup = event => {
//   const userInfoToFill = inputEmailEl.value;
//   linkEmailEl.href = `mailto:${userInfoToFill}` || '';

//   const element = event.currentTarget;
//   fillUserInfoObject(element, key, value);
//   saveDataLs();
// };
// inputEmailEl.addEventListener('keyup', handlerEmailKeyup);

// // PHONE INPUT
// const inputPhoneEl = document.querySelector('#phone');
// const linkPhoneEl = document.querySelector('#phone-link');

// const handlerPhoneKeyup = event => {
//   const userInfoToFill = inputPhoneEl.value;
//   linkPhoneEl.setAttribute('href', 'tel: +34' + userInfoToFill);

//   const element = event.currentTarget;
//   fillUserInfoObject(element, key, value);
//   saveDataLs();
// };
// inputPhoneEl.addEventListener('keyup', handlerPhoneKeyup);

// GITHUB
const inputGitHubEl = document.querySelector('#gitHub');
const cardUserGitHub = document.querySelector('#gitHub-link');

const getGitHub = () => {
  const inputGithubValue = inputGitHubEl.value;
  userInfo.github = inputGithubValue;

  inputGithubValue !== ''
    ? (cardUserGitHub.href = `https://github.com/${inputGithubValue}`)
    : (cardUserGitHub.href = '');
  saveDataLs();
};
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
};
inputLinkedinEl.addEventListener('keyup', handleInputKeyup);
