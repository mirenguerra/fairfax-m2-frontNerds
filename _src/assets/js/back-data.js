
function sendRequest(userInfo) {
    buttonShareEL.disabled = true;

    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
        method: 'POST',
        body: JSON.stringify(userInfo),
        headers: {
            'content-type': 'application/json'
        },
    })
        .then(function (resp) { buttonShareEL.disabled = false; return resp.json(); })
        .then(function (result) { showURL(result); })
        .catch(function (error) { console.log(error); });
}

function showURL(result) {
    const responseURL = document.querySelector('.response');
    const twitterBtnEl = document.querySelector('.btn-twitter');
    
    if (result.success) {
        responseURL.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
         twitterBtnEl.innerHTML = twitterBtnEl.innerHTML + '<a href="https://twitter.com/intent/tweet?text=Hello%20world%20' + result.cardURL + '</a>';
        console.log(result.cardURL,'ghgh', twitterBtnEl.innerHTML );
        
    } else {
        responseURL.innerHTML = 'ERROR:' + result.error;
    }
}