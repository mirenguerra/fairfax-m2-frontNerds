const buttonShareEL = document.querySelector('.btn-share');

function handlerButtonShare(){
    sendRequest(userInfo);
}

buttonShareEL.addEventListener('click', handlerButtonShare);
