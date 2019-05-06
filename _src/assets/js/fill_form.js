
//REFACTORING 🚀
const fillAllInputs = inputName => {
  const inputEl = document.querySelector(`#${inputName}`);
  console.log(inputEl);
  const cardUserEl = document.querySelector(`.card-user__${inputName}`);
  const cardUserLinkEl = document.querySelector(`.card__link-${inputName}`);
  const myKey = inputName;
  
  const handlerUserKeyup = event => {
    const userInfoToFill = inputEl.value;
    const element = event.currentTarget;
    if (myKey === 'name' || myKey === 'job') {
      cardUserEl.innerHTML = userInfoToFill || `User ${myKey}`;
    } else if (myKey === 'email') {
      userInfoToFill
      ? cardUserLinkEl.setAttribute('href', `mailto:${userInfoToFill}`)
      : cardUserLinkEl.setAttribute('href', '');
    } else if (myKey === 'phone') {
      userInfoToFill
      ? cardUserLinkEl.setAttribute('href', `tel: +34${userInfoToFill}`)
        : cardUserLinkEl.setAttribute('href', '');
      } else if (myKey === 'github') {
      userInfoToFill
      ? cardUserLinkEl.setAttribute(
            'href',
            `https://github.com/${userInfoToFill}`
          )
        : cardUserLinkEl.setAttribute('href', '');
      } else if (myKey === 'linkedin') {
        userInfoToFill
        ? cardUserLinkEl.setAttribute('href', userInfoToFill)
        : cardUserLinkEl.setAttribute('href', '');
      }
      
      fillUserInfoObject(element, myKey, userInfoToFill);
      saveDataLs();
    };
    inputEl.addEventListener('keyup', handlerUserKeyup);
  };
  
const fillUserInfoObject = (element, key, value) => {
  key = element.name;
  value = userInfoToFill;
  userInfo[key] = value;
};

fillAllInputs('name');
fillAllInputs('job');
fillAllInputs('email');
fillAllInputs('phone');
fillAllInputs('linkedin');
fillAllInputs('github');
