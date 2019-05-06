//Function that store user info into the object for LS and Preview functionalities
const fillUserInfoObject = (key, value) => {
  userInfo[key] = value;
};

const drawInfoPreviewCard = (key, value) => {
  const cardUserEl = document.querySelector(`.card-user__${key}`);
  const cardUserLinkEl = document.querySelector(`.card__link-${key}`);

  if (key === 'name' || key === 'job') {
    cardUserEl.innerHTML = value || `User ${key}`;
  } else if (key === 'email') {
    value
      ? cardUserLinkEl.setAttribute('href', `mailto:${value}`)
      : cardUserLinkEl.setAttribute('href', '');
  } else if (key === 'phone') {
    value
      ? cardUserLinkEl.setAttribute('href', `tel: +34${value}`)
      : cardUserLinkEl.setAttribute('href', '');
  } else if (key === 'github') {
    value
      ? cardUserLinkEl.setAttribute('href', `https://github.com/${value}`)
      : cardUserLinkEl.setAttribute('href', '');
  } else if (key === 'linkedin') {
    value
      ? cardUserLinkEl.setAttribute('href', value)
      : cardUserLinkEl.setAttribute('href', '');
  }
};

//REFACTORING 🚀
const handlerUserKeyup = event => {
  const currentInput = event.currentTarget;
  const userInfoToFill = currentInput.value;
  const myKey = currentInput.getAttribute('name');

  fillUserInfoObject(myKey, userInfoToFill);
  saveDataLs();
  drawInfoPreviewCard(myKey, userInfoToFill);
};

const allInputsEls = document.querySelectorAll('.fillTheGap-input');

for (const input of allInputsEls) {
  input.addEventListener('keyup', handlerUserKeyup);
}
