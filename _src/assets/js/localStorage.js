
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
//esta funcion hace que se mantenga seleccionado el color de la paleta elegido. 
//cuando recarga la página si el color es paleta 1 se mantendra seleccionado el input y no variara por defecto.
function fillPaletteObject(){
    if(userInfo.palette === 1){
        inputGreen.checked = true;
        changePaletteGreen(); 
    }else if(userInfo.palette === 2){
        inputRed.checked = true;
        changePaletteRed();
    }else{
        inputGrey.checked = true;
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
    profilePreview.style.backgroundImage = `url(${userInfo.miniature})`;
    profileImage.style.backgroundImage =`url(${userInfo.photo})`;
    // console.log(userInfo.miniature);
}

function fillCardfromObject(){
    //Si userInfo.name está vacío,pone 'User name' igual para job
    cardUserName.innerHTML = userInfo.name||'User name';
    cardUserJob.innerHTML = userInfo.job||'User job';
    profileImage.style.backgroundImage = userInfo.photo;
    fillEmail();
    fillPhone();
    fillLinkedin();
    fillGitHub();
}

function fillEmail(){
    const emailCard = document.getElementById('email-li');
    const emailLink = document.querySelector('.email');
    if (inputEmailEl.value) {
        emailCard.classList.remove('card__item-list-no-border');
        emailCard.classList.add('card__item-list');
        emailLink.href = `mailto:${inputEmailEl.value}`;
    }
}

function fillPhone(){
    const phoneCard = document.getElementById('phone-li');
    if (inputTel.value) {
        linkTel.setAttribute('href', 'tel: +34' + inputTel.value);
        phoneCard.classList.remove('card__item-list-no-border');
        phoneCard.classList.add('card__item-list');
    }
}

function fillLinkedin(){
    const linkedinCard = document.getElementById('linkedin-li');
    if (linkedinInput.value) {
        linkedinCard.classList.remove('card__item-list-no-border');
        linkedinCard.classList.add('card__item-list');
        linkLnkdIn.href = linkedinInput.value;
    }
}

function fillGitHub(){
    const gitHubCard = document.getElementById('gitHubEl');
    const userGitHub = setGitHub.value;
    if (linkedinInput.value) {
        gitHubCard.classList.remove('card__item-list-no-border');
        gitHubCard.classList.add('card__item-list');
        cardUserGitHub.href = `https://github.com/${userGitHub}`;
        cardUserGitHub.setAttribute('target','_blank') ;  
    }
    else {
        cardUserGitHub.href ='';
    }
}

printDatafromLS(); 