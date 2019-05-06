// eslint-disable-next-line strict
const buttonResetEl = document.querySelector('.reset__btn');
const userNameEl = document.querySelector('.card-user__name');
const userJobEl = document.querySelector('.card-user__position');
const photoPreviewEl = document.querySelector('.card__picture');
const selectEl = document.querySelector('#palette--blue-green');
const formEl = document.querySelectorAll('.fillTheGap-input');
const miniatureEl = document.querySelector('.profile-miniature');
function resetInputs () {
  for(let i=0;i<formEl.length;i++){
    formEl[i].value = '';
  }
}
const resetCard = () => {
  userNameEl.innerHTML = 'User name';
  userJobEl.innerHTML = 'User job';
};
function resetSN(){
  const arrSN = document.querySelectorAll('.card__item-list');
  for (let i=0; i<arrSN.length;i++){
    arrSN[i].classList.remove('card__item-list');
    arrSN[i].classList.add('card__item-list-no-border');
  }
}
const resetSelect = () => {
  selectEl.checked = true;
};
const resetPhotos = () => {
  miniatureEl.classList.remove('js__profile-preview');
  photoPreviewEl.classList.remove('js__profile-image');
};
function handleButtonResetClick () {
  resetInputs();
  resetCard();
  resetSN();
  resetSelect();
  resetPhotos();
};
buttonResetEl.addEventListener('click', handleButtonResetClick);

