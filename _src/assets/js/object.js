
//Funcion que guarda datos del objeto en localStorage
function saveDataLs(){
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
};
// Funcion que comprueba si hay datos en localStoragey con ellos hacer una autorrellenado
function printDatafromLS(){
    const userInfofromLS = localStorage.getItem('userInfo');
    if (userInfofromLS) {
        userInfo = JSON.parse(userInfofromLS);
        setName.value = userInfo.name;
    }    
}

printDatafromLS(); 