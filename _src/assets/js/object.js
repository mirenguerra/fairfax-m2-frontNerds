

let userInfo = {
  'palette': 1, //porque es el valor por defecto
  'name': '',
  'job': '',
  'phone': '',
  'email': '',
  'linkedin': '',
  'github': '',
  'photo': '',
};

//Funcion que guarda datos del objeto en localStorage
function saveDataLs(){
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
};
// Funcion que comprueba si hay datos en localStoragey con ellos hacer una autorrellenado
function printDatafromLS(){
    const userInfofromLS = localStorage.getItem('userInfo');    
    userInfo = JSON.parse(userInfofromLS);
    console.log(userInfo);  
}

printDatafromLS(); 