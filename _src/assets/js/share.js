const buttonShareEL = document.querySelector('.btn-share');

const handlerButtonShare = () => sendRequest(userInfo);

buttonShareEL.addEventListener('click', handlerButtonShare);
