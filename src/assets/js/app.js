

var tabs = document.querySelectorAll(".tab");
var con = document.querySelectorAll(".c");
var temp = con[0];
    tabs.forEach(function(item,i){
	item.addEventListener("click", function() {
        temp.classList.add("none");
        temp = con[i];
        temp.classList.remove("none")
    })
})

let allforms = document.querySelector('.allforms');
let form = document.querySelector('.prompt-form');
let formRegistration = document.querySelector('.prompt-form2');
let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
let tabledisplay = document.querySelector('.tabledisplay');
let table = document.querySelector('.table');
let main = document.querySelector('.main');
let maininfo = document.querySelector('.maininfo');
let err = document.querySelector('.err');
let errRegistration = document.querySelector('.errRegistration');

var tabs = document.querySelectorAll(".tab");
var con = document.querySelectorAll(".c");
var temp = con[0];
    tabs.forEach(function(item,i){
	item.addEventListener("click", function() {
        temp.classList.add("none");
        temp = con[i];
        temp.classList.remove("none")
    })
})

document.addEventListener('click', function(event) {
    if ( event.target.className != '.allforms' ) {
        allforms.focus();
        //allforms.style.display = 'none'
    };
})

tabledisplay.addEventListener('click', function() {
    table.style.display = 'block'
    maininfo.style.display = 'none'
})

main.addEventListener('click', function() {
    table.style.display = 'none'
    maininfo.style.display = 'block'
    if (sUsrAg.indexOf("Firefox") > -1) {
    sBrowser = "Mozilla Firefox";
     //"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
    } else if (sUsrAg.indexOf("Opera") > -1) {
        sBrowser = "Opera";
    } else if (sUsrAg.indexOf("Trident") > -1) {
        sBrowser = "Microsoft Internet Explorer";
        //"Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
    } else if (sUsrAg.indexOf("Edge") > -1) {
        sBrowser = "Microsoft Edge";
        //"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
    } else if (sUsrAg.indexOf("Chrome") > -1) {
        sBrowser = "Google Chrome";
        //"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
    } else if (sUsrAg.indexOf("Safari") > -1) {
        sBrowser = "Apple Safari";
        //"Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
    } else {
        sBrowser = "unknown";
    }
    document.getElementById('maininfo').innerHTML += sBrowser
})

var sBrowser, sUsrAg = navigator.userAgent;

//The order matters here, and this may report false positives for unlisted browsers.

;

form.addEventListener("submit", function(e){
    e.preventDefault();
    let inputem = document.querySelector('.prompt-email');
    let inputpas = document.querySelector('.prompt-password');
    if (inputpas.value == ''){
        inputpas.focus()
    }
    if (inputem.value == ''){
        inputem.focus()
        return re.test(String(inputem.value));
    }
    if ((localStorage.getItem("email") == inputem.value) && (localStorage.getItem("password") == inputpas.value)) {
        allforms.style.display = "none"
    } else {
        err.style.display = 'block'
        err.innerHTML = 'АККАУНТ НЕ НАЙДЕН'
    }
})


//нет проверки совпадение паролей!!!
formRegistration.addEventListener("submit", function(e){
    e.preventDefault();
    let inputem = document.querySelector('.prompt-email-registration');
    let inputpas = document.querySelector('.prompt-password-registration');
    let inputpas2 = document.querySelector('.prompt-password2-registration');
    if (inputpas2.value == '') {
        inputpas2.focus()
    }
    if (inputpas.value == '') {
        inputpas.focus() 
    }
    if (inputem.value == ''){
        inputem.focus()
        inputem.value == re.test(String(inputem.value))   
    }
    if (inputpas.value == inputpas2.value) {
        inputpas.value = localStorage.setItem("password", inputpas.value)
        inputem.value = localStorage.setItem("email", inputem.value)
        formRegistration.style.display = "none"
        form.style.display = "block"
    } else {
        errRegistration.style.display = 'block'
        errRegistration.innerHTML = 'Пароли не совпадают!'
    }
    
})


//table
const url = 'https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json'

let arr = []
let arrAge = []
let arrBalance = []
let male = 0;
let female = 0;

function convertDate(inputFormat) {
    let date = inputFormat.substring(0,10)
    let d = new Date(date)
    return d.toLocaleDateString()
}

function returnMaxAge(age) {
    return Math.max.apply(null, age)
}

function returnMaxBalance(balance) {
    let newArrBalance = balance.map(function(mani) {
        mani = mani.slice(1, 6)
        mani = Number(mani.replace(/,/gi, '.'))
        return mani
    })
    let maxBalance = Math.max.apply(null, newArrBalance)
    maxBalance = '$' + maxBalance
    return maxBalance
}

// table
fetch(url)
    .then(r => r.json())
    .then(r => {
        r.forEach((e) => {
            const el = document.createElement('tr')
            let arr = e
            el.innerHTML = `<td>${arr.name} 
                            <td>${arr.company} 
                            <td>${arr.email} 
                            <td>${arr.phone}
                            <td>${arr.balance} 
                            <td>${convertDate(arr.registered)} 
                            <td>
                                <button class="button-del"> 
                                    Delete
                                </button>`           

            document.getElementById('app').appendChild(el)
            if (arr.isActive == false) el.style.backgroundColor = "#ffe4c4"

            if (arr.age) arrAge.push(arr.age)

            if (arr.balance) arrBalance.push(arr.balance)

            if (arr.gender == "male") ++male
            if (arr.gender == "female") ++female
        })

        document.getElementById('app1').innerHTML += returnMaxAge(arrAge)
        document.getElementById('app2').innerHTML += returnMaxBalance(arrBalance)
        document.getElementById('app3').innerHTML += male
        document.getElementById('app4').innerHTML += female

        document.querySelectorAll(".button-del").forEach(function(ell) { //перебор детей outerEl.parentElement.removeChild(a)
            ell.addEventListener('click', function() {
                if (confirm("Вы хотите удалить элемент со страницы?")) {
                    let a = this.closest('tr');
                    a.parentElement.removeChild(a);
                    }
                });
            });
    })

let buttonTop = document.querySelector('.button-top')
buttonTop.addEventListener("click", () => { 
    window.scrollTo({ top: 0, behavior: 'smooth'});
});