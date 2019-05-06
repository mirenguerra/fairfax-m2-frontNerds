//Function that store user info into the object for LS and Preview functionalities
const fillUserInfoObject = (key, value) => {
  userInfo[key] = value;
};

//REFACTORING 🚀
const handlerUserKeyup = event => {
  const currentInput = event.currentTarget;
  const userInfoToFill = currentInput.value;
  const myKey = currentInput.getAttribute('name');

  const cardUserEl = document.querySelector(`.card-user__${myKey}`);
  const cardUserLinkEl = document.querySelector(`.card__link-${myKey}`);

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

  fillUserInfoObject(myKey, userInfoToFill);
  saveDataLs();
};

const allInputsEls = document.querySelectorAll('.fillTheGap-input');

for (const input of allInputsEls) {
  input.addEventListener('keyup', handlerUserKeyup);
}
