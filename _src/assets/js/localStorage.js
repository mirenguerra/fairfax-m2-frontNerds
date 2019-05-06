function saveDataLs() {
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
}

//Check if there is info on LS and auto-fill everything with that
function printDatafromLS() {
  const userInfofromLS = localStorage.getItem('userInfo');
  if (userInfofromLS) {
    userInfo = JSON.parse(userInfofromLS);
    fillFormfromOBject();
    fillPaletteObject();
    fillCardfromObject();
  }
}

function fillFormfromOBject() {
  document.getElementById('name').value = userInfo.name;
  document.getElementById('job').value = userInfo.job;
  document.getElementById('email').value = userInfo.email;
  document.getElementById('phone').value = userInfo.phone;
  document.getElementById('linkedin').value = userInfo.linkedin;
  document.getElementById('github').value = userInfo.github;
}

function fillPaletteObject() {
  if (userInfo.palette === 1) {
    inputGreen.checked = true;
  } else if (userInfo.palette === 2) {
    inputRed.checked = true;
  } else {
    inputGrey.checked = true;
  }
}

function fillCardfromObject() {
  fillAllInputs('name');
  fillAllInputs('job');
  fillAllInputs('email');
  fillAllInputs('phone');
  fillAllInputs('github');
  fillAllInputs('linkedin');
}

printDatafromLS();
