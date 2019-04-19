// El boton reset abre un pop-up para borrar o no la información añadida hasta el momento.

//El botón YES resetea el formulario, esto es ,la paleta de colores en default (verdes), borra todos los inputs, la foto miniatura y la foto de preview. También tiene que dejar la tarjeta vacía y los iconos sin rodear.

// Recoge el botón reset
const buttonResetEl = document.querySelector('.reset__btn');
// Recoge el select por defecto(el primero)
const selectEl = document.querySelector('#palette--blue-green');
// Recoge todos los inputs del formulario
const formEl = document.querySelectorAll('.fillTheGap-input');
// Recoge la foto miniatura
const miniatureEl = document.querySelector('.profile-miniature');
// Recoge la foto del preview
const photoPreviewEl = document.querySelector('.card__picture');
// Recoge user name de la tarjeta
const userNameEl = document.querySelector('.card-user__name');
// Recoge user job de la tarjeta
const userJobEl = document.querySelector('.card-user__position');
//Button Yes
const buttonResetYEl = document.querySelector('.btn-resetY');
//Button NO
const buttonResetNEl = document.querySelector('.btn-resetN');
//Pop Up
const containerAlertEl = document.querySelector('.alert');

//Listeners de los botones Reset,No y Yes, respectivamente
buttonResetEl.addEventListener('click', alertReset);
buttonResetNEl.addEventListener('click', keepInfo);
buttonResetYEl.addEventListener('click', handlerButtonResetClick);

//Muestra el pop up con las opciones YES y NO
function alertReset() {
    containerAlertEl.classList.add('alert-delete');
}

//Cuando pulsamos el botón NO el pop-up desaparece
function keepInfo() {
    containerAlertEl.classList.remove('alert-delete');
}

// Función auxiliar que borra los inputs del form
function resetInputs() {
    for (let i = 0; i < formEl.length; i++) {
        formEl[i].value = '';
    }
}

// Función auxiliar que vuelve a escribir el texto por defecto en la tarjeta
function resetCard() {
    userNameEl.innerHTML = 'User name';
    userJobEl.innerHTML = 'User job';
}

// Función auxiliar que borra los círculos de las rrss
function resetRRSSCircles() {
    const arrRRSSCircles = document.querySelectorAll('.card__item-list');
    for (let i = 0; i < arrRRSSCircles.length; i++) {
        arrRRSSCircles[i].classList.remove('card__item-list');
        arrRRSSCircles[i].classList.add('card__item-list-no-border');
    }
}

// Función auxiliar que pone el select en la posición default (el primer select o verdes)
function resetSelect() {
    selectEl.checked = true;
}

// Crear función para borrar miniatura y foto de preview
function resetPhotos() {
    profileImage.style.backgroundImage = 'url("/assets/images/darth-vader.jpg")';
   
    // miniatureEl.classList.remove('js__profile-preview');
    // photoPreviewEl.classList.remove('js__profile-image');
}

// Función global que resetea todo el formulario cuando pulsamos el botón yes
function handlerButtonResetClick() {
    resetInputs();
    resetCard();
    resetRRSSCircles();
    resetSelect();
    resetPhotos();
    containerAlertEl.classList.remove('alert-delete');
}







