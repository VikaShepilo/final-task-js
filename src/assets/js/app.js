
let form = document.querySelector('.prompt-form');

form.addEventListener("submit", function(e){
    e.preventDefault();
    let name1 = document.querySelector('.prompt-email').value ;
    let lastName = document.querySelector('.prompt-password').value ;
    form.reset ();
    document.querySelector('.prompt-button1').disabled = true;
})

form.addEventListener("submit", function(e){
    e.preventDefault();
    let input1 = document.querySelector('.prompt-email');
    if (input1.value == ''){
        input1.focus()
    }
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email));
})

form.addEventListener("submit", function(e){
    e.preventDefault();
    let input2 = document.querySelector('.prompt-password');
    if (input2.value == ''){
        input2.focus()
    }
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    return re.test(String(password));
})