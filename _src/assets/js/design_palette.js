
//CHANGE COLOR PALETTE
//PALETTES COLORS
const userName = document.querySelector('.card-user');
const inputRed = document.getElementById('palette--red-orange');
const inputGrey = document.getElementById('palette--blue-gray');
const inputGreen = document.getElementById('palette--blue-green');
const contactList = document.querySelector('.card-sm__container');


function changePaletteRed() {
  userName.classList.remove('gray-palette', 'green-palette', 'borderLeftGreen', 'borderLeftGray');
  userName.classList.add('red-palette', 'borderLeftRed');
  contactList.classList.remove('gray-palette', 'green-palette');
  contactList.classList.add('red-palette');
}

function changePaletteGray() {
  userName.classList.remove('green-palette', 'red-palette', 'borderLeftGreen', 'borderLeftRed');
  userName.classList.add('gray-palette', 'borderLeftGray');
  contactList.classList.remove('green-palette', 'red-palette');
  contactList.classList.add('gray-palette');
}

function changePaletteGreen() {
  userName.classList.remove('gray-palette', 'red-palette', 'borderLeftGray', 'borderLeftRed');
  userName.classList.add('green-palette', 'borderLeftGreen');
  contactList.classList.remove('gray-palette', 'red-palette');
  contactList.classList.add('green-palette');
}


inputRed.addEventListener('click', changePaletteRed);
inputGrey.addEventListener('click', changePaletteGray);
inputGreen.addEventListener('click', changePaletteGreen);
