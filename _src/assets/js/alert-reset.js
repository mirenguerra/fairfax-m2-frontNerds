//Resert
const resertEl = document.querySelector('.reset__btn');
const buttonResetYEl = document.querySelector('.btn-resetY');
const buttonResetNEl = document.querySelector('.btn-resetN');
const containerAlertEl = document.querySelector('.alert');


function alertReset(){
  containerAlertEl.classList.add('alert-delete');
}

function keepInfo(){
  containerAlertEl.classList.remove('alert-delete');
}

function handlerButtonResetClick(){
  //first the handlerButtonResetClick and then we have to hide the pop-up removing alert-delete

  containerAlertEl.classList.remove('alert-delete');
}
resertEl.addEventListener('click', alertReset);
buttonResetYEl.addEventListener('click', handlerButtonResetClick);
buttonResetNEl.addEventListener('click', keepInfo);