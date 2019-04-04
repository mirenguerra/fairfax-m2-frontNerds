'use strict';

// Cuando se escriba en el input de Linkedin se llene el enlace del icono en la tarjeta con lo escrito en el input

    // 1. Obtengo el input y lo guardo en una variable
    const input = document.querySelector('#linkedin');

    // 2. Obtengo el enlace y lo guardo en una variable
    const link = document.querySelector('.card__link-linkedin');   

    // 3. Escuchar un evento sobre el input
    input.addEventListener('keyup', handleInputKeyup);

    // 4. Hacer un handler
    function handleInputKeyup(event) {
        //  4.0 Cojer el input que tiene el listener
        const linkedinInput = input;
        

        
        /*//      4.0 Cojer el input que tiene el listener
        const currentInput = event.currentTarget;
        //      4.1 que recoja el contenido del input
        const inputValue = currentInput.value; // Utilizo el current para poder reutilizar la funcion
        //      4.2 que coloque el 4.1 en el contenido del enlace
        link.href = inputValue;*/
        //      4.3 que         
        
               
    }

