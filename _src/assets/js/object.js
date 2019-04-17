
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
    const emailCard = document.getElementById('email-li')
    if (inputEmailEl.value) {
        emailCard.classList.remove('card__item-list-no-border');
        emailCard.classList.add('card__item-list');
    }

}


printDatafromLS(); 