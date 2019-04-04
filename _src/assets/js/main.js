'use strict';

// USER LINKEDIN

    const inputLnkdIn = document.querySelector('#linkedin');
    const linkLnkdIn = document.querySelector('.card__link-linkedin');   

    inputLnkdIn.addEventListener('keyup', handleInputKeyup);

    function handleInputKeyup(event) {
        const linkedinInput = inputLnkdIn;
        const inputValueLnkdIn = linkedinInput.value;
        linkLnkdIn.href = inputValueLnkdIn;
            
    }
