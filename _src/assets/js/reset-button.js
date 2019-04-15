// El boton reset tiene que poner la paleta de colores en default, borrar todos los input del ormulario, borrar fotos miniatura y preview. También tiene que dejar la tarjeta vacía y los iconos sin rodear.

// Recoger el botón reset
const buttonResetEl = document.querySelector('.reset__btn');
// Recoger el select por defecto(el primero)
const selectEl = document.querySelector('#palette--blue-green');
// Recoger el formulario con todos sus inputs
const formEl = document.querySelectorAll('.fillTheGap-input');
// Recoger la foto miniatura
const miniatureEl = document.querySelector('.profile-miniature');
// Recoger la foto del preview
const photoPreviewEl = document.querySelector('.card__picture');
// Recoger user name de la tarjeta
const userNameEl = document.querySelector('.card-user__name');
// Recoger user job de la tarjeta
const userJobEl = document.querySelector('.card-user__position');


// Crear función que borre el form
function resetInputs(){
    for(let i=0;i<formEl.length;i++){
        formEl[i].value = '';
    }
}

// Crear función que borre user name y user job de la tarjeta
function resetCard(){
    userNameEl.innerHTML = 'User name';
    userJobEl.innerHTML = 'User job';
}

// Crear función que borre los círculos de las rrss
function resetRRSSCircles(){
    const arrRRSSCircles = document.querySelectorAll('.card__item-list');
    for (let i=0; i<arrRRSSCircles.length;i++){
        arrRRSSCircles[i].classList.remove('card__item-list');
        arrRRSSCircles[i].classList.add('card__item-list-no-border');
    }
}

// Crear función que ponga el select en la posición default (el primer select)
function resetSelect(){
    selectEl.checked = true;
}

// Crear función para borrar miniatura y foto de preview
function resetPhotos(){
    miniatureEl.classList.remove('js__profile-preview');
    photoPreviewEl.classList.remove('js__profile-image');
}

// Escuchar el click del botón reset
buttonResetEl.addEventListener('click', handleButtonResetClick);

// Poner un handler al click del botón reset
    // Cada value de cada elemento debe ser igual a ''
function handleButtonResetClick(){
    resetInputs();
    resetCard();
    resetRRSSCircles();
    resetSelect();
    resetPhotos();
}


