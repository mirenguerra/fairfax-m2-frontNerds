const twitterBtnEl = document.querySelector('btn-twitter');
const buttonShareEL = document.querySelector('.btn-share');

function handlerButtonShare(){
    sendRequest(userInfo);
}

buttonShareEL.addEventListener('click', handlerButtonShare);
