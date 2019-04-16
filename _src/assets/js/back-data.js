
function sendRequest(userInfo) {
    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
        method: 'POST',
        body: JSON.stringify(userInfo),
        headers: {
            'content-type': 'application/json'
        },
    })
        .then(function (resp) { return resp.json(); })
        .then(function (result) { showURL(result); })
        .catch(function (error) { console.log(error); });
}

function showURL(result) {
    const responseURL = document.querySelector('.response');
    if (result.success) {
        responseURL.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
    } else {
        responseURL.innerHTML = 'ERROR:' + result.error;
    }
}