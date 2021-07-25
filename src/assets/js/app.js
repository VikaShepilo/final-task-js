function hideShow() {
    var div = document.getElementById("prompt-form-container").style.display;
    if(div == "none") {
        div = "block";
        document.body.style.overflowY = 'hidden';
    } else {
        div = "none";
        document.body.style.overflowY = 'visible';
    }
    document.getElementById("prompt-form-container").style.display = div;
}

let form = document.querySelector('.prompt-form');

form.onsubmit = (e) => {
    e.preventDefault();
    let name1 = document.querySelector('.prompt-email').value ;
    let lastName = document.querySelector('.prompt-password').value ;
    form.reset ();
    document.querySelector('.prompt-button1').disabled = true;
}

form.onsubmit = (e) => {
    e.preventDefault();
    let input1 = document.querySelector('.prompt-email');
    if (input1.value == ''){
        input1.focus()
    }
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email));
}