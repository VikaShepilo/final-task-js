function initMap() {
    var pos = {lat: 53.909129, lng: 27.470102}
    var pos1 = {lat: 53.908344, lng: 27.484478}
    var pos2 = {lat: 53.907308, lng: 27.492482}

    var opt = {
        center: pos1,
        zoom: 14,
    };

    var map = new google.maps.Map(document.getElementById("map"), opt);

    var marker = new google.maps.Marker({ 
        map: map,
        position: pos,
        title: "OJJO"
    });

    var info = new google.maps.InfoWindow({ 
        content: '<p>ТЦ Скала</p>'
    });

    marker.addListener("click", function() {
        info.open(map, marker)
    });

    var marker1 = new google.maps.Marker({
        map: map,
        position: pos1,
        title: "OJJO"
    });

    var info1 = new google.maps.InfoWindow({
        content: '<p>ТЦ Тивали</p>'
    });

    marker1.addListener("click", function() {
        info1.open(map, marker1)
    });

    var marker2 = new google.maps.Marker({
        map: map,
        position: pos2,
        title: "OJJO"
    });

    var info2 = new google.maps.InfoWindow({
        content: '<p>Раковский</p>'
    });

    marker2.addListener("click", function() {
        info2.open(map, marker2)
    });    
}

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
let err = document.querySelector('.err');

document.addEventListener('click', function(event) {
    if ( event.target.className != '.allforms' ) {
        allforms.focus();
        //allforms.style.display = 'none'
    };
})

tabledisplay.addEventListener('click', function() {
    let table = document.querySelector('.table')
    table.style.display = 'block'
})

form.addEventListener("submit", function(e){
    e.preventDefault();
    let inputem = document.querySelector('.prompt-email');
    let inputpas = document.querySelector('.prompt-password');
    if (inputpas.value == ''){
        inputpas.focus()
    }
    if (inputem.value == ''){
        inputem.focus()
        return re.test(String(email));
    }
})

form.addEventListener("submit", function(e){
    e.preventDefault();
    let inputem = document.querySelector('.prompt-email');
    let inputpas = document.querySelector('.prompt-password');
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
        inputem.value == re.test(String(email))
    }
    inputpas.value = localStorage.setItem("password", inputpas.value)
    inputem.value = localStorage.setItem("email", inputem.value)
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