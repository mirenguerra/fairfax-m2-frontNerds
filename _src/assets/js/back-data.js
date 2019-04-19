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
    const twitterLink = document.querySelector('.twitter__link');
    const defaultTweet = "https://twitter.com/intent/tweet?text=My awesome profile card ";
      
     if (result.success) {
        responseURL.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
        twitterBtnEl.classList.remove('hidden');
        twitterLink.href = defaultTweet + result.cardURL;

    } else {
        responseURL.innerHTML = 'ERROR:' + result.error;
    }
}