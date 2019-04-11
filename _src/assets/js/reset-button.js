// El boton reset tiene que poner la paleta de colores en default, borrar todos los input del ormulario, borrar fotos miniatura y preview.

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


// Escuchar el click del botón reset

// Poner un handler al click del botón reset
    // Cada value de cada elemento debe ser igual a ''
