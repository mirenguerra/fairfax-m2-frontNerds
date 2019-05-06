
//CHANGE COLOR PALETTE
//PALETTES COLORS
const userName = document.querySelector('.card-user');
const inputRed = document.getElementById('palette--red-orange');
const inputGrey = document.getElementById('palette--blue-gray');
const inputGreen = document.getElementById('palette--blue-green');
const contactList = document.querySelector('.card-sm__container');

const inputElArr = [inputGreen, inputRed, inputGrey];
const palettesClassNamesArr = ['green-palette', 'red-palette', 'gray-palette'];
const borderColorClassNameArr = ['borderLeftGreen', 'borderLeftRed', 'borderLeftGray'];

const handlerPaletteClick = (event)=>{
  const selectedPalette = event.currentTarget;
  userInfo.palette = selectedPalette.getAttribute('value');
  saveDataLs();
  const selectedItemIndex = inputElArr.indexOf(selectedPalette);
  for (let i = 0; i<3; i++){
    userName.classList.remove(palettesClassNamesArr[i], borderColorClassNameArr[i]);
    contactList.classList.remove(palettesClassNamesArr[i]);
  }
  userName.classList.add(palettesClassNamesArr[selectedItemIndex],borderColorClassNameArr[selectedItemIndex]);
  contactList.classList.add(palettesClassNamesArr[selectedItemIndex]);    
}
for (let i = 0; i<inputElArr.length; i++){
  inputElArr[i].addEventListener('click', handlerPaletteClick)
}

