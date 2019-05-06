/* eslint-disable strict */
const buttonResetEl = document.querySelector('.reset__btn');
const selectEl = document.querySelector('#palette--blue-green');
const formEl = document.querySelectorAll('.fillTheGap-input');
const userNameEl = document.querySelector('.card-user__name');
const userJobEl = document.querySelector('.card-user__position');
const buttonResetYEl = document.querySelector('.btn-resetY');
const buttonResetNEl = document.querySelector('.btn-resetN');
const containerAlertEl = document.querySelector('.alert');
const alertReset = () => {
  containerAlertEl.classList.add('alert-delete');
};
buttonResetEl.addEventListener('click', alertReset);
const keepInfo = () => {
  containerAlertEl.classList.remove('alert-delete');
};
buttonResetNEl.addEventListener('click', keepInfo);
const resetInputs = () => {
  for (let i = 0; i < formEl.length; i++) {
    formEl[i].value = '';
  }
};
const resetCard = () => {
  userNameEl.innerHTML = 'User name';
  userJobEl.innerHTML = 'User job';
};
const resetSN = () => {
  const arrSN = document.querySelectorAll('.card__item-list');
  for (let i = 0; i < arrSN.length; i++) {
    arrSN[i].classList.remove('card__item-list');
    arrSN[i].classList.add('card__item-list-no-border');
  }
};
const resetColor = () => {
  selectEl.checked = true;
  userName.classList.remove('gray-palette', 'red-palette', 'borderLeftGray', 'borderLeftRed');
  userName.classList.add('green-palette', 'borderLeftGreen');
};
const resetPhotos = () => {
  profileImage.style.backgroundImage = 'url("assets/images/darth-vader.jpg")';
  profilePreview.style.backgroundImage = `none`;
};
const handlerButtonResetClick = () => {
  resetInputs();
  resetCard();
  resetSN();
  resetColor();
  resetPhotos();
  containerAlertEl.classList.remove('alert-delete');
  localStorage.removeItem('userInfo');
};
buttonResetYEl.addEventListener('click', handlerButtonResetClick);
