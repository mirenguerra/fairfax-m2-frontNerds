function saveDataLs() {
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
}

//Check if there is info on LS and auto-fill everything with that
function printDatafromLS() {
  const userInfofromLS = localStorage.getItem('userInfo');
  if (userInfofromLS) {
    userInfo = JSON.parse(userInfofromLS);
    fillPaletteObject();
    fillFormfromOBject();
    fillCardfromObject();

    //THE CIRCLES FUNCTIONALITY IS NOT WORKING YET
    updateCirclesWithUserInfo();
  }
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

//All the following code could be simplified by using the Object.keys() method on the object, with returns an array of its keys, and just iterating it with two bucles.
function fillFormfromOBject() {
  document.getElementById('name').value = userInfo.name;
  document.getElementById('job').value = userInfo.job;
  document.getElementById('email').value = userInfo.email;
  document.getElementById('phone').value = userInfo.phone;
  document.getElementById('linkedin').value = userInfo.linkedin;
  document.getElementById('github').value = userInfo.github;
}

function fillCardfromObject() {
  drawInfoPreviewCard('name', userInfo.name);
  drawInfoPreviewCard('job', userInfo.job);
  drawInfoPreviewCard('email', userInfo.email);
  drawInfoPreviewCard('phone', userInfo.phone);
  drawInfoPreviewCard('linkedin', userInfo.linkedin);
  drawInfoPreviewCard('github', userInfo.github);

  profileImage.style.backgroundImage = `url(${userInfo.photo})`;
  profilePreview.style.backgroundImage = `url(${userInfo.miniature})`;
}

printDatafromLS();
