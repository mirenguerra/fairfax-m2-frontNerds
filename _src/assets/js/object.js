
//Funcion que guarda datos del objeto en localStorage
function saveDataLs(){
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
};
// Funcion que comprueba si hay datos en localStoragey con ellos hacer una autorrellenado
function printDatafromLS(){
    const userInfofromLS = localStorage.getItem('userInfo');
    if (userInfofromLS) {
        userInfo = JSON.parse(userInfofromLS);
        fillFormfromOBject();
        fillCardfromObject();
        fillPaletteObject();
    }    
}

function fillPaletteObject(){
    if(userInfo.palette === 1){
        inputGreen.checked = true;
        inputGrey.checked = false;
        inputRed.checked = false;
        changePaletteGreen(); 
    }else if(userInfo.palette === 2){
        inputRed.checked = true;
        inputGrey.checked = false;
        inputGreen.checked = false;
        changePaletteRed();
    }else{
        inputGrey.checked = true;
        inputGreen.checked = false;
        inputRed.checked = false;
        changePaletteGray(); 
    } 
}

function fillFormfromOBject(){
    setName.value = userInfo.name;
    setJob.value = userInfo.job;
    inputEmailEl.value = userInfo.email;
    inputTel.value = userInfo.phone;
    setGitHub.value = userInfo.github;
    linkedinInput.value = userInfo.linkedin;
    profilePreview.style.backgroundImage = userInfo.miniature;
}

function fillCardfromObject(){
    cardUserName.innerHTML = userInfo.name;
    cardUserJob.innerHTML = userInfo.job;
    profileImage.style.backgroundImage = userInfo.photo;
    fillEmail();
    fillPhone();
    fillLinkedin();
    fillGitHub();
}

function fillEmail(){
    const emailCard = document.getElementById('email-li');
    if (inputEmailEl.value) {
        emailCard.classList.remove('card__item-list-no-border');
        emailCard.classList.add('card__item-list');
    }
}

function fillPhone(){
    const phoneCard = document.getElementById('phone-li');
    if (inputTel.value) {
        phoneCard.classList.remove('card__item-list-no-border');
        phoneCard.classList.add('card__item-list');
    }
}

function fillLinkedin(){
    const linkedinCard = document.getElementById('linkedin-li');
    if (linkedinInput.value) {
        linkedinCard.classList.remove('card__item-list-no-border');
        linkedinCard.classList.add('card__item-list');
    }
}

function fillGitHub(){
    const gitHubCard = document.getElementById('gitHubEl');
    if (linkedinInput.value) {
        gitHubCard.classList.remove('card__item-list-no-border');
        gitHubCard.classList.add('card__item-list');
    }
}

printDatafromLS(); 